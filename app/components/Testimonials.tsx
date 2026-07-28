"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

export default function Testimonials() {
  return (
    <motion.section
      className="testimonials"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <figure className="testimonial-lead">
          <blockquote className="testimonial-lead-quote">
            <p>{`"I've tried four cleaning services in the last two years. Northlight is the only one I've kept. They remember how I like things."`}</p>
          </blockquote>
          <figcaption className="testimonial-lead-caption">
            <span className="testimonial-name">Sarah M.</span>
            <span className="testimonial-location">Upper West Side</span>
          </figcaption>
        </figure>

        <div className="testimonials-secondary">
          <figure className="testimonial-secondary">
            <blockquote>
              <p>"Moved into a new apartment and needed it spotless before my furniture arrived. Done in three hours. Immaculate."</p>
            </blockquote>
            <figcaption>
              <span className="testimonial-name">James K.</span>
              <span className="testimonial-location">Park Slope</span>
            </figcaption>
          </figure>

          <figure className="testimonial-secondary">
            <blockquote>
              <p>"Reliable, thorough, and they actually show up on time. In New York, that alone is worth the price."</p>
            </blockquote>
            <figcaption>
              <span className="testimonial-name">Priya R.</span>
              <span className="testimonial-location">Astoria</span>
            </figcaption>
          </figure>
        </div>

        <div className="testimonials-image-wrap">
          <ProjectImage id="social_proof" className="testimonials-image" />
        </div>
      </div>

      <style>{`
        .testimonials {
          background-color: var(--color-surface);
          padding-block: var(--space-24);
        }
        .testimonial-lead {
          margin: 0 0 var(--space-16);
        }
        .testimonial-lead-quote p {
          font-family: var(--font-display);
          font-size: var(--text-h2);
          font-weight: 400;
          line-height: 1.3;
          letter-spacing: -0.01em;
          color: var(--color-text);
          margin: 0;
          max-width: 72ch;
        }
        .testimonial-lead-caption {
          display: flex;
          gap: var(--space-4);
          align-items: center;
          margin-top: var(--space-6);
        }
        .testimonial-name {
          font-family: var(--font-body);
          font-size: var(--text-small);
          font-weight: 600;
          color: var(--color-text);
        }
        .testimonial-location {
          font-family: var(--font-body);
          font-size: var(--text-small);
          color: var(--color-text-secondary);
        }
        .testimonials-secondary {
          display: grid;
          grid-template-columns: 60% 40%;
          gap: var(--space-12);
          margin-bottom: var(--space-16);
        }
        .testimonial-secondary {
          margin: 0;
        }
        .testimonial-secondary blockquote p {
          font-family: var(--font-body);
          font-size: var(--text-body);
          line-height: 1.65;
          color: var(--color-text-secondary);
          margin: 0;
        }
        .testimonials-image-wrap {
          width: 100%;
          height: 320px;
          overflow: hidden;
        }
        .testimonials-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        @media (max-width: 768px) {
          .testimonials-secondary {
            grid-template-columns: 1fr;
          }
          .testimonial-lead-quote p {
            font-size: var(--text-h3);
          }
        }
      `}</style>
    </motion.section>
  );
}
