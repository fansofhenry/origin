const projects = [
  {
    name: "AppAnalyst",
    description:
      "Interactive portfolio showcasing support operations for California's CVC Exchange cross-enrollment system — incident diagnosis, monitoring dashboards, and barrier intelligence across 115+ community colleges.",
    tags: ["HTML", "CSS", "JavaScript", "Operations"],
    url: "https://github.com/fansofhenry/AppAnalyst",
  },
  {
    name: "teach_cs",
    description:
      "Teaching resource hub with course materials spanning intro to AI, machine learning, data structures, linear algebra, and deep learning specializations.",
    tags: ["HTML", "Education", "Curriculum"],
    url: "https://github.com/fansofhenry/teach_cs",
  },
  {
    name: "foo",
    description:
      "Experimental web project exploring modern development patterns with automated CI/CD workflows via GitHub Actions.",
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
          <span className="gradient-text">Fan</span>
        </h1>
        <p>
          Building tools, curriculum, and support systems that make computer
          science accessible — especially for students in community colleges who
          are often underserved by traditional approaches.
        </p>
        <div className="hero-buttons">
          <a
            href="https://github.com/fansofhenry"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            View GitHub
          </a>
          <a href="/origin/about" className="btn-secondary">
            Learn More
          </a>
        </div>
      </section>

      {/* Stats */}
      <section style={{ paddingBottom: "3rem" }}>
        <div className="stats-row">
          <div className="stat-item">
            <span className="stat-number">115+</span>
            <span className="stat-label">Colleges Supported</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">30+</span>
            <span className="stat-label">Repos &amp; Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">6+</span>
            <span className="stat-label">CS Course Materials</span>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section style={{ paddingBottom: "3.5rem" }}>
        <div className="section-label">Focus Areas</div>
        <div className="focus-grid">
          {focusAreas.map((area) => (
            <div key={area.label} className="focus-item">
              <div className="focus-icon-bg">
                <span className="focus-icon">{area.icon}</span>
              </div>
              {area.label}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section style={{ paddingBottom: "3.5rem" }}>
        <div className="section-label">Featured Projects</div>
        <div className="projects-grid">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div className="card-accent" />
              <div className="card-header">
                <h3 className="card-title">{project.name}</h3>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="card-arrow"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </div>
              <p className="card-description">{project.description}</p>
              <div className="card-tags">
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
