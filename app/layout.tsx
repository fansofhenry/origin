import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Henry Fan — CS Educator & Researcher",
  description:
    "Exploring computer science education, learning science, and community college pathways.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            background:
              "color-mix(in srgb, var(--background) 80%, transparent)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0.75rem 2rem",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            <Link
              href="/"
              style={{
                fontWeight: 800,
                fontSize: "0.95rem",
                letterSpacing: "-0.04em",
                background:
                  "linear-gradient(135deg, #2563eb, #6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              HF
            </Link>
            <div style={{ display: "flex", gap: "2rem" }}>
              <Link href="/" className="nav-link">
                Home
              </Link>
              <Link href="/about" className="nav-link">
                About
              </Link>
              <Link href="/blog" className="nav-link">
                Blog
              </Link>
              <a
                href="https://github.com/fansofhenry"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                GitHub
              </a>
            </div>
          </nav>
        </header>
        <main
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "0 2rem 5rem",
          }}
        >
          {children}
        </main>
        <footer className="footer">
          <span>Henry Fan &copy; {new Date().getFullYear()}</span>
          <div className="footer-links">
            <a
              href="https://github.com/fansofhenry"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
