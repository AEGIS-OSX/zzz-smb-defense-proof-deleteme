"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.10,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner container">
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero-eyebrow" variants={itemVariants}>
            Manhattan · Brooklyn · Queens
          </motion.p>
          <motion.h1 className="hero-headline" variants={itemVariants}>
            Your home, exactly as it should be.
          </motion.h1>
          <motion.p className="hero-subhead" variants={itemVariants}>
            Professional residential cleaning for Manhattan, Brooklyn, and Queens. Starting at $140.
          </motion.p>
          <motion.div className="hero-cta-row" variants={itemVariants}>
            <motion.a
              href="#booking"
              className="hero-cta"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              Book your first clean
            </motion.a>
          </motion.div>
        </motion.div>
        <div className="hero-image-wrap">
          <ProjectImage id="hero" className="hero-image" />
        </div>
      </div>
      <style jsx>{`
        .hero {
          background-color: var(--color-canvas);
          padding-block-start: var(--space-16);
          padding-block-end: calc(var(--space-16) * 1.4);
          overflow: hidden;
        }
        .hero-inner {
          display: grid;
          grid-template-columns: 58% 42%;
          gap: var(--space-16);
          align-items: center;
        }
        .hero-text {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
          max-width: 600px;
        }
        .hero-eyebrow {
          font-family: var(--font-body);
          font-size: var(--text-label);
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-warm);
          margin: 0;
        }
        .hero-headline {
          font-family: var(--font-display);
          font-size: var(--text-display);
          font-weight: 500;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--color-text);
          margin: 0;
          overflow-wrap: anywhere;
          min-width: 0;
        }
        .hero-subhead {
          font-family: var(--font-body);
          font-size: var(--text-body);
          font-weight: 400;
          line-height: 1.65;
          color: var(--color-text-secondary);
          margin: 0;
          max-width: 52ch;
        }
        .hero-cta-row {
          margin-top: var(--space-2);
        }
        .hero-cta {
          display: inline-flex;
          align-items: center;
          background-color: var(--color-accent);
          color: var(--color-accent-ink);
          font-family: var(--font-body);
          font-size: var(--text-small);
          font-weight: 500;
          letter-spacing: 0.01em;
          padding: var(--space-4) var(--space-8);
          border-radius: var(--radius-btn);
          text-decoration: none;
          white-space: nowrap;
          outline: 2px solid transparent;
          outline-offset: 1px;
          transition: background-color 0.15s var(--ease-out);
        }
        .hero-cta:hover {
          background-color: var(--color-success);
        }
        .hero-cta:focus-visible {
          outline: 2px solid var(--color-focus);
          outline-offset: 1px;
        }
        .hero-cta:active {
          opacity: 0.85;
        }
        .hero-image-wrap {
          position: relative;
          height: 100%;
          min-height: 480px;
        }
        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0;
          display: block;
        }
        @media (max-width: 768px) {
          .hero-inner {
            grid-template-columns: 1fr;
          }
          .hero-image-wrap {
            order: -1;
          }
          .hero-headline {
            font-size: var(--text-display-s);
          }
        }
        @media (max-width: 480px) {
          .hero-headline {
            font-size: var(--text-h2);
          }
          .hero {
            padding-block-start: var(--space-8);
          }
        }
      `}</style>
    </section>
  );
}
