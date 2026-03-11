import styled from "@emotion/styled";

export const Card = styled.div`
  display: grid;
  grid-gap: 2rem;
  margin-bottom: 4rem;
  grid-template-columns: 1fr;
  padding-bottom: 2rem;
  overflow: hidden;
  border-radius: 20px;
  background: var(--color-surface);
  box-shadow: 0 25px 65px rgba(5, 5, 15, 0.08);
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    border-bottom: 0;
    padding-bottom: 0;
  }
`;

export const CardLeft = styled.div`
  justify-self: center;
  width: 100%;
  height: 100%;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;

  h4 {
    font-size: clamp(1.5rem, 3vw, 1.8rem);
    font-weight: 600;
    color: var(--color-heading);
  }

  p {
    font-weight: 400;
    max-width: 95%;
    margin-top: 10px;
    margin-bottom: 1rem;
    color: var(--color-text);
    text-align: left;
  }
`;

export const BtnGroup = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const TechCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const TechCard = styled.div`
  border-radius: 15px;
  background-color: rgba(57, 134, 250, 0.12);
  padding: 5px 12px;
  margin: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 400;
  color: var(--color-primary);
  cursor: default;
  box-shadow: none;
`;
