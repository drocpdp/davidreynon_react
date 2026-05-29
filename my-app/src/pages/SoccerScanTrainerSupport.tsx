import type { CSSProperties } from "react";

export default function SoccerScanTrainerSupport() {
  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <p style={styles.kicker}>5:10am</p>

        <h1 style={styles.title}>Soccer Scan Trainer Support</h1>

        <p style={styles.paragraph}>
          Need help with Soccer Scan Trainer? For support, questions, feedback,
          or app issues, please contact:
        </p>

        <p style={styles.email}>
          <a href="mailto:davidreynon@gmail.com">davidreynon@gmail.com</a>
        </p>

        <h2 style={styles.heading}>Common Questions</h2>

        <h3 style={styles.question}>
          Does Soccer Scan Trainer require an account?
        </h3>
        <p style={styles.paragraph}>
          No. Soccer Scan Trainer works without an account.
        </p>

        <h3 style={styles.question}>Does the app require internet?</h3>
        <p style={styles.paragraph}>
          No. The app is designed to work offline.
        </p>

        <h3 style={styles.question}>
          Where are saved configurations stored?
        </h3>
        <p style={styles.paragraph}>
          Saved configurations and language preferences are stored locally on
          your device.
        </p>

        <h3 style={styles.question}>
          Does Soccer Scan Trainer collect personal data?
        </h3>
        <p style={styles.paragraph}>
          No. Soccer Scan Trainer does not collect, sell, or share personal
          data.
        </p>

        <p style={styles.paragraph}>
          View the{" "}
          <a href="/soccer-scan-trainer/privacy">
            Soccer Scan Trainer Privacy Policy
          </a>
          .
        </p>

        <h2 style={styles.heading}>About 5:10am</h2>

        <p style={styles.paragraph}>
          5:10am is the alarm on my phone — the time early training starts
          before the day gets busy.
        </p>

        <p style={styles.paragraph}>
          Soccer Scan Trainer was hatched from those early morning sessions with
          my son, Pryce, while working on extra scanning, awareness, and reaction
          reps outside team practice.
        </p>

        <p style={styles.paragraph}>
          The app is designed for parents, players, and coaches who want a
          simple, focused way to add useful training at home, at the field, or
          with a ball and wall. The goal is not to replace team practice, but to
          support the extra work that helps players prepare, react, and play
          faster.
        </p>

        <h2 style={styles.heading}>App Information</h2>

        <p style={styles.paragraph}>
          Soccer Scan Trainer is a visual cue training app for soccer and
          football players. It is intended to support scanning habits, awareness,
          reaction speed, and preparation before receiving the ball.
        </p>

        <p style={styles.paragraph}>
          The app is not medical, fitness, or professional coaching advice.
          Players should train safely, use appropriate space, and stop if they
          feel pain, dizziness, or discomfort.
        </p>

        <p style={styles.updated}>Last updated: May 2026</p>
      </section>
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#f7f8f4",
    color: "#0b3026",
    padding: "48px 20px",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
  card: {
    maxWidth: "760px",
    margin: "0 auto",
    background: "#ffffff",
    borderRadius: "20px",
    padding: "40px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
  },
  kicker: {
    margin: "0 0 12px",
    color: "#4f7f35",
    fontSize: "15px",
    fontWeight: 800,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  title: {
    fontSize: "36px",
    lineHeight: 1.1,
    marginTop: 0,
    marginBottom: "20px",
    letterSpacing: "-0.03em",
  },
  heading: {
    fontSize: "24px",
    marginTop: "36px",
    marginBottom: "16px",
    letterSpacing: "-0.02em",
  },
  question: {
    fontSize: "18px",
    marginTop: "24px",
    marginBottom: "8px",
  },
  paragraph: {
    fontSize: "17px",
    lineHeight: "1.6",
    color: "#39433f",
    marginTop: "0",
    marginBottom: "16px",
  },
  email: {
    fontSize: "18px",
    fontWeight: 700,
    marginTop: "12px",
    marginBottom: "28px",
  },
  updated: {
    marginTop: "40px",
    fontSize: "14px",
    color: "#68736e",
  },
};