"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ShoppingCart,
  Boxes,
  TrendingDown,
  Package,
  Truck,
  BarChart3,
  Pill,
} from "lucide-react";

const NAV = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/ventas", label: "Ventas", icon: ShoppingCart },
  { href: "/inventario", label: "Inventario", icon: Boxes },
  { href: "/mermas", label: "Mermas", icon: TrendingDown },
  { href: "/articulos", label: "Artículos", icon: Package },
  { href: "/compras", label: "Compras", icon: Truck },
  { href: "/reporteria", label: "Reportería", icon: BarChart3 },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-teal-900 text-white">
      <div className="flex items-center gap-3 px-5 pb-5 pt-6">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500">
          <Pill className="h-6 w-6" />
        </span>
        <div>
          <p className="text-lg font-bold leading-tight">FarmaDemo</p>
          <p className="text-xs text-teal-200">Administración de farmacia</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {NAV.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                active ? "bg-teal-700 text-white" : "text-teal-100 hover:bg-teal-800"
              }`}
            >
              <Icon className="h-5 w-5" />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-teal-800 p-4 text-xs leading-relaxed text-teal-200">
        <p className="font-semibold text-white">Sucursal Centro</p>
        <p>Ensenada, Baja California</p>
        <p className="mt-2 rounded-md bg-teal-800 px-2 py-1 text-center font-semibold text-teal-100">
          Demo con datos de ejemplo
        </p>
      </div>
    </aside>
  );
}
