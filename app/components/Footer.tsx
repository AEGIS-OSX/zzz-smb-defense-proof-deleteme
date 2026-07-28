import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-brand">
          <span className="footer-name">Northlight NYC</span>
          <span className="footer-area">Manhattan, Brooklyn, Queens</span>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="mailto:hello@northlight.nyc" className="footer-link">
            hello@northlight.nyc
          </a>
          <a href="tel:+12125550180" className="footer-link">
            (212) 555-0180
          </a>
        </nav>
        <div className="footer-legal">
          <span className="footer-copy">&copy; 2026 Northlight NYC. All rights reserved.</span>
        </div>
      </div>
      <style>{`
        .footer {
          background-color: var(--color-canvas);
          border-top: 1px solid var(--color-border);
          padding-block: var(--space-8);
        }
        .footer-inner {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-6);
        }
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }
        .footer-name {
          font-family: var(--font-body);
          font-size: var(--text-small);
          font-weight: 600;
          color: var(--color-text);
        }
        .footer-area {
          font-family: var(--font-body);
          font-size: var(--text-label);
          color: var(--color-text-secondary);
        }
        .footer-nav {
          display: flex;
          gap: var(--space-6);
          flex-wrap: wrap;
        }
        .footer-link {
          font-family: var(--font-body);
          font-size: var(--text-label);
          color: var(--color-text-secondary);
          text-decoration: none;
          outline: 2px solid transparent;
          outline-offset: 1px;
          transition: color 0.15s var(--ease-out);
        }
        .footer-link:hover {
          color: var(--color-text);
        }
        .footer-link:focus-visible {
          outline: 2px solid var(--color-focus);
          outline-offset: 1px;
        }
        .footer-copy {
          font-family: var(--font-body);
          font-size: var(--text-label);
          color: var(--color-text-secondary);
        }
        @media (max-width: 768px) {
          .footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}
