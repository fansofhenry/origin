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
          fontSize: "2.75rem",
          fontWeight: 800,
          letterSpacing: "-0.045em",
          marginBottom: "2.5rem",
          lineHeight: 1.05,
        }}
      >
        Blog
      </h1>
      <div>
        {posts.map((post) => (
          <div key={post.title} className="blog-item">
            <div>
              <span className="blog-title">{post.title}</span>
              <span className="blog-desc">{post.description}</span>
            </div>
            <span className="blog-date">{post.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
