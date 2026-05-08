import React from "react";
import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Deepfetch AI",
      img: "deepfetchai.png",
      description:
        "A Perplexity-style AI search engine that combines real-time web search with deep-reasoning LLMs to deliver cited, evidence-based answers in a Neo-Brutalist interface.",
      tags: [
        "Next.js 15",
        "NestJS",
        "TypeScript",
        "TailwindCSS",
        "Tavily AI",
        "OpenRouter",
      ],
      link: "https://deepfetchai.vercel.app/",
      github: "https://github.com/maruf-rahman007/deepfetchai",
    },
    {
      title: "Eid Er Jamaat Koi?",
      img: "eiderjamatkoi.png",
      description:
        "A mobile-first progressive web app for finding nearby Eid Jamaat locations with real-time crowdsourced mosque and prayer time updates using interactive maps.",
      tags: [
        "Next.js 14",
        "PostgreSQL",
        "Supabase",
        "Prisma",
        "React Leaflet",
        "Firebase",
      ],
      link: "https://eiderjamatkoi.vercel.app/",
      github: "https://github.com/maruf-rahman007/eiderjamatkoi",
    },
    {
      title: "PPTPal",
      img: "pptpal.png",
      description:
        "A secure presentation-sharing platform where users create password-protected rooms to upload and manage PPT/PDF files with role-based access.",
      tags: [
        "Next.js",
        "NextAuth",
        "Prisma",
        "PostgreSQL",
        "UploadThing",
        "TailwindCSS",
      ],
      link: "https://pptpal.vercel.app/",
      github: "https://github.com/maruf-rahman007/pptpal",
    },
  ];

  return (
    <div>
      <h1
        style={{
          fontFamily: "var(--font-kalam)",
          fontSize: "3rem",
          marginBottom: "3rem",
          textAlign: "center",
        }}
      >
        Selected <span className="accent-text-blue">Projects</span>
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "3rem",
        }}
      >
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="hand-card"
            style={{
              rotate: `${idx % 2 === 0 ? 0.5 : -0.5}deg`,
            }}
          >
            {/* Fixed image container */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "220px",
                marginBottom: "1.5rem",
                borderRadius: "8px",
                overflow: "hidden",
                borderBottom: "1px solid #ddd",
              }}
            >
              <Image
                src={`/${project.img}`}
                alt={project.title}
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>

            <h2
              style={{
                fontFamily: "var(--font-kalam)",
                marginBottom: "0.8rem",
              }}
            >
              {project.title}
            </h2>

            <p
              style={{
                fontSize: "0.95rem",
                marginBottom: "1.5rem",
                lineHeight: "1.6",
              }}
            >
              {project.description}
            </p>

            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                flexWrap: "wrap",
                marginBottom: "1.5rem",
              }}
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "0.75rem",
                    padding: "0.2rem 0.6rem",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="accent-text-red"
                style={{ fontWeight: "bold" }}
              >
                Live Demo →
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="accent-text-blue"
                style={{ fontWeight: "bold" }}
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "5rem", textAlign: "center" }}>
        <a
          href="https://github.com/maruf-rahman007"
          target="_blank"
          rel="noopener noreferrer"
          className="hand-button"
        >
          See More on GitHub
        </a>
      </div>
    </div>
  );
}