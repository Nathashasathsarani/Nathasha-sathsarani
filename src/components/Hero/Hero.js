import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  HeroButtons,
  HeroIntro,
} from "./HeroElements";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  return (
    <section>
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn">
              <TypeAnimation
                cursor={false}
                sequence={["Hi, I'm Nathasha.", () => setShowSubtitle(true)]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle && (
                <TypeAnimation
                  cursor
                  sequence={[
                    500,
                    "Business Analyst",
                    800,
                    "Process optimizer",
                    800,
                    "UX-focused researcher",
                    800,
                    "Data storyteller",
                    800,
                    "Collaborative teammate",
                    800,
                    () => setShowScrollDown(true),
                  ]}
                  speed={50}
                  deletionSpeed={60}
                  wrapper="h5"
                  repeat={Infinity}
                />
              )}
            </ScrollAnimation>
            <HeroIntro>
              I translate complex business requirements into thoughtful,
              user-ready solutions. My toolkit blends analytical thinking,
              qualitative research, and rapid prototyping to deliver value
              across cross-functional teams.
            </HeroIntro>
            <HeroButtons>
              <Link className="btn PrimaryBtn btn-shadow" to="/projects">
                Explore projects
              </Link>
              <Link className="btn SecondaryBtn btn-shadow" to="/contact">
                Let&apos;s collaborate
              </Link>
            </HeroButtons>
          </HeroLeft>
          <HeroRight>
            <ScrollAnimation animateIn="fadeIn">
              <Image src="/Ellipse 1.png" alt="Portrait of Nathasha" />
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>
      </HeroContainer>
    </section>
  );
}

export default Hero;
