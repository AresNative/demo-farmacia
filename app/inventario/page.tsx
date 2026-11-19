import { Boxes, AlertTriangle, CalendarClock } from "lucide-react";
import { StatCard, Card, Badge } from "@/components/ui";
import { formatoMXN, medicamentos, diasParaCaducidad } from "@/lib/data";

export default function Inventario() {
  const totalUnidades = medicamentos.reduce((a, m) => a + m.stock, 0);
  const valorInventario = medicamentos.reduce((a, m) => a + m.stock * m.costo, 0);
  const stockBajo = medicamentos.filter((m) => m.stock <= m.stockMinimo);
  const caducidadProxima = medicamentos
    .filter((m) => diasParaCaducidad(m.caducidad) <= 90)
    .sort((a, b) => diasParaCaducidad(a.caducidad) - diasParaCaducidad(b.caducidad));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Inventario</h1>
        <p className="text-sm text-slate-500">
          Existencias de medicamentos con alertas de stock bajo y caducidad próxima.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard icon={Boxes} label="Unidades en inventario" value={totalUnidades.toLocaleString("es-MX")} sub={`${medicamentos.length} artículos activos`} />
        <StatCard icon={AlertTriangle} label="Stock bajo" value={`${stockBajo.length} artículos`} sub="En o por debajo del mínimo" tone="amber" />
        <StatCard icon={CalendarClock} label="Caducan en ≤ 90 días" value={`${caducidadProxima.length} artículos`} sub="Revisar antes de vender" tone="rose" />
      </div>

      <Card title="Alertas de caducidad" subtitle="Ordenadas por fecha de caducidad">
        <ul className="space-y-2">
          {caducidadProxima.map((m) => {
            const dias = diasParaCaducidad(m.caducidad);
            return (
              <li key={m.id} className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-rose-50 px-4 py-2.5 text-sm">
                <span className="font-semibold text-rose-900">{m.nombre} · {m.presentacion}</span>
                <span className="text-rose-800">
                  Caduca el {m.caducidad} ({dias} días) · Stock: {m.stock} uds.
                </span>
              </li>
            );
          })}
        </ul>
      </Card>

      <Card title="Existencias por artículo" subtitle={`Valor del inventario al costo: ${formatoMXN(valorInventario)}`}>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase text-slate-500">
                <th className="pb-2 pr-4">Artículo</th>
                <th className="pb-2 pr-4">Categoría</th>
                <th className="pb-2 pr-4">Proveedor</th>
                <th className="pb-2 pr-4 text-right">Precio</th>
                <th className="pb-2 pr-4 text-right">Stock</th>
                <th className="pb-2 pr-4">Caducidad</th>
                <th className="pb-2">Estado</th>
              </tr>
            </thead>
            <tbody>
              {medicamentos.map((m) => {
                const bajo = m.stock <= m.stockMinimo;
                const caduca = diasParaCaducidad(m.caducidad) <= 90;
                return (
                  <tr key={m.id} className="border-b border-slate-100">
                    <td className="py-3 pr-4">
                      <p className="font-semibold">{m.nombre}</p>
                      <p className="text-xs text-slate-500">{m.presentacion}</p>
                    </td>
                    <td className="py-3 pr-4">{m.categoria}</td>
                    <td className="py-3 pr-4 text-slate-600">{m.proveedor}</td>
                    <td className="py-3 pr-4 text-right">{formatoMXN(m.precio)}</td>
                    <td className="py-3 pr-4 text-right font-semibold">{m.stock}</td>
                    <td className="py-3 pr-4">{m.caducidad}</td>
                    <td className="py-3">
                      {bajo ? (
                        <Badge tone="amber">Stock bajo</Badge>
                      ) : caduca ? (
                        <Badge tone="rose">Caducidad próxima</Badge>
                      ) : (
                        <Badge tone="teal">OK</Badge>
                      )}
                    </td>
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
