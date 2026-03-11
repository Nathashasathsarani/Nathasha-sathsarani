import React from "react";
import Contact from "../components/Contact/Contact";

const ContactPage = () => (
  <>
    <section className="Container" style={{ padding: "3rem 0 1rem" }}>
      <h1 className="SectionTitle">Let&apos;s build clarity together</h1>
      <p className="AboutBio">
        I reply to every message within two business days. Whether you need help turning vague ideas
        into roadmaps or want feedback on a requirements artifact, I am excited to collaborate.
      </p>
    </section>
    <Contact />
  </>
);

export default ContactPage;

