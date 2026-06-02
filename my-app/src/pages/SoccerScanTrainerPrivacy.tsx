import { Link } from "react-router-dom";
import "../styles/companyPages.css";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/soccer-scan-trainer/id6774516286";

const SUPPORT_EMAIL = "davidreynon@gmail.com";

export default function SoccerTrainerPrivacy() {
  return (
    <main className="brand-page">
      <section className="product-hero">
        <div className="brand-shell">
          <Link to="/510am" className="brand-logo-link" aria-label="5:10am home">
            <img
              src="/images/FiveTenAMLogo_clean.png"
              alt="5:10am / Soccer Scan Trainer logo"
              className="brand-logo-mark"
            />
          </Link>

          <p className="eyebrow">Privacy Policy</p>

          <h1>Privacy Policy for Soccer Scan Trainer</h1>

          <p className="hero-subtitle">
            Soccer Scan Trainer is a soccer training app designed to help
            players practice visual scanning, reaction, and decision-making
            cues.
          </p>

          <div className="hero-actions">
            <Link className="primary-button" to="/soccer-scan-trainer">
              Back to App Page
            </Link>

            <Link className="secondary-button" to="/soccer-scan-trainer/support">
              Support
            </Link>
          </div>
        </div>
      </section>

      <section className="brand-section">
        <article className="brand-shell policy-card">
          <p className="policy-effective-date">
            <strong>Effective Date:</strong> May 28, 2026
          </p>

          <p>
            Soccer Scan Trainer is a soccer training app designed to help
            players practice visual scanning, reaction, and decision-making
            cues.
          </p>

          <p>
            This Privacy Policy explains what information the app collects, how
            information is used, and how users can contact us.
          </p>

          <h2>1. Information We Collect</h2>

          <p>Soccer Scan Trainer does not require users to create an account.</p>

          <p>
            Soccer Scan Trainer does not collect, store, or transmit personal
            information through the app.
          </p>

          <p>
            The app does not collect location data, health data, camera data,
            microphone data, contacts, photos, or user-generated personal
            content.
          </p>

          <h2>2. Local App Settings</h2>

          <p>
            Soccer Scan Trainer may save training settings and saved
            configurations on the user’s device. These settings are stored
            locally on the device and are not sent to us or to a server.
          </p>

          <h2>3. Feedback Email</h2>

          <p>
            If a user chooses to use the “Send Feedback” feature, the user’s
            email app may open a pre-filled email addressed to us.
          </p>

          <p>
            If the user sends that email, we may receive the user’s email
            address, message, device information, iOS version, app version, and
            build number. This information is used only to respond to feedback,
            troubleshoot problems, and improve the app.
          </p>

          <p>Sending feedback is optional.</p>

          <h2>4. Third-Party Services</h2>

          <p>
            Soccer Scan Trainer does not currently use advertising networks,
            analytics services, tracking tools, third-party login services, or
            cloud storage services.
          </p>

          <h2>5. Children’s Privacy</h2>

          <p>
            Soccer Scan Trainer may be used by young athletes, but the app does
            not knowingly collect personal information from children.
          </p>

          <p>
            Parents, guardians, coaches, or adult users should supervise app use
            where appropriate.
          </p>

          <h2>6. Data Sharing</h2>

          <p>We do not sell, rent, or share user personal data.</p>

          <h2>7. Data Retention</h2>

          <p>
            If a user sends feedback by email, we may retain that email as long
            as needed to respond, troubleshoot problems, or improve the app.
          </p>

          <p>A user may request deletion of a feedback email by contacting us.</p>

          <h2>8. Changes to This Policy</h2>

          <p>
            We may update this Privacy Policy from time to time. Any updates
            will be posted on this page with a new effective date.
          </p>

          <h2>9. Contact</h2>

          <p>For privacy questions or deletion requests, contact:</p>

          <p>
            <strong>David Eynon</strong>
            <br />
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          </p>
        </article>
      </section>

      <section className="brand-section alt-section">
        <div className="brand-shell two-column">
          <div>
            <p className="section-label">Useful Links</p>
            <h2>Continue exploring Soccer Scan Trainer.</h2>
          </div>

          <div className="tag-list">
            <Link to="/soccer-scan-trainer">Soccer Scan Trainer Page</Link>
            <Link to="/soccer-scan-trainer/support">Support Page</Link>
            <Link to="/510am">5:10am Company Page</Link>
            <a href={APP_STORE_URL} target="_blank" rel="noreferrer">
              App Store
            </a>
            <a href={`mailto:${SUPPORT_EMAIL}`}>Contact</a>
          </div>
        </div>
      </section>

      <section className="brand-footer-cta">
        <div className="brand-shell">
          <h2>Soccer Scan Trainer</h2>

          <p>© 2026 Soccer Scan Trainer</p>

          <div className="footer-links">
            <Link to="/soccer-scan-trainer">App Page</Link>
            <Link to="/510am">5:10am</Link>
            <Link to="/soccer-scan-trainer/support">Support</Link>
            <a href={APP_STORE_URL} target="_blank" rel="noreferrer">
              App Store
            </a>
            <a href={`mailto:${SUPPORT_EMAIL}`}>Contact</a>
          </div>
        </div>
      </section>
    </main>
  );
}