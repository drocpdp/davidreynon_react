import { Link } from "react-router-dom";
import "../styles/companyPages.css";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/soccer-scan-trainer/id6774516286";

export default function SoccerScanTrainerSupportPage() {
  return (
    <main className="brand-page">
      <section className="product-hero">
        <div className="brand-shell">
          <p className="eyebrow">Support</p>

          <h1>Soccer Scan Trainer Support</h1>

          <p className="hero-subtitle">
            Help, feedback, and basic guidance for Soccer Scan Trainer — a
            visual cue training app for soccer players working on scanning,
            reaction speed, first touch, and awareness.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="mailto:davidreynon@gmail.com">
              Email Support
            </a>

            <Link className="secondary-button" to="/soccer-scan-trainer">
              Back to App Page
            </Link>
          </div>
        </div>
      </section>

      <section className="brand-section">
        <div className="brand-shell two-column">
          <div>
            <p className="section-label">Contact</p>
            <h2>Need help with the app?</h2>
          </div>

          <div className="section-copy">
            <p>
              For support, feedback, bug reports, or questions, please email:
            </p>

            <p>
              <a href="mailto:davidreynon@gmail.com">davidreynon@gmail.com</a>
            </p>

            <p>
              When contacting support, it helps to include your device model,
              iOS version, and a short description of what happened.
            </p>
          </div>
        </div>
      </section>

      <section className="brand-section alt-section">
        <div className="brand-shell">
          <p className="section-label">Quick Help</p>
          <h2>Common questions</h2>

          <div className="drill-grid">
            <article className="drill-card">
              <h3>What does the app do?</h3>
              <p>
                Soccer Scan Trainer displays visual cues such as colors,
                numbers, letters, and arrows. Players react to those cues while
                passing, receiving, dribbling, turning, or changing direction.
              </p>
            </article>

            <article className="drill-card">
              <h3>Do I need an account?</h3>
              <p>
                No. Soccer Scan Trainer does not require an account. Open the
                app, choose your cues, set the session, and train.
              </p>
            </article>

            <article className="drill-card">
              <h3>How should I set it up?</h3>
              <p>
                Place your iPhone on a tripod, chair, bench, fence, wall, or any
                stable surface where the player can clearly see the screen.
              </p>
            </article>

            <article className="drill-card">
              <h3>Who is it for?</h3>
              <p>
                The app is built for young soccer players, parents, individual
                coaches, and players who want to add scanning and reaction work
                to technical training.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="brand-section">
        <div className="brand-shell two-column">
          <div>
            <p className="section-label">Useful Links</p>
            <h2>Learn more about Soccer Scan Trainer.</h2>
          </div>

          <div className="tag-list">
            <Link to="/soccer-scan-trainer">Soccer Scan Trainer Page</Link>
            <Link to="/510am">5:10am Company Page</Link>
            <Link to="/soccer-scan-trainer/privacy">Privacy Policy</Link>
            <a href={APP_STORE_URL} target="_blank" rel="noreferrer">
              App Store
            </a>
            <a href="mailto:davidreynon@gmail.com">Contact Support</a>
          </div>
        </div>
      </section>

      <section className="brand-footer-cta">
        <div className="brand-shell">
          <h2>Soccer Scan Trainer</h2>

          <p>Train your eyes. React faster. Build better habits.</p>

          <div className="footer-links">
            <Link to="/soccer-scan-trainer">App Page</Link>
            <Link to="/510am">5:10am</Link>
            <a href={APP_STORE_URL} target="_blank" rel="noreferrer">
              App Store
            </a>
            <Link to="/soccer-scan-trainer/privacy">Privacy Policy</Link>
            <a href="mailto:davidreynon@gmail.com">Contact</a>
          </div>
        </div>
      </section>
    </main>
  );
}