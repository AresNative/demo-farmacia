import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "FarmaDemo — Sistema de Administración para Farmacias",
  description:
    "Demo de sistema de administración para farmacias: ventas, inventario, mermas, compras y reportería en tiempo real. Desarrollado por Juan José Eusebio Rodríguez.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="text-slate-900">
        <Sidebar />
        <div className="pl-64">
          <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
            <div className="flex items-center justify-between px-6 py-3">
              <div>
                <p className="text-sm font-semibold text-slate-900">Farmacia Demo — Sucursal Centro</p>
                <p className="text-xs text-slate-500">Ensenada, Baja California · miércoles 18 de noviembre de 2026</p>
              </div>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                Demo con datos de ejemplo
              </span>
            </div>
          </header>
          <main className="mx-auto max-w-6xl px-6 py-6">{children}</main>
          <footer className="border-t border-slate-200 px-6 py-4 text-center text-xs text-slate-500">
            Desarrollado por{" "}
            <a className="font-semibold text-teal-700" href="https://github.com/AresNative">
              Juan José Eusebio Rodríguez
            </a>{" "}
            · github.com/AresNative · eusebio.dev · Demo con datos ficticios, sin conexión a sistemas reales.
          </footer>
        </div>
      </body>
    </html>
  );
}
