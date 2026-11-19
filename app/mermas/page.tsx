import { TrendingDown, CalendarClock, PackageX, Scale } from "lucide-react";
import { StatCard, Card, Badge } from "@/components/ui";
import { formatoMXN, mermas } from "@/lib/data";

const MOTIVOS = ["Caducidad", "Daño", "Robo", "Error de conteo"] as const;

export default function Mermas() {
  const totalCosto = mermas.reduce((a, m) => a + m.costo, 0);
  const totalUnidades = mermas.reduce((a, m) => a + m.cantidad, 0);
  const porCaducidad = mermas.filter((m) => m.motivo === "Caducidad").reduce((a, m) => a + m.costo, 0);
  const porMotivo = MOTIVOS.map((motivo) => ({
    motivo,
    unidades: mermas.filter((m) => m.motivo === motivo).reduce((a, m) => a + m.cantidad, 0),
    costo: mermas.filter((m) => m.motivo === motivo).reduce((a, m) => a + m.costo, 0),
  })).filter((x) => x.costo > 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Mermas</h1>
        <p className="text-sm text-slate-500">
          Pérdidas registradas por caducidad, daño o errores de conteo — últimos 9 días.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={TrendingDown} label="Costo total de mermas" value={formatoMXN(totalCosto)} sub="Últimos 9 días" tone="rose" />
        <StatCard icon={PackageX} label="Unidades perdidas" value={`${totalUnidades} uds.`} sub="En 8 registros" tone="amber" />
        <StatCard icon={CalendarClock} label="Por caducidad" value={formatoMXN(porCaducidad)} sub={`${Math.round((porCaducidad / totalCosto) * 100)}% del costo total`} tone="sky" />
        <StatCard icon={Scale} label="Merma vs. ventas" value="0.6%" sub="Costo de merma sobre ventas del periodo" tone="teal" />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card title="Merma por motivo" subtitle="Costo y unidades por causa">
          <ul className="space-y-3">
            {porMotivo.map((x) => (
              <li key={x.motivo} className="flex items-center justify-between text-sm">
                <span className="font-medium">{x.motivo}</span>
                <span className="text-slate-600">
                  {x.unidades} uds. · <strong className="text-slate-900">{formatoMXN(x.costo)}</strong>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 rounded-xl bg-teal-50 p-3 text-xs leading-relaxed text-teal-900">
            Recomendación del sistema: revisar la rotación de Naproxeno y Loratadina; sus lotes
            próximos a caducar concentran la mayor parte de la merma por caducidad.
          </p>
        </Card>

        <Card title="Registro de mermas" subtitle="Del 10 al 18 de noviembre de 2026">
          <div className="overflow-x-auto lg:col-span-2">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-xs uppercase text-slate-500">
                  <th className="pb-2 pr-4">Folio</th>
                  <th className="pb-2 pr-4">Fecha</th>
                  <th className="pb-2 pr-4">Artículo</th>
                  <th className="pb-2 pr-4 text-right">Cant.</th>
                  <th className="pb-2 pr-4">Motivo</th>
                  <th className="pb-2 text-right">Costo</th>
                </tr>
              </thead>
              <tbody>
                {mermas.map((m) => (
                  <tr key={m.id} className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-semibold">{m.id}</td>
                    <td className="py-3 pr-4">{m.fecha}</td>
                    <td className="py-3 pr-4">{m.articulo}</td>
                    <td className="py-3 pr-4 text-right">{m.cantidad}</td>
                    <td className="py-3 pr-4">
                      <Badge tone={m.motivo === "Caducidad" ? "rose" : m.motivo === "Daño" ? "amber" : "slate"}>
                        {m.motivo}
                      </Badge>
                    </td>
                    <td className="py-3 text-right font-semibold">{formatoMXN(m.costo)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
