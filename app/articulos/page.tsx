import { Package, Pill, FileText } from "lucide-react";
import { StatCard, Card, Badge } from "@/components/ui";
import { formatoMXN, medicamentos } from "@/lib/data";

export default function Articulos() {
  const categorias = [...new Set(medicamentos.map((m) => m.categoria))];
  const conReceta = medicamentos.filter((m) => m.requiereReceta).length;
  const precioPromedio = Math.round(medicamentos.reduce((a, m) => a + m.precio, 0) / medicamentos.length);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Artículos</h1>
        <p className="text-sm text-slate-500">Catálogo de medicamentos y productos de la farmacia.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard icon={Package} label="Artículos activos" value={`${medicamentos.length}`} sub={`${categorias.length} categorías`} />
        <StatCard icon={FileText} label="Requieren receta" value={`${conReceta}`} sub="Venta controlada" tone="amber" />
        <StatCard icon={Pill} label="Precio promedio" value={formatoMXN(precioPromedio)} sub="Por artículo del catálogo" tone="sky" />
      </div>

      {categorias.map((categoria) => (
        <Card key={categoria} title={categoria} subtitle={`${medicamentos.filter((m) => m.categoria === categoria).length} artículos`}>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {medicamentos
              .filter((m) => m.categoria === categoria)
              .map((m) => (
                <div key={m.id} className="flex items-start justify-between gap-3 rounded-xl border border-slate-200 p-4">
                  <div>
                    <p className="font-semibold">
                      {m.nombre}{" "}
                      {m.requiereReceta && <Badge tone="amber">Receta</Badge>}
                    </p>
                    <p className="text-xs text-slate-500">{m.presentacion}</p>
                    <p className="mt-1 text-xs text-slate-500">
                      {m.id} · {m.proveedor}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-teal-700">{formatoMXN(m.precio)}</p>
                    <p className="text-xs text-slate-500">Stock: {m.stock} uds.</p>
                  </div>
                </div>
              ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
