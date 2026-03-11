import { FaBars } from "react-icons/fa";
import { NavLink as RouterLink } from "react-router-dom";
import styled from "@emotion/styled";

export const Nav = styled.nav`
  background: transparent;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`;

export const NavLink = styled(RouterLink)`
  color: var(--color-muted);
  display: flex;
  font-size: 1.05rem;
  font-weight: 500;
  align-items: center;
  height: 100%;
  cursor: pointer;
  padding: 0 0.35rem;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &:hover {
    color: var(--color-heading);
  }

  &.active {
    color: var(--color-heading);
  }
`;
export const Logo = styled(RouterLink)`
  display: flex;
  align-items: center;

  img {
    width: 47px;
    height: 47px;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #f4f3f3ff;
  font-size: 1.8rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
