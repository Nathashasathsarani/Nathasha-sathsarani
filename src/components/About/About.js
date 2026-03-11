import React from "react";
import { stackList } from "../../assets/data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/Ellipse 1.png"
            alt="nathasha"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Nathasha </strong>. A passionate and detail-oriented Business Analyst from Sri Lanka. I’m currently completing my ICT degree and have developed strong analytical, problem-solving, and communication skills through both academic projects and hands-on experience.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            My journey into the world of technology began with a curiosity for understanding how systems work and how they can be improved. This curiosity grew into a genuine passion for transforming user needs into clear, structured, and effective solutions.
            Over time, I’ve worked on projects such as StudyZone, Child Weight Categories Dashboard, and my Interactive Storytelling website, where I applied BA techniques like requirements gathering, process mapping, user journey design, prototyping, and data analytics.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              Through these experiences, I’ve strengthened my ability to collaborate with stakeholders, analyze complex problems, and design user-centered solutions that create real value. I enjoy working at the intersection of business and technology—translating ideas into well-defined requirements, improving workflows, and ensuring that solutions align with user needs.
              I’m continuously learning and growing as a BA, and I bring dedication, adaptability, and a strong work ethic into every project I take on. My goal is to contribute to meaningful projects that make technology simpler, smarter, and more accessible.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
