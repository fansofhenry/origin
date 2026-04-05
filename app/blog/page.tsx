const posts = [
  {
    title: "Why Intro CS Is Hard for Capable Students",
    description: "The gap between student ability and course design.",
    date: "Coming soon",
  },
  {
    title: "What Adult Learning Theory Gets Right",
    description: "Applying andragogy to CS classrooms.",
    date: "Coming soon",
  },
  {
    title: "Debugging as a Thinking Skill",
    description: "Teaching students to reason through errors systematically.",
    date: "Coming soon",
  },
];

export default function Blog() {
  return (
    <section style={{ padding: "4rem 0" }}>
      <div className="hero-label">Writing</div>
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: 800,
          letterSpacing: "-0.04em",
          marginBottom: "2rem",
          lineHeight: 1.1,
        }}
      >
        Blog
      </h1>
      <div>
        {posts.map((post) => (
          <div key={post.title} className="blog-item">
            <div>
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  display: "block",
                  marginBottom: "0.25rem",
                }}
              >
                {post.title}
              </span>
              <span
                style={{
                  fontSize: "0.85rem",
                  color: "var(--muted)",
                }}
              >
                {post.description}
              </span>
            </div>
            <span
              style={{
                fontSize: "0.75rem",
                color: "var(--muted-light)",
                whiteSpace: "nowrap",
                fontWeight: 500,
              }}
            >
              {post.date}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
