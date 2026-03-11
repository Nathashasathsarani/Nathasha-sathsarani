import React from "react";
import About from "../components/About/About";

const education = [
  {
    title: "BSc (Hons) in Information and Communication Technology",
    org: "University of Sri Jayewardenepura",
    detail: "Specializing in Business Analytics · Expected graduation 2027",
  },
  {
    title: "Professional Certificates",
    org: "Google UX Design · PMI Business Analysis",
    detail: "Human-centered design, requirements elicitation, stakeholder facilitation",
  },
];

const softSkills = ["Stakeholder storytelling", "Empathic interviewing", "Facilitation & workshops", "Cross-team collaboration", "Agile ceremonies", "Growth mindset"];

const AboutPage = () => (
  <>
    <section className="Container" style={{ padding: "3rem 0" }}>
      <p className="tagline2" style={{ margin: 0, textTransform: "uppercase", letterSpacing: "0.2em" }}>
        Background & Values
      </p>
      <h1 className="SectionTitle" style={{ marginTop: "1rem" }}>
        My path into business analysis
      </h1>
      <p className="AboutBio">
        I started as a naturally curious researcher who loved mapping how systems really work. That
        curiosity evolved into a full-time obsession with translating messy, human stories into scalable
        digital products. Whether I am facilitating discovery workshops, writing user stories, or auditing
        a dataset for insights, I bridge empathy with analytical structure.
      </p>
    </section>

    <About />

    <section className="Container" style={{ padding: "3rem 0" }}>
      <div className="BigCard">
        <h2 className="SectionTitle" style={{ marginBottom: "2rem" }}>
          Education & Certifications
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
          {education.map((item) => (
            <article key={item.title} style={{ border: "1px solid var(--color-border)", borderRadius: "1rem", padding: "1.5rem" }}>
              <h3 style={{ color: "var(--color-heading)", marginBottom: "0.5rem" }}>{item.title}</h3>
              <p style={{ fontWeight: 600, marginBottom: "0.35rem" }}>{item.org}</p>
              <p style={{ color: "var(--color-muted)" }}>{item.detail}</p>
            </article>
          ))}
        </div>
        <h2 className="SectionTitle" style={{ marginTop: "3rem", marginBottom: "1.5rem" }}>
          Soft skills I rely on daily
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          {softSkills.map((skill) => (
            <span
              key={skill}
              style={{
                padding: "0.6rem 1.1rem",
                borderRadius: "999px",
                border: "1px solid var(--color-border)",
                background: "rgba(57, 134, 250, 0.08)",
                fontWeight: 500,
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default AboutPage;

