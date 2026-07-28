"use client";

import { motion } from "framer-motion";

export default function Booking() {
  return (
    <section className="booking" id="booking">
      <div className="booking-inner container">
        <div className="booking-text">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="booking-headline">Schedule your visit.</h2>
            <p className="booking-subhead">
              {`Select your home size and we'll confirm availability within 24 hours.`}
            </p>
            <ul className="booking-options" role="list">
              <li>Studio / 1BR — from $140</li>
              <li>2BR — from $195</li>
              <li>3BR+ — from $260</li>
            </ul>
            <a
              href="mailto:hello@northlight.nyc"
              className="booking-cta"
            >
              Book your clean
            </a>
          </motion.div>
        </div>
      </div>
      <style>{`
        .booking {
          background-color: var(--color-accent);
          padding-block: var(--space-24);
        }
        .booking-inner {
          display: grid;
          grid-template-columns: 1fr;
          max-width: 640px;
        }
        .booking-headline {
          font-family: var(--font-display);
          font-size: var(--text-section);
          font-weight: 500;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--color-accent-ink);
          margin: 0 0 var(--space-4);
          overflow-wrap: anywhere;
          min-width: 0;
        }
        .booking-subhead {
          font-family: var(--font-body);
          font-size: var(--text-body);
          line-height: 1.65;
          color: var(--color-accent-ink);
          opacity: 0.85;
          margin: 0 0 var(--space-8);
        }
        .booking-options {
          list-style: none;
          margin: 0 0 var(--space-8);
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }
        .booking-options li {
          font-family: var(--font-body);
          font-size: var(--text-body);
          color: var(--color-accent-ink);
          padding-inline-start: var(--space-6);
          position: relative;
        }
        .booking-options li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.6em;
          width: 16px;
          height: 1px;
          background-color: var(--color-accent-ink);
          opacity: 0.5;
        }
        .booking-cta {
          display: inline-flex;
          align-items: center;
          background-color: var(--color-accent-ink);
          color: var(--color-accent);
          font-family: var(--font-body);
          font-size: var(--text-small);
          font-weight: 600;
          letter-spacing: 0.01em;
          padding: var(--space-4) var(--space-8);
          border-radius: var(--radius-btn);
          text-decoration: none;
          white-space: nowrap;
          outline: 2px solid transparent;
          outline-offset: 1px;
          transition: background-color 0.15s var(--ease-out), color 0.15s var(--ease-out);
        }
        .booking-cta:hover {
          background-color: var(--color-canvas);
          color: var(--color-accent);
        }
        .booking-cta:focus-visible {
          outline: 2px solid var(--color-accent-ink);
          outline-offset: 1px;
        }
        .booking-cta:active {
          opacity: 0.85;
        }
      `}</style>
    </section>
  );
}
