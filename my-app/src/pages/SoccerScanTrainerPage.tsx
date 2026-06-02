import { Link } from "react-router-dom";
import "../styles/companyPages.css";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/soccer-scan-trainer/id6774516286";

export default function SoccerScanTrainerPage() {
  const scrollToHowItWorks = () => {
    document
      .getElementById("how-it-works")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="brand-page">
      <section className="product-hero">
        <div className="brand-shell product-hero-grid">
          <div>
            <p className="eyebrow">Soccer Scan Trainer</p>

            <h1>Train your eyes before the ball arrives.</h1>

            <p className="hero-subtitle">
              A simple visual cue training app for soccer players who want to
              improve scanning, reaction speed, first touch, and awareness.
            </p>

            <div className="hero-actions">
              <a
                className="primary-button"
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
              >
                Download on the App Store
              </a>

              <button
                className="secondary-button"
                type="button"
                onClick={scrollToHowItWorks}
              >
                How It Works
              </button>
            </div>
          </div>

          <div className="phone-card">
            <div className="phone-frame">
              <div className="phone-status" />
              <div className="phone-title">SOCCER SCAN TRAINER</div>
              <div className="phone-cue">↙</div>
              <div className="phone-caption">React to the cue</div>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-section">
        <div className="brand-shell two-column">
          <div>
            <p className="section-label">What It Does</p>
            <h2>Turns simple drills into visual reaction training.</h2>
          </div>

          <div className="section-copy">
            <p>
              Soccer Scan Trainer displays random visual cues during training.
              Players react to colors, numbers, letters, or arrows while
              passing, receiving, dribbling, turning, or changing direction.
            </p>

            <p>
              It helps turn simple individual drills into more focused,
              game-like training.
            </p>
          </div>
        </div>
      </section>

      <section className="brand-section alt-section">
        <div className="brand-shell">
          <p className="section-label">Why Scanning Matters</p>

          <h2>The best players do not just control the ball. They see.</h2>

          <div className="feature-grid">
            <div className="feature-card">Check the shoulder</div>
            <div className="feature-card">Notice pressure</div>
            <div className="feature-card">Recognize space</div>
            <div className="feature-card">React earlier</div>
            <div className="feature-card">Open the body</div>
            <div className="feature-card">Decide faster</div>
          </div>

          <p className="wide-copy">
            Scanning is not just something players are told to do. It is a
            habit that has to be trained. Soccer Scan Trainer gives players a
            simple way to add scanning and reaction work into everyday technical
            training.
          </p>
        </div>
      </section>

      <section className="brand-section">
        <div className="brand-shell">
          <p className="section-label">Cue Types</p>
          <h2>Choose the information the player must react to.</h2>

          <div className="cue-grid four-cue-grid">
            <div className="cue-card">
              <span className="cue-symbol">●</span>
              <h3>Colors</h3>
              <p>
                Use colors for passing, turning, calling out, or reaction rules.
              </p>
            </div>

            <div className="cue-card">
              <span className="cue-symbol">7</span>
              <h3>Numbers</h3>
              <p>Assign each number to a different technical action.</p>
            </div>

            <div className="cue-card">
              <span className="cue-symbol">B</span>
              <h3>Letters</h3>
              <p>Train quick recognition, communication, and reaction.</p>
            </div>

            <div className="cue-card">
              <span className="cue-symbol">↗</span>
              <h3>Arrows</h3>
              <p>Connect visual cues to first touch and movement direction.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="brand-section alt-section">
        <div className="brand-shell">
          <p className="section-label">How It Works</p>
          <h2>Set up in seconds.</h2>

          <div className="steps-grid">
            <div className="step-card">
              <span>1</span>
              <h3>Place your iPhone</h3>
              <p>
                Use a tripod, chair, bench, fence, wall, or any stable surface
                where the player can see it.
              </p>
            </div>

            <div className="step-card">
              <span>2</span>
              <h3>Choose your cues</h3>
              <p>
                Select colors, numbers, letters, or arrows based on the drill.
              </p>
            </div>

            <div className="step-card">
              <span>3</span>
              <h3>Set the session</h3>
              <p>
                Choose the cue interval and session length for the level of the
                player.
              </p>
            </div>

            <div className="step-card">
              <span>4</span>
              <h3>Start training</h3>
              <p>
                The player performs the drill while reacting to each cue on the
                screen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-section">
        <div className="brand-shell two-column">
          <div>
            <p className="section-label">Use It For</p>
            <h2>Simple drills with more awareness.</h2>
          </div>

          <div className="tag-list">
            <span>Wall passing</span>
            <span>First touch</span>
            <span>Scanning before receiving</span>
            <span>Reaction speed</span>
            <span>Turning drills</span>
            <span>Directional movement</span>
            <span>Ball mastery</span>
            <span>Dribbling patterns</span>
            <span>Parent-and-player training</span>
            <span>Solo technical sessions</span>
            <span>Pre-practice activation</span>
            <span>Field training</span>
          </div>
        </div>
      </section>

      <section className="brand-section alt-section">
        <div className="brand-shell">
          <p className="section-label">Example Drills</p>
          <h2>Start with these simple sessions.</h2>

          <div className="drill-grid">
            <article className="drill-card">
              <h3>Wall Pass Scan</h3>
              <p>
                The player passes against a wall. Before receiving the rebound,
                the player quickly checks the screen. The cue tells the player
                what to say, where to turn, or what action to perform.
              </p>

              <ul>
                <li>Red = one-touch pass</li>
                <li>Blue = two-touch pass</li>
                <li>Left arrow = receive and turn left</li>
                <li>Right arrow = receive and turn right</li>
              </ul>
            </article>

            <article className="drill-card">
              <h3>First Touch Direction</h3>
              <p>
                The player starts facing the app. A directional arrow appears.
                The player receives or moves the ball in that direction.
              </p>

              <p>
                This helps connect visual information with first touch and
                movement.
              </p>
            </article>

            <article className="drill-card">
              <h3>Color Callout</h3>
              <p>
                The app shows a random color. The player must call out the color
                before touching the ball.
              </p>

              <p>
                This encourages the player to lift the head before the ball
                arrives.
              </p>
            </article>

            <article className="drill-card">
              <h3>Number Reaction</h3>
              <p>
                The app shows a random number. Each number can represent a
                different action such as one-touch pass, two-touch pass, turn,
                dribble forward, or stop and reset.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="brand-section">
        <div className="brand-shell two-column">
          <div>
            <p className="section-label">Who It Is For</p>
            <h2>Built for serious individual training.</h2>
          </div>

          <div className="section-copy">
            <p>Soccer Scan Trainer is designed for:</p>

            <ul className="clean-list">
              <li>Young soccer players</li>
              <li>Parents who train with their child</li>
              <li>Individual technical coaches</li>
              <li>Academy and grassroots players</li>
              <li>Players who train against a wall</li>
              <li>Players working on awareness and first touch</li>
              <li>Players who need to look up more often</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="brand-section alt-section">
        <div className="brand-shell two-column">
          <div>
            <p className="section-label">Simple by Design</p>
            <h2>No clutter. Just training.</h2>
          </div>

          <div className="section-copy">
            <p>Soccer Scan Trainer is intentionally simple.</p>

            <ul className="clean-list">
              <li>No complicated setup</li>
              <li>No account required</li>
              <li>No team management system</li>
              <li>No social media pressure</li>
              <li>No unnecessary features</li>
            </ul>

            <p>Open the app. Choose your cues. Start the session. Train.</p>
          </div>
        </div>
      </section>

      <section className="brand-section">
        <div className="brand-shell">
          <p className="section-label">Features</p>
          <h2>Everything needed for focused cue training.</h2>

          <div className="feature-grid">
            <div className="feature-card">
              <h3>Visual cue training</h3>
              <p>
                Use colors, numbers, letters, and arrows to create
                reaction-based drills.
              </p>
            </div>

            <div className="feature-card">
              <h3>Flexible sessions</h3>
              <p>
                Choose session length and cue interval based on the drill and
                the player.
              </p>
            </div>

            <div className="feature-card">
              <h3>Clean display</h3>
              <p>
                The screen is simple and easy to read so players can react
                quickly during movement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="brand-footer-cta">
        <div className="brand-shell">
          <p className="eyebrow">Download</p>
          <h2>Soccer Scan Trainer</h2>

          <p>
            Available on iPhone. Add visual reaction and scanning work to your
            next training session.
          </p>

          <a
            className="primary-button"
            href={APP_STORE_URL}
            target="_blank"
            rel="noreferrer"
          >
            Download on the App Store
          </a>

          <div className="footer-links">
            <Link to="/510am">5:10am</Link>
            <a href={APP_STORE_URL} target="_blank" rel="noreferrer">
              App Store
            </a>
            <Link to="/soccer-scan-trainer/privacy">Privacy Policy</Link>
            <Link to="/soccer-scan-trainer/support">Support</Link>
            <a href="mailto:davidreynon@gmail.com">Contact</a>
          </div>

          <p className="final-line">
            Train your eyes. React faster. Build better habits.
          </p>
        </div>
      </section>
    </main>
  );
}