import React, { useState } from "react";
import {
  ContactWrapper,
  Email,
  ContactContent,
  ContactInfoGrid,
  ContactInfoCard,
  ContactIconWrapper,
  ContactForm,
  FormGroup,
  FormInput,
  FormTextarea,
  StatusMessage,
  FieldError,
} from "./ContactElements";
import { MdContentCopy } from "react-icons/md";
import { FiPhone, FiMail, FiMapPin, FiClock, FiLinkedin, FiGithub } from "react-icons/fi";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from '@mui/material/Zoom';

import ScrollAnimation from "react-animate-on-scroll";

const contactDetails = [
  {
    icon: <FiMail size={20} />,
    label: "Email",
    value: "nathashasathsarani209@gmail.com",
    href: "mailto:nathashasathsarani209@gmail.com",
  },
  {
    icon: <FiLinkedin size={20} />,
    label: "LinkedIn",
    value: "linkedin.com/in/nathasha-sathsarani-83235a24a",
    href: "https://www.linkedin.com/in/nathasha-sathsarani-83235a24a/",
  },
  {
    icon: <FiGithub size={20} />,
    label: "GitHub",
    value: "github.com/nathashasathsarani",
    href: "https://github.com/nathashasathsarani",
  },
  {
    icon: <FiPhone size={20} />,
    label: "Phone / WhatsApp",
    value: "+94 77 123 4567",
    href: "tel:+94771234567",
  },
  {
    icon: <FiMapPin size={20} />,
    label: "Location",
    value: "Colombo, Sri Lanka",
  },
  {
    icon: <FiClock size={20} />,
    label: "Availability",
    value: "Mon - Fri · 9:00 AM - 6:00 PM",
  },
];

function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [errors, setErrors] = useState({});

  const copyToClipboard = () => {
    navigator.clipboard.writeText("nathashasathsarani209@gmail.com");
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please tell me who I am speaking with.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "A valid email helps me reply quickly.";
    }
    if (formData.message.trim().length < 20) {
      newErrors.message = "Share at least 20 characters so I understand the request.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus({ type: "error", message: "Please fix the highlighted fields." });
      return;
    }

    const mailtoLink = `mailto:nathashasathsarani209@gmail.com?subject=${encodeURIComponent(
      `Portfolio contact from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;

    setStatus({
      type: "success",
      message: "Opening your email client… feel free to edit the draft!",
    });
    setErrors({});
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <ScrollAnimation animateIn="fadeIn">
          <div className="BigCard">
            <ContactContent>
              <ContactInfoGrid>
                {contactDetails.map(({ icon, label, value, href }) => (
                  <ContactInfoCard key={label}>
                    <ContactIconWrapper>{icon}</ContactIconWrapper>
                    <h4>{label}</h4>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        {value}
                      </a>
                    ) : (
                      <p>{value}</p>
                    )}
                  </ContactInfoCard>
                ))}
              </ContactInfoGrid>
              <ContactForm onSubmit={handleSubmit} noValidate>
                <FormGroup>
                  <label htmlFor="name">Name</label>
                  <FormInput
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && <FieldError>{errors.name}</FieldError>}
                </FormGroup>
                <FormGroup>
                  <label htmlFor="email">Email</label>
                  <FormInput
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && <FieldError>{errors.email}</FieldError>}
                </FormGroup>
                <FormGroup>
                  <label htmlFor="message">Message</label>
                  <FormTextarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your question…"
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message && <FieldError>{errors.message}</FieldError>}
                </FormGroup>
                <button className="btn PrimaryBtn btn-shadow" type="submit">
                  Compose Email
                </button>
                {status.message && (
                  <StatusMessage
                    type={status.type}
                    role={status.type === "error" ? "alert" : "status"}
                  >
                    {status.message}
                  </StatusMessage>
                )}
              </ContactForm>
            </ContactContent>
            <Email>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "20px",
                  rowGap: "10px",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <span>nathashasathsarani209@gmail.com</span>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  open={showTooltip}
                  onClose={() => setShowTooltip(false)}
                  title="Copied!"
                  TransitionComponent={Zoom}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="bottom"
                >
                  <IconButton onClick={copyToClipboard}>
                    <MdContentCopy
                      size={25}
                      style={{ cursor: "pointer", color: "#101012ff" }}
                    />
                  </IconButton>
                </Tooltip>
              </div>
              <a
                className="btn PrimaryBtn btn-shadow"
                href="mailto:nathashasathsarani209@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Email
              </a>
            </Email>
          </div>
        </ScrollAnimation>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
