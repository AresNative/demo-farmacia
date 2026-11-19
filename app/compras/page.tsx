import { Truck, Clock, CheckCircle2, ShoppingBag } from "lucide-react";
import { StatCard, Card, Badge } from "@/components/ui";
import { formatoMXN, compras, proveedores } from "@/lib/data";

export default function Compras() {
  const totalMes = compras.reduce((a, c) => a + c.total, 0);
  const enTransito = compras.filter((c) => c.estado === "En tránsito");
  const pendientes = compras.filter((c) => c.estado === "Pendiente");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Compras a proveedores</h1>
        <p className="text-sm text-slate-500">Órdenes de compra y directorio de proveedores de la farmacia.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard icon={ShoppingBag} label="Compras del periodo" value={formatoMXN(totalMes)} sub={`${compras.length} órdenes del 10 al 18 nov`} />
        <StatCard icon={Truck} label="En tránsito" value={`${enTransito.length} órdenes`} sub={enTransito.map((c) => c.folio).join(", ") || "—"} tone="sky" />
        <StatCard icon={Clock} label="Pendientes" value={`${pendientes.length} órdenes`} sub={pendientes.map((c) => c.folio).join(", ") || "—"} tone="amber" />
      </div>

      <Card title="Órdenes de compra" subtitle="Del 10 al 18 de noviembre de 2026">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase text-slate-500">
                <th className="pb-2 pr-4">Folio</th>
                <th className="pb-2 pr-4">Fecha</th>
                <th className="pb-2 pr-4">Proveedor</th>
                <th className="pb-2 pr-4 text-right">Artículos</th>
                <th className="pb-2 pr-4 text-right">Total</th>
                <th className="pb-2">Estado</th>
              </tr>
            </thead>
            <tbody>
              {compras.map((c) => (
                <tr key={c.folio} className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-semibold">{c.folio}</td>
                  <td className="py-3 pr-4">{c.fecha}</td>
                  <td className="py-3 pr-4">{c.proveedor}</td>
                  <td className="py-3 pr-4 text-right">{c.articulos}</td>
                  <td className="py-3 pr-4 text-right font-semibold">{formatoMXN(c.total)}</td>
                  <td className="py-3">
                    <Badge tone={c.estado === "Recibida" ? "teal" : c.estado === "En tránsito" ? "sky" : "amber"}>
                      {c.estado === "Recibida" ? <CheckCircle2 className="mr-1 h-3 w-3" /> : null}
                      {c.estado}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="Proveedores" subtitle="Distribuidores activos de la farmacia">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {proveedores.map((p) => (
            <div key={p.nombre} className="rounded-xl border border-slate-200 p-4">
              <p className="font-semibold">{p.nombre}</p>
              <p className="mt-1 text-sm text-slate-600">{p.contacto}</p>
              <p className="text-sm text-slate-600">{p.telefono}</p>
              <p className="text-sm text-teal-700">{p.email}</p>
              <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                <span>Entrega: {p.entrega}</span>
                <Badge tone="teal">{p.articulos} artículos</Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
