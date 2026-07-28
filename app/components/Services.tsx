"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

export default function Services() {
  return (
    <section className="services">
      <motion.div
        className="services-inner container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="services-text">
          <p className="services-eyebrow">What we do</p>
          <h2 className="services-headline">The standard for a well-kept home.</h2>
          <p className="services-body">We clean Manhattan apartments, Brooklyn brownstones, and Queens homes with the same attention to detail. Every visit. No shortcuts.</p>
          <ul className="services-list" role="list">
            <li>Full apartment cleaning</li>
            <li>Kitchen and bathroom deep clean</li>
            <li>Move-in / move-out cleaning</li>
            <li>Recurring weekly or bi-weekly service</li>
          </ul>
        </div>
        <div className="services-image-wrap">
          <ProjectImage id="feature_1" className="services-image" />
        </div>
      </motion.div>
      <style>{`
        .services {
          background-color: var(--color-canvas);
          padding-block: var(--space-24);
        }
        .services-inner {
          display: grid;
          grid-template-columns: 55% 45%;
          gap: var(--space-16);
          align-items: center;
        }
        .services-text {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }
        .services-eyebrow {
          font-family: var(--font-body);
          font-size: var(--text-label);
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-warm);
          margin: 0;
        }
        .services-headline {
          font-family: var(--font-display);
          font-size: var(--text-section);
          font-weight: 500;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--color-text);
          margin: 0;
          overflow-wrap: anywhere;
          min-width: 0;
        }
        .services-body {
          font-family: var(--font-body);
          font-size: var(--text-body);
          line-height: 1.65;
          color: var(--color-text-secondary);
          margin: 0;
          max-width: 52ch;
        }
        .services-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }
        .services-list li {
          font-family: var(--font-body);
          font-size: var(--text-body);
          color: var(--color-text);
          padding-inline-start: var(--space-6);
          position: relative;
        }
        .services-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.6em;
          width: 16px;
          height: 1px;
          background-color: var(--color-warm);
        }
        .services-image-wrap {
          position: relative;
          height: 100%;
          min-height: 480px;
        }
        .services-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        @media (max-width: 768px) {
          .services-inner {
            grid-template-columns: 1fr;
          }
          .services-image-wrap {
            min-height: 320px;
          }
        }
      `}</style>
    </section>
  );
}
