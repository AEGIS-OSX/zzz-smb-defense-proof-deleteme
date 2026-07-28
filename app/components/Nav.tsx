import { ProjectImage } from "@/app/components/ProjectImage";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <ProjectImage id="logo" className="nav-logo" />
        </Link>
        <Link href="#booking" className="nav-cta">
          Book a clean
        </Link>
      </div>
      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background-color: var(--color-canvas);
          border-bottom: 1px solid var(--color-border);
          padding-block: var(--space-4);
        }
        .nav-logo {
          height: 32px;
          width: auto;
          display: block;
        }
        .nav-cta {
          display: inline-flex;
          align-items: center;
          background-color: var(--color-accent);
          color: var(--color-accent-ink);
          font-family: var(--font-body);
          font-size: var(--text-label);
          font-weight: 500;
          letter-spacing: 0.02em;
          padding: var(--space-3) var(--space-6);
          border-radius: var(--radius-btn);
          text-decoration: none;
          white-space: nowrap;
          outline: 2px solid transparent;
          outline-offset: 1px;
          transition: background-color 0.15s var(--ease-out), opacity 0.15s var(--ease-out);
        }
        .nav-cta:hover {
          background-color: var(--color-success);
        }
        .nav-cta:focus-visible {
          outline: 2px solid var(--color-focus);
          outline-offset: 1px;
        }
        .nav-cta:active {
          opacity: 0.85;
        }
      `}</style>
    </nav>
  );
}
