import styled from "styled-components";

const AboutStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 87vh;
  background-color: ${({ theme }) => theme.colors.body};
  color: ${({ theme }) => theme.colors.text};
`;
export const Aboutdiv = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.body.header};
  border-radius: 20px;
  width: 50%;
  background-color: ${({ theme }) => theme.colors.header};
  padding: 20px;
`;
export const AboutLi = styled.li`
  list-style-type: none;
  text-align: end;
  font-size: 1.5rem;
  margin: 0 1rem;
`;
export const AboutImg = styled.img`
  width: 200px;
  border-radius: 50%;
  padding: 1rem;
`;
export default AboutStyled;
