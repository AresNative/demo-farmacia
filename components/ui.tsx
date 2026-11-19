import type { LucideIcon } from "lucide-react";

export function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  tone = "teal",
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  sub: string;
  tone?: "teal" | "amber" | "rose" | "sky";
}) {
  const tones: Record<string, string> = {
    teal: "bg-teal-100 text-teal-700",
    amber: "bg-amber-100 text-amber-700",
    rose: "bg-rose-100 text-rose-700",
    sky: "bg-sky-100 text-sky-700",
  };
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">{label}</p>
        <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${tones[tone]}`}>
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <p className="mt-2 text-2xl font-bold text-slate-900">{value}</p>
      <p className="mt-1 text-xs text-slate-500">{sub}</p>
    </div>
  );
}

export function Card({
  title,
  subtitle,
  children,
  action,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold text-slate-900">{title}</h2>
          {subtitle && <p className="mt-0.5 text-xs text-slate-500">{subtitle}</p>}
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

export function Badge({
  children,
  tone = "slate",
}: {
  children: React.ReactNode;
  tone?: "slate" | "teal" | "amber" | "rose" | "sky";
}) {
  const tones: Record<string, string> = {
    slate: "bg-slate-100 text-slate-700",
    teal: "bg-teal-100 text-teal-800",
    amber: "bg-amber-100 text-amber-800",
    rose: "bg-rose-100 text-rose-800",
    sky: "bg-sky-100 text-sky-800",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
}

export function BarChart({
  data,
  height = 220,
}: {
  data: { label: string; value: number }[];
  height?: number;
}) {
  const max = Math.max(...data.map((d) => d.value));
  const barW = 100 / data.length;
  return (
    <div className="w-full">
      <svg viewBox={`0 0 100 ${height / 4}`} className="w-full" preserveAspectRatio="none" style={{ height }}>
        {data.map((d, i) => {
          const h = (d.value / max) * (height / 4 - 8);
          const x = i * barW + barW * 0.18;
          return (
            <g key={d.label}>
              <rect
                x={x}
                y={height / 4 - 4 - h}
                width={barW * 0.64}
                height={h}
                rx={1.2}
                className="fill-teal-600"
              >
                <title>{`${d.label}: ${d.value.toLocaleString("es-MX")}`}</title>
              </rect>
            </g>
          );
        })}
      </svg>
      <div className="mt-1 flex">
        {data.map((d) => (
          <span key={d.label} className="flex-1 text-center text-[11px] text-slate-500">
            {d.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ProgressBar({ value, tone = "teal" }: { value: number; tone?: "teal" | "amber" | "rose" }) {
  const colors: Record<string, string> = {
    teal: "bg-teal-600",
    amber: "bg-amber-500",
    rose: "bg-rose-500",
  };
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
      <div className={`h-full rounded-full ${colors[tone]}`} style={{ width: `${Math.min(100, value)}%` }} />
    </div>
  );
}
