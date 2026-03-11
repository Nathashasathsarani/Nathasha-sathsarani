import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
  margin: 5rem 0;
`;

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
`;

export const ContactInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
`;

export const ContactInfoCard = styled.div`
  padding: 1.5rem;
  border-radius: 1rem;
  border: 1px solid rgba(57, 134, 250, 0.2);
  background: rgba(57, 134, 250, 0.08);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  h4 {
    font-size: 1rem;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    opacity: 0.8;
  }

  p, a {
    font-size: 1.05rem;
    font-weight: 500;
    color: inherit;
  }
`;

export const ContactIconWrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #3986fa;
  color: #fff;
  display: grid;
  place-items: center;
  margin-bottom: 0.75rem;
`;

export const ContactForm = styled.form`
  padding: 1.5rem;
  border-radius: 1rem;
  border: 1px solid rgba(57, 134, 250, 0.2);
  background: rgba(57, 134, 250, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  label {
    font-size: 0.95rem;
    font-weight: 500;
    opacity: 0.9;
  }
`;

export const FormInput = styled.input`
  border: 1px solid rgba(57, 134, 250, 0.4);
  border-radius: 0.75rem;
  padding: 0.9rem 1rem;
  background: transparent;
  color: inherit;
  font-size: 1rem;

  &:focus {
    outline: 2px solid rgba(57, 134, 250, 0.6);
  }
`;

export const FormTextarea = styled.textarea`
  border: 1px solid rgba(57, 134, 250, 0.4);
  border-radius: 0.75rem;
  padding: 0.9rem 1rem;
  min-height: 140px;
  background: transparent;
  color: inherit;
  font-size: 1rem;
  resize: vertical;

  &:focus {
    outline: 2px solid rgba(57, 134, 250, 0.6);
  }
`;

export const StatusMessage = styled.p`
  font-size: 0.95rem;
  font-weight: 500;
  margin-top: 0.5rem;
  color: ${({ type }) =>
    type === "error" ? "#ff6b6b" : type === "success" ? "#2dd36f" : "inherit"};
`;

export const FieldError = styled.span`
  font-size: 0.85rem;
  color: #ff6b6b;
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  row-gap: 1rem;
  margin-top: 2rem;

  span {
    font-size: 1rem;
    font-weight: 400;
  }

  @media (min-width: 576px) {
    span {
      font-size: 1.25rem;
    }
  }
  @media (min-width: 992px) {
    span {
      font-size: 1.5rem;
    }
  }
`;
