import { DollarSign, TrendingUp, Package, PieChart } from "lucide-react";
import { StatCard, Card, BarChart, ProgressBar } from "@/components/ui";
import { formatoMXN, ventas14Dias, ventasPorCategoria, masVendidos, mermas } from "@/lib/data";

export default function Reporteria() {
  const total14 = ventas14Dias.reduce((a, d) => a + d.ventas, 0);
  const promedioDiario = Math.round(total14 / ventas14Dias.length);
  const mejorDia = ventas14Dias.reduce((a, d) => (d.ventas > a.ventas ? d : a), ventas14Dias[0]);
  const totalMermas = mermas.reduce((a, m) => a + m.costo, 0);
  const ticketPromedio = Math.round(ventas14Dias[ventas14Dias.length - 1].ventas / ventas14Dias[ventas14Dias.length - 1].tickets);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Reportería</h1>
        <p className="text-sm text-slate-500">
          Reportes de ventas por periodo, categoría y producto — del 5 al 18 de noviembre de 2026.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={DollarSign} label="Ventas 14 días" value={formatoMXN(total14)} sub="Total del periodo" />
        <StatCard icon={TrendingUp} label="Venta diaria promedio" value={formatoMXN(promedioDiario)} sub="Promedio de los 14 días" tone="sky" />
        <StatCard icon={Package} label="Mejor día" value={formatoMXN(mejorDia.ventas)} sub={`${mejorDia.fecha} (${mejorDia.tickets} tickets)`} tone="amber" />
        <StatCard icon={PieChart} label="Ticket promedio" value={formatoMXN(ticketPromedio)} sub="Último día del periodo" tone="rose" />
      </div>

      <Card title="Ventas diarias" subtitle="Del 5 al 18 de noviembre de 2026">
        <BarChart data={ventas14Dias.map((d) => ({ label: d.fecha, value: d.ventas }))} height={240} />
      </Card>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card title="Ventas por categoría" subtitle="Participación sobre el total del periodo">
          <ul className="space-y-3">
            {ventasPorCategoria.map((c) => (
              <li key={c.categoria} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{c.categoria}</span>
                  <span className="text-slate-600">
                    {formatoMXN(c.ventas)} · {c.porcentaje}%
                  </span>
                </div>
                <ProgressBar value={c.porcentaje} tone={c.porcentaje >= 20 ? "teal" : c.porcentaje >= 10 ? "amber" : "rose"} />
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Top 8 productos" subtitle="Por unidades vendidas en 14 días">
          <ol className="space-y-2.5">
            {masVendidos.map((p, i) => (
              <li key={p.nombre} className="flex items-center justify-between gap-3 text-sm">
                <span className="flex items-center gap-2">
                  <span className="w-5 font-bold text-teal-700">{i + 1}</span>
                  <span className="font-medium">{p.nombre}</span>
                </span>
                <span className="text-slate-600">
                  {p.unidades} uds. · <strong className="text-slate-900">{formatoMXN(p.ventas)}</strong>
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-4 rounded-xl bg-slate-50 p-3 text-xs leading-relaxed text-slate-600">
            Resumen del periodo: las ventas crecieron 29% frente a los 14 días anteriores (dato de ejemplo).
            La merma del periodo fue de {formatoMXN(totalMermas)}, equivalente al 0.6% de las ventas.
          </p>
        </Card>
      </div>
    </div>
  );
}
