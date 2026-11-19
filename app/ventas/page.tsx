import { DollarSign, Receipt, CreditCard, Banknote } from "lucide-react";
import { StatCard, Card, BarChart, Badge } from "@/components/ui";
import { formatoMXN, ventas14Dias, ticketsHoy } from "@/lib/data";

export default function Ventas() {
  const ventasHoy = ventas14Dias[ventas14Dias.length - 1];
  const totalTickets = ticketsHoy.reduce(
    (acc, t) => acc + t.articulos.reduce((a, i) => a + i.cantidad * i.precio, 0),
    0
  );
  const efectivo = ticketsHoy
    .filter((t) => t.pago === "Efectivo")
    .reduce((acc, t) => acc + t.articulos.reduce((a, i) => a + i.cantidad * i.precio, 0), 0);
  const tarjeta = ticketsHoy
    .filter((t) => t.pago === "Tarjeta")
    .reduce((acc, t) => acc + t.articulos.reduce((a, i) => a + i.cantidad * i.precio, 0), 0);
  const ticketPromedio = Math.round(ventasHoy.ventas / ventasHoy.tickets);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Ventas</h1>
        <p className="text-sm text-slate-500">Tickets del día y comportamiento de ventas de los últimos 14 días.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={DollarSign} label="Ventas del día" value={formatoMXN(ventasHoy.ventas)} sub={`${ventasHoy.tickets} tickets`} />
        <StatCard icon={Receipt} label="Ticket promedio" value={formatoMXN(ticketPromedio)} sub="Promedio por venta" tone="sky" />
        <StatCard icon={Banknote} label="Efectivo" value={formatoMXN(efectivo)} sub="En tickets registrados" tone="amber" />
        <StatCard icon={CreditCard} label="Tarjeta / transferencia" value={formatoMXN(tarjeta + (totalTickets - efectivo - tarjeta))} sub="Pagos electrónicos" tone="rose" />
      </div>

      <Card title="Ventas por día" subtitle="Últimos 14 días">
        <BarChart data={ventas14Dias.map((d) => ({ label: d.fecha, value: d.ventas }))} height={240} />
      </Card>

      <Card title="Tickets de hoy" subtitle={`Total registrado en lista: ${formatoMXN(totalTickets)}`}>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase text-slate-500">
                <th className="pb-2 pr-4">Folio</th>
                <th className="pb-2 pr-4">Hora</th>
                <th className="pb-2 pr-4">Cliente</th>
                <th className="pb-2 pr-4">Artículos</th>
                <th className="pb-2 pr-4">Pago</th>
                <th className="pb-2 text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {ticketsHoy.map((t) => {
                const total = t.articulos.reduce((a, i) => a + i.cantidad * i.precio, 0);
                return (
                  <tr key={t.folio} className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-semibold">{t.folio}</td>
                    <td className="py-3 pr-4">{t.hora}</td>
                    <td className="py-3 pr-4">{t.cliente}</td>
                    <td className="py-3 pr-4 text-slate-600">
                      {t.articulos.map((a) => `${a.cantidad}× ${a.nombre}`).join(" · ")}
                    </td>
                    <td className="py-3 pr-4">
                      <Badge tone={t.pago === "Efectivo" ? "slate" : t.pago === "Tarjeta" ? "sky" : "teal"}>{t.pago}</Badge>
                    </td>
                    <td className="py-3 text-right font-semibold">{formatoMXN(total)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
