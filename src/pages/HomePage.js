import React from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import EventLoopDemo from "../components/EventLoop/EventLoopDemo";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Projects limit={3} showGitHub={false} />
      <EventLoopDemo />
    </>
  );
};

export default HomePage;

