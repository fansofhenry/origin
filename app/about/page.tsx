export default function About() {
  return (
    <section style={{ padding: "4rem 0" }}>
      <div className="hero-label">Background</div>
      <h1
        style={{
          fontSize: "2.75rem",
          fontWeight: 800,
          letterSpacing: "-0.045em",
          marginBottom: "2.5rem",
          lineHeight: 1.05,
        }}
      >
        About <span className="gradient-text">Me</span>
      </h1>
      <div className="about-section">
        <p>
          I work at the intersection of <strong>computer science</strong>,{" "}
          <strong>learning science</strong>, and{" "}
          <strong>community college education</strong>.
        </p>
        <p>
          My focus is on making CS accessible to students who are often
          underserved by traditional approaches — building curriculum, tools,
          and support systems that meet learners where they are.
        </p>
        <p>
          I&apos;m particularly interested in how we can apply insights from
          adult learning theory, debugging pedagogy, and equity-centered design
          to improve outcomes in introductory CS courses.
        </p>
        <p>
          When I&apos;m not teaching or building, I&apos;m exploring how
          technology can create more equitable pathways for community college
          students entering the tech workforce.
        </p>
      </div>
    </section>
  );
}
