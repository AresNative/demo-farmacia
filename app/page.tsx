import { DollarSign, Receipt, Package, Users, AlertTriangle, CalendarClock } from "lucide-react";
import { StatCard, Card, BarChart, Badge, ProgressBar } from "@/components/ui";
import { formatoMXN, medicamentos, ventas14Dias, masVendidos, ticketsHoy, diasParaCaducidad } from "@/lib/data";

export default function Dashboard() {
  const ventasHoy = ventas14Dias[ventas14Dias.length - 1];
  const tickets = ticketsHoy.length;
  const ticketPromedio = Math.round(ventasHoy.ventas / ventasHoy.tickets);
  const productosVendidos = ticketsHoy.reduce(
    (acc, t) => acc + t.articulos.reduce((a, i) => a + i.cantidad, 0),
    0
  );
  const stockBajo = medicamentos.filter((m) => m.stock <= m.stockMinimo);
  const caducidadProxima = medicamentos
    .filter((m) => diasParaCaducidad(m.caducidad) <= 90)
    .sort((a, b) => diasParaCaducidad(a.caducidad) - diasParaCaducidad(b.caducidad));
  const ventasSemana = ventas14Dias.slice(-7).reduce((a, d) => a + d.ventas, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-sm text-slate-500">
          Resumen de ventas, inventario y mermas de la farmacia — datos de ejemplo.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={DollarSign} label="Ventas del día" value={formatoMXN(ventasHoy.ventas)} sub={`+12.4% vs. ayer · ${ventasHoy.tickets} tickets`} />
        <StatCard icon={Receipt} label="Ticket promedio" value={formatoMXN(ticketPromedio)} sub="Promedio por venta de hoy" tone="sky" />
        <StatCard icon={Package} label="Productos vendidos" value={`${productosVendidos} uds.`} sub="En los tickets registrados hoy" tone="amber" />
        <StatCard icon={Users} label="Clientes atendidos" value={`${ventasHoy.tickets}`} sub="Ventas de mostrador y con receta" tone="rose" />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card
          title="Ventas de los últimos 14 días"
          subtitle={`Total de la semana: ${formatoMXN(ventasSemana)}`}
          action={<Badge tone="teal">En vivo (demo)</Badge>}
        >
          <div className="lg:col-span-2">
            <BarChart data={ventas14Dias.map((d) => ({ label: d.fecha, value: d.ventas }))} />
            <p className="mt-3 text-xs text-slate-500">
              El sábado 15 de noviembre fue el mejor día de la quincena con {formatoMXN(21480)} en ventas.
            </p>
          </div>
        </Card>

        <Card title="Alertas de inventario" subtitle="Requieren atención hoy">
          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-xl bg-amber-50 p-3">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
              <div>
                <p className="text-sm font-semibold text-amber-900">Stock bajo: {stockBajo.length} artículos</p>
                <p className="text-xs text-amber-800">
                  {stockBajo.map((m) => m.nombre).join(", ")} están en o por debajo del mínimo.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl bg-rose-50 p-3">
              <CalendarClock className="mt-0.5 h-5 w-5 shrink-0 text-rose-600" />
              <div>
                <p className="text-sm font-semibold text-rose-900">Caducidad próxima: {caducidadProxima.length} artículos</p>
                <p className="text-xs text-rose-800">
                  {caducidadProxima.slice(0, 3).map((m) => `${m.nombre} (${diasParaCaducidad(m.caducidad)} días)`).join(", ")}
                  .
                </p>
              </div>
            </div>
            <a href="/inventario" className="block rounded-lg bg-teal-700 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-teal-800">
              Revisar inventario
            </a>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card title="Productos más vendidos" subtitle="Últimos 14 días, por unidades">
          <ol className="space-y-3">
            {masVendidos.slice(0, 5).map((p, i) => (
              <li key={p.nombre} className="flex items-center gap-3">
                <span className="w-6 text-sm font-bold text-teal-700">{i + 1}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex justify-between text-sm">
                    <span className="truncate font-medium">{p.nombre}</span>
                    <span className="font-semibold">{p.unidades} uds.</span>
                  </div>
                  <ProgressBar value={(p.unidades / masVendidos[0].unidades) * 100} />
                </div>
                <span className="w-20 text-right text-sm text-slate-500">{formatoMXN(p.ventas)}</span>
              </li>
            ))}
          </ol>
        </Card>

        <Card title="Últimas ventas de hoy" subtitle="Tickets registrados en mostrador">
          <ul className="divide-y divide-slate-100">
            {ticketsHoy.slice(0, 6).map((t) => {
              const total = t.articulos.reduce((a, i) => a + i.cantidad * i.precio, 0);
              return (
                <li key={t.folio} className="flex items-center justify-between py-2.5 text-sm">
                  <div>
                    <p className="font-semibold">{t.folio} · {t.hora}</p>
                    <p className="text-xs text-slate-500">
                      {t.articulos.map((a) => `${a.cantidad}× ${a.nombre}`).join(" · ")}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{formatoMXN(total)}</p>
                    <Badge tone={t.pago === "Efectivo" ? "slate" : t.pago === "Tarjeta" ? "sky" : "teal"}>{t.pago}</Badge>
                  </div>
                </li>
              );
            })}
          </ul>
          <a href="/ventas" className="mt-3 block text-sm font-semibold text-teal-700 hover:underline">
            Ver todas las ventas →
          </a>
        </Card>
      </div>
    </div>
  );
}
