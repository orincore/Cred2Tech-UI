import React from 'react';

export function LegalSection({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index?: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 py-8 sm:py-10 border-b border-[var(--outline)] last:border-b-0">
      {title && (
        <h2 className="font-(family-name:--font-outfit) font-bold text-base sm:text-lg text-[var(--on-surface)] mb-3 flex items-baseline gap-2">
          {index && (
            <span className="font-(family-name:--font-jb-mono) text-xs sm:text-sm font-bold text-[var(--on-surface)]/40 shrink-0">
              {index}
            </span>
          )}
          <span>{title}</span>
        </h2>
      )}
      <div className="space-y-3.5 text-[var(--on-muted)]">{children}</div>
    </section>
  );
}

export function LegalSub({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-(family-name:--font-outfit) font-semibold text-sm sm:text-base text-[var(--on-surface)] mt-5 mb-1.5">
      {children}
    </h3>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="text-[13px] sm:text-sm leading-relaxed">{children}</p>;
}

export function UL({ children }: { children: React.ReactNode }) {
  return <ul className="space-y-2">{children}</ul>;
}

export function OL({ children }: { children: React.ReactNode }) {
  return <ol className="space-y-2 list-decimal list-outside pl-5 marker:text-[var(--on-surface)]/50 marker:font-(family-name:--font-jb-mono) marker:text-xs">{children}</ol>;
}

export function LI({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-[13px] sm:text-sm leading-relaxed">
      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--on-surface)]/40 shrink-0" />
      <span>{children}</span>
    </li>
  );
}

export function OLI({ children }: { children: React.ReactNode }) {
  return <li className="text-[13px] sm:text-sm leading-relaxed pl-1">{children}</li>;
}

export function Callout({ children, tone = 'default' }: { children: React.ReactNode; tone?: 'default' | 'strong' }) {
  return (
    <div
      className={
        tone === 'strong'
          ? 'border-l-2 border-[var(--on-surface)] bg-[var(--on-surface)]/[0.04] px-3.5 py-3 sm:px-4 sm:py-3.5'
          : 'border-l-2 border-[var(--outline)] bg-[var(--surface)] px-3.5 py-3 sm:px-4 sm:py-3.5'
      }
    >
      <div className="text-[13px] sm:text-sm leading-relaxed">{children}</div>
    </div>
  );
}

export function DefinitionList({ items }: { items: { term: string; def: React.ReactNode }[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="text-[13px] sm:text-sm leading-relaxed">
          <span className="font-semibold text-[var(--on-surface)]">{item.term}</span> {item.def}
        </li>
      ))}
    </ul>
  );
}

export function InfoTable({
  head,
  rows,
}: {
  head: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto border border-[var(--outline)]">
      <table className="w-full text-sm border-collapse min-w-[560px]">
        <thead>
          <tr className="bg-[var(--surface)]">
            {head.map((h, i) => (
              <th
                key={i}
                className="text-left font-(family-name:--font-outfit) font-semibold text-[var(--on-surface)] px-4 py-3 border-b border-[var(--outline)]"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-[var(--outline)] last:border-b-0">
              {row.map((cell, j) => (
                <td key={j} className="align-top px-4 py-3 text-[var(--on-muted)] leading-relaxed">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function StatCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="bg-[var(--surface)] border border-[var(--outline)] p-4 sm:p-5 flex flex-col gap-1.5">
      <span className="font-(family-name:--font-jb-mono) text-[10px] sm:text-[11px] font-bold tracking-[0.12em] uppercase text-[var(--on-surface)]/50 leading-tight">
        {label}
      </span>
      <span className="font-(family-name:--font-outfit) text-xl sm:text-2xl font-bold text-[var(--on-surface)]">{value}</span>
      {sub && <span className="text-[11px] sm:text-xs text-[var(--on-muted)] leading-snug">{sub}</span>}
    </div>
  );
}

export function StatGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">{children}</div>;
}

export function ContactCard({
  rows,
}: {
  rows: { label: string; value: React.ReactNode }[];
}) {
  return (
    <div className="bg-[var(--surface)] border border-[var(--outline)] p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-x-4 gap-y-3">
      {rows.map((row, i) => (
        <React.Fragment key={i}>
          <div className="font-(family-name:--font-jb-mono) text-[11px] font-bold tracking-[0.14em] uppercase text-[var(--on-surface)]/50 sm:pt-0.5">
            {row.label}
          </div>
          <div className="text-[13px] sm:text-sm text-[var(--on-surface)] leading-relaxed">{row.value}</div>
        </React.Fragment>
      ))}
    </div>
  );
}
