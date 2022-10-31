import styled from "styled-components";
import { Link } from "react-router-dom";
const NavStyled = styled.nav`
  background-color: ${({ theme }) => theme.colors.header};
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
  }
`;
export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  margin: 0 1rem;
`;
export const NavbarLinka = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  margin: 0 1rem;
`;
export const NavImg = styled.img`
  width: 8rem;
  border-radius: 50%;
  padding: 1rem;
`;

export default NavStyled;
