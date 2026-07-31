import BlobCursor from './BlobCursor';
import './styles.css';

export default function App() {
  return (
    <>
      <BlobCursor />

      <nav className="lily-nav" aria-label="Primary navigation">
        <a className="lily-nav__brand" href="/" aria-label="LILY.studio home">
          LIL<span>Y</span>.studio
        </a>
        <div className="lily-nav__actions">
          <a className="lily-nav__action lily-nav__email" href="mailto:lily.studio26@gmail.com">
            Email
          </a>
          <a className="lily-nav__action lily-nav__contact" href="#contact">
            Contact Us
          </a>
          <a
            className="lily-nav__social"
            href="https://www.linkedin.com/company/lily-studio-hq/?viewAsMember=true"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
            </svg>
          </a>
        </div>
      </nav>

      <main className="lily-page" aria-label="LILY.studio visual identity website">
        <h1 className="visually-hidden">LILY.studio</h1>
        <div className="lily-artboard__wrapper">
          <img
            className="lily-artboard"
            src="/assets/lily-reference.png"
            alt="LILY.studio brand identity, mood board, logo, typography, color, and application panels"
            width="1920"
            height="14040"
          />
        </div>
      </main>

      <footer id="contact" className="lily-footer" role="contentinfo">
        <div className="lily-footer__inner">
          <div className="lily-footer__brand">LIL<span>Y</span>.studio</div>

          <div className="lily-footer__phones" aria-label="Phone numbers">
            <span className="lily-footer__label">Phone</span>
            <a href="tel:+916204578740">+91 6204578740</a>
            <a href="tel:+917070857067">+91 7070857067</a>
          </div>

          <div className="lily-footer__social" aria-label="Instagram">
            <a href="https://www.instagram.com/lilystudiohq/" target="_blank" rel="noreferrer" className="lily-nav__email lily-footer__insta" aria-label="Instagram">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
