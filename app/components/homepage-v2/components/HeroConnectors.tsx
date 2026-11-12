'use client';

import { useEffect, useState, type RefObject } from 'react';

/* Animated black dashed connectors inside the hero dashboard: Sourcing Partner (left) and MSME
   (right) flow into the Cred2Tech hub, and the hub connects to each of the three service cards
   with its own line. Positions are measured from the DOM (ResizeObserver), so the lines stay exact at every
   width. The dashes march along each path, toward the hub and then down to the services. */

interface Line {
  id: string;
  d: string;
  tip: { x: number; y: number; dir: 'down' | 'left' | 'right' };
}

function arrow({ x, y, dir }: Line['tip']) {
  if (dir === 'right') return `${x - 6},${y - 4} ${x},${y} ${x - 6},${y + 4}`;
  if (dir === 'left') return `${x + 6},${y - 4} ${x},${y} ${x + 6},${y + 4}`;
  return `${x - 4},${y - 6} ${x},${y} ${x + 4},${y - 6}`;
}

const R = 10; // corner radius
const GAP = 6; // a path stops this far short of its target; the arrowhead covers the rest

/* Down, across, down: a source into the hub (phones), or the hub into a card. */
function drop(x0: number, y0: number, x1: number, y1: number) {
  const my = y0 + (y1 - y0) / 2;
  if (Math.abs(x1 - x0) < 2) return `M${x0} ${y0} V${y1}`;
  const dx = x1 > x0 ? 1 : -1;
  const r = Math.min(R, Math.abs(x1 - x0) / 2, (y1 - y0) / 4);
  return `M${x0} ${y0} V${my - r} Q${x0} ${my} ${x0 + r * dx} ${my} H${x1 - r * dx} Q${x1} ${my} ${x1} ${my + r} V${y1}`;
}

export function HeroConnectors({ rootRef }: { rootRef: RefObject<HTMLElement | null> }) {
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [lines, setLines] = useState<Line[]>([]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const measure = () => {
      const base = root.getBoundingClientRect();
      const rel = (el: Element) => {
        const r = el.getBoundingClientRect();
        return { l: r.left - base.left, t: r.top - base.top, r: r.right - base.left, b: r.bottom - base.top, cx: r.left - base.left + r.width / 2, cy: r.top - base.top + r.height / 2 };
      };
      const hub = root.querySelector('[data-node="hub"]');
      const panels = [...root.querySelectorAll<HTMLElement>('[data-node="panel"]')];
      if (!hub || !panels.length) return;

      const h = rel(hub);
      const firstRowTop = Math.min(...panels.map((p) => rel(p).t));
      const next: Line[] = [];

      root.querySelectorAll('[data-node="src"]').forEach((el, i) => {
        const s = rel(el);
        if (s.r - s.l < 2) return; // hidden
        if (s.b < h.t - 8) {
          // stacked above the hub (phones): flows down, arrow touching the hub's top
          const x = h.cx + (s.cx < h.cx ? -1 : 1) * Math.min(28, (h.r - h.l) / 4);
          next.push({ id: `src${i}`, d: drop(s.cx, s.b, x, h.t - GAP), tip: { x, y: h.t, dir: 'down' } });
        } else if (s.r < h.l - 8) {
          // left source on the hub's row: flows right, arrow touching the hub's left side
          next.push({ id: `src${i}`, d: `M${s.r} ${h.cy} H${h.l - GAP}`, tip: { x: h.l, y: h.cy, dir: 'right' } });
        } else if (s.l > h.r + 8) {
          // right source on the hub's row: flows left, arrow touching the hub's right side
          next.push({ id: `src${i}`, d: `M${s.l} ${h.cy} H${h.r + GAP}`, tip: { x: h.r, y: h.cy, dir: 'left' } });
        }
      });

      // each card gets its own line, leaving the hub's bottom edge at its own point
      const firstRow = panels.map(rel).filter((pr) => pr.t <= firstRowTop + 4).sort((a, b) => a.cx - b.cx);
      const hw = h.r - h.l;
      firstRow.forEach((pr, i) => {
        const x0 = firstRow.length === 1 ? h.cx : h.l + hw * (0.22 + (0.56 * i) / (firstRow.length - 1));
        next.push({ id: `p${i}`, d: drop(x0, h.b, pr.cx, pr.t - GAP), tip: { x: pr.cx, y: pr.t, dir: 'down' } });
      });

      setSize({ w: base.width, h: base.height });
      setLines(next);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(root);
    root.querySelectorAll('[data-node]').forEach((el) => ro.observe(el));
    document.fonts?.ready.then(measure).catch(() => {});
    return () => ro.disconnect();
  }, [rootRef]);

  if (!size.w) return null;

  return (
    <svg className="hc" width={size.w} height={size.h} viewBox={`0 0 ${size.w} ${size.h}`} aria-hidden="true">
      {lines.map((l) => (
        <g key={l.id} className="hc__line">
          <path className="hc__track" d={l.d} />
          <path className="hc__dash" d={l.d} />
          <polygon className="hc__tip" points={arrow(l.tip)} />
        </g>
      ))}
    </svg>
  );
}
