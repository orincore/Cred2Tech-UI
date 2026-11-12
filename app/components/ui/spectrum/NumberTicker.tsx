/* Spectrum UI "Number Ticker", ported to CSS: each digit is a column of 0-9 that rolls to its
   value once on load, with a per-digit stagger. Server-component safe; the resting state is the
   final number (also under reduced motion). Styles live in spectrum.css. */

interface NumberTickerProps {
  value: number;
  prefix?: string;
  /** Indian digit grouping (25,00,000). */
  groupIndian?: boolean;
  /** Seconds before the roll starts. */
  delay?: number;
  className?: string;
}

const DIGITS = Array.from({ length: 10 }, (_, n) => n);

export function NumberTicker({ value, prefix = '', groupIndian = false, delay = 0, className = '' }: NumberTickerProps) {
  const text = groupIndian ? Math.round(value).toLocaleString('en-IN') : String(Math.round(value));
  let digitIndex = 0;

  return (
    <span className={`sp-ticker ${className}`}>
      <span className="sp-sr">{`${prefix}${text}`}</span>
      <span aria-hidden="true" className="sp-ticker__row">
        {prefix && <span>{prefix}</span>}
        {text.split('').map((ch, i) => {
          if (!/\d/.test(ch)) return <span key={i}>{ch}</span>;
          const d = Number(ch);
          const k = digitIndex++;
          return (
            <span key={i} className="sp-ticker__digit">
              <span
                className="sp-ticker__col"
                style={{ ['--d' as string]: d, ['--k' as string]: k, ['--t0' as string]: `${delay}s` }}
              >
                {DIGITS.map((n) => (
                  <span key={n}>{n}</span>
                ))}
              </span>
            </span>
          );
        })}
      </span>
    </span>
  );
}
