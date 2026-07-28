import React from "react";

interface TrustBarProps {}

const items = [
  { stat: "4,200+", label: "cleans completed" },
  { stat: "12 years", label: "in NYC" },
  { stat: "47", label: "zip codes served" },
  { stat: "Fully insured", label: "and bonded" },
] as const;

export default function TrustBar(_props: TrustBarProps) {
  return (
    <>
      <section className="trust-bar" aria-label="Service statistics">
        <div className="container">
          <ul className="trust-bar-list" role="list">
            {items.map((item) => (
              <li className="trust-bar-item" key={item.stat}>
                <span className="trust-bar-stat">{item.stat}</span>
                <span className="trust-bar-label">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <style>{`
        .trust-bar {
          background-color: var(--color-text);
          padding-block: var(--space-12);
        }

        .trust-bar-list {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-12) var(--space-16);
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: flex-start;
        }

        .trust-bar-item {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }

        .trust-bar-stat {
          font-family: var(--font-display);
          font-size: var(--text-h2);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -0.01em;
          color: var(--color-canvas);
        }

        .trust-bar-label {
          font-family: var(--font-body);
          font-size: var(--text-label);
          font-weight: 500;
          letter-spacing: 0.02em;
          color: var(--color-warm);
        }

        @media (max-width: 768px) {
          .trust-bar-list {
            gap: var(--space-8) var(--space-12);
          }

          .trust-bar-stat {
            font-size: var(--text-h3);
          }
        }

        @media (max-width: 480px) {
          .trust-bar-list {
            flex-direction: column;
            gap: var(--space-6);
          }
        }
      `}</style>
    </>
  );
}
