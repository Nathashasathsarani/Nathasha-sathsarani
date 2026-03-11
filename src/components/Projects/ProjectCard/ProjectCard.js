import React from "react";
import { ProjectList } from "../../../assets/data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
  BtnGroup,
} from "./ProjectCardElements";
import ScrollAnimation from "react-animate-on-scroll";

function ProjectCard({ limit }) {
  const projects = limit ? ProjectList.slice(0, limit) : ProjectList;

  return (
    <>
      {projects.map((list) => (
        <ScrollAnimation animateIn="fadeInLeft" key={list.title}>
          <Card>
            <CardLeft>
              <img src={list.img} alt={list.title} />
            </CardLeft>
            <CardRight>
              <h4>{list.title}</h4>
              <p>{list.description}</p>
              <TechCardContainer>
                {list.tech_stack.map((tech) => (
                  <TechCard key={`${list.title}-${tech}`}>{tech}</TechCard>
                ))}
              </TechCardContainer>
              <BtnGroup>
                {list.github && (
                  <a
                    className="btn PrimaryBtn btn-shadow"
                    href={list.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View project
                  </a>
                )}
              </BtnGroup>
            </CardRight>
          </Card>
        </ScrollAnimation>
      ))}
    </>
  );
}

export default ProjectCard;
