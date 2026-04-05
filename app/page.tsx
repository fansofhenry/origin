const projects = [
  {
    name: "AppAnalyst",
    description:
      "Interactive portfolio showcasing support operations for California's CVC Exchange cross-enrollment system — covering incident diagnosis, monitoring dashboards, and barrier intelligence across 115+ community colleges.",
    tags: ["HTML", "CSS", "JavaScript", "Operations"],
    url: "https://github.com/fansofhenry/AppAnalyst",
  },
  {
    name: "teach_cs",
    description:
      "Teaching resource hub with course materials for intro to AI, machine learning, data structures, linear algebra, and deep learning specializations.",
    tags: ["HTML", "Education", "Curriculum"],
    url: "https://github.com/fansofhenry/teach_cs",
  },
  {
    name: "foo",
    description:
      "Experimental web project exploring development patterns with automated CI/CD workflows via GitHub Actions.",
    tags: ["HTML", "GitHub Actions", "CI/CD"],
    url: "https://github.com/fansofhenry/foo",
  },
];

const focusAreas = [
  { icon: "01", label: "CS Education" },
  { icon: "02", label: "Learning Science" },
  { icon: "03", label: "Community College Pathways" },
  { icon: "04", label: "Equity in Tech" },
  { icon: "05", label: "Curriculum Design" },
  { icon: "06", label: "Application Support" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-label">CS Educator &amp; Researcher</div>
        <h1>
          Henry
          <br />
          Fan
        </h1>
        <p>
          Building tools, curriculum, and support systems that make computer
          science accessible — especially for students in community colleges who
          are often underserved by traditional approaches.
        </p>
        <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
          <a
            href="https://github.com/fansofhenry"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.7rem 1.5rem",
              background: "var(--accent)",
              color: "var(--background)",
              borderRadius: "10px",
              fontSize: "0.875rem",
              fontWeight: 600,
              transition: "opacity 0.2s",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            View GitHub
          </a>
          <a
            href="mailto:henry.fan@example.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.7rem 1.5rem",
              background: "transparent",
              border: "1px solid var(--border)",
              color: "var(--foreground)",
              borderRadius: "10px",
              fontSize: "0.875rem",
              fontWeight: 600,
              transition: "all 0.2s",
            }}
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Focus Areas */}
      <section style={{ paddingBottom: "3.5rem" }}>
        <div className="section-label">Focus Areas</div>
        <div className="focus-grid">
          {focusAreas.map((area) => (
            <div key={area.label} className="focus-item">
              <div
                className="focus-icon"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: 700, color: "var(--accent-blue)" }}
              >
                {area.icon}
              </div>
              {area.label}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section style={{ paddingBottom: "3.5rem" }}>
        <div className="section-label">Projects</div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {project.name}
                </h3>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "var(--muted-light)", flexShrink: 0 }}
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  lineHeight: 1.65,
                  color: "var(--muted)",
                }}
              >
                {project.description}
              </p>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginTop: "auto" }}>
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
