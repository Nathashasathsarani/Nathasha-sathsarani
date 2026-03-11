import styled, { keyframes } from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const HeroContainer = styled.div`
  padding: clamp(2rem, 6vw, 4rem) 0 clamp(3rem, 7vw, 5rem);
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: clamp(2rem, 6vw, 4rem);

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  flex: 1;

  h1 {
    font-size: clamp(2.8rem, 7vw, 4rem);
    color: var(--color-heading);
    font-weight: 600;
  }

  h5 {
    font-size: clamp(1.4rem, 3vw, 1.8rem);
    color: var(--color-primary);
    margin-bottom: 1rem;
    font-weight: 500;
  }

  @media screen and (max-width: 992px) {
    text-align: center;
    align-items: center;
    margin-bottom: 2rem;
  }
`;

export const HeroIntro = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  color: var(--color-text);
  opacity: 0.9;
  line-height: 1.7;
  margin-bottom: 1.8rem;
  max-width: 540px;
  @media screen and (max-width: 992px) {
    text-align: center;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  .SecondaryBtn {
    margin-right: 0;
  }
`;

export const HeroRight = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
`;

export const Image = styled.img`
  height: clamp(280px, 40vw, 420px);
  width: auto;
  filter: drop-shadow(0px 20px 45px rgba(10, 10, 30, 0.25));
`;

const ScrollAnimation = keyframes`
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

export const ScrollDown = styled(LinkScroll)`
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  position: absolute;

  animation: ${ScrollAnimation} 2s linear 0s infinite;
  @media screen and (max-width: 992px) {
    position: relative;
    justify-content: center;
    margin-top: 2rem;
  }
`;

export const ScrollLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: var(--color-heading);

  img {
    height: 35px;
    width: 35px;
    margin-left: 6px;
  }
`;
