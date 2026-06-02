import { Link } from "react-router-dom";
import "../styles/companyPages.css";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/soccer-scan-trainer/id6774516286";

export default function FiveTenAmPage() {
  return (
    <main className="brand-page">
      <section className="brand-hero">
        <div className="brand-shell">
          <p className="eyebrow">5:10am</p>

          <h1>Small training tools for players who put in the work early.</h1>

          <p className="hero-subtitle">
            5:10am creates simple, focused apps for young athletes, parents,
            and coaches who believe improvement comes from consistent work —
            especially when no one is watching.
          </p>

          <div className="hero-actions">
            <Link className="primary-button" to="/soccer-scan-trainer">
              View Soccer Scan Trainer
            </Link>

            <a
              className="secondary-button"
              href={APP_STORE_URL}
              target="_blank"
              rel="noreferrer"
            >
              Download on the App Store
            </a>
          </div>
        </div>
      </section>

      <section className="brand-section">
        <div className="brand-shell two-column">
          <div>
            <p className="section-label">What We Build</p>
            <h2>Practical tools for individual player development.</h2>
          </div>

          <div className="section-copy">
            <p>
              Our apps are designed to help players train reaction speed,
              scanning, awareness, decision-making, technical habits, and
              focused repetition.
            </p>

            <p>
              We are not trying to replace coaches, teams, or real game
              experience. We are building simple tools that help players get
              more out of their own training time.
            </p>
          </div>
        </div>
      </section>

      <section className="brand-section alt-section">
        <div className="brand-shell">
          <p className="section-label">Why 5:10am?</p>

          <h2>The quiet work before the day starts.</h2>

          <div className="statement-card">
            <p>
              The name 5:10am comes from the early-morning training mindset:
            </p>

            <div className="rhythm-lines">
              <span>Wake up.</span>
              <span>Get the work in.</span>
              <span>Build the habit.</span>
              <span>Repeat.</span>
            </div>

            <p>
              It represents the quiet work before school, after practice, and
              when no one is watching.
            </p>
          </div>
        </div>
      </section>

      <section className="brand-section">
        <div className="brand-shell two-column">
          <div>
            <p className="section-label">Our Philosophy</p>
            <h2>Simple tools. Serious habits.</h2>
          </div>

          <div className="section-copy">
            <p>Most players train the ball.</p>
            <p>Fewer players train their eyes.</p>
            <p>Even fewer train their habits every day.</p>

            <p>
              5:10am is built around a simple belief: small, focused training
              repeated consistently can change a player.
            </p>

            <p>
              The goal is not complicated technology. The goal is better
              training behavior.
            </p>
          </div>
        </div>
      </section>

      <section className="brand-section alt-section">
        <div className="brand-shell product-callout">
          <div>
            <p className="section-label">Our First App</p>
            <h2>Soccer Scan Trainer</h2>

            <p>
              Soccer Scan Trainer helps soccer players practice visual awareness
              and reaction during individual training.
            </p>

            <p>
              The app displays random visual cues such as colors, numbers,
              letters, and arrows. Players react to those cues while passing,
              receiving, dribbling, turning, or changing direction.
            </p>

            <div className="button-row">
              <Link className="primary-button" to="/soccer-scan-trainer">
                Learn More
              </Link>

              <a
                className="secondary-button"
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
              >
                App Store
              </a>
            </div>
          </div>

          <div className="product-card">
            <div className="mock-screen">
              <div className="mock-top">Soccer Scan Trainer</div>
              <div className="mock-cue">LEFT</div>
              <div className="mock-bottom">React. Scan. Train.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-section">
        <div className="brand-shell two-column">
          <div>
            <p className="section-label">Built by a Parent</p>
            <h2>Made from real training problems.</h2>
          </div>

          <div className="section-copy">
            <p>
              5:10am was started by a parent who spends early mornings training
              with his sons and looking for simple ways to make individual
              sessions more useful.
            </p>

            <ul className="clean-list">
              <li>How do you make wall passing less repetitive?</li>
              <li>How do you train scanning without a full team?</li>
              <li>How do you add decision-making to individual drills?</li>
              <li>How do you help a young player react faster?</li>
              <li>How do you make parent-led training more focused?</li>
            </ul>

            <p>Soccer Scan Trainer is the first answer to those questions.</p>
          </div>
        </div>
      </section>

      <section className="brand-footer-cta">
        <div className="brand-shell">
          <h2>5:10am</h2>
          <p>Small tools. Serious habits. Early work.</p>

          <div className="footer-links">
            <Link to="/soccer-scan-trainer">Soccer Scan Trainer</Link>
            <a href={APP_STORE_URL} target="_blank" rel="noreferrer">
              App Store
            </a>
            <Link to="/soccer-scan-trainer/privacy">Privacy Policy</Link>
            <Link to="/soccer-scan-trainer/support">Support</Link>
            <a href="mailto:davidreynon@gmail.com">Contact</a>
          </div>
        </div>
      </section>
    </main>
  );
}