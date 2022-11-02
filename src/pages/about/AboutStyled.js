import styled from "styled-components";

const AboutStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 87vh;
  background-color: ${({ theme }) => theme.colors.body};
  color: ${({ theme }) => theme.colors.text};
`;
export const Aboutdiv = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.body.header};
  border-radius: 20px;
  width: 50%;
  background-color: ${({ theme }) => theme.colors.header};
  padding: 10px;
  overflow: hidden;
`;
export const AboutLi = styled.li`
  list-style-type: none;
  text-align: end;
  font-size: 1.2rem;
  margin: 0 1rem;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    font-size: 0.9rem;
  }
`;
export const AboutImg = styled.img`
  width: 200px;
  border-radius: 50%;
  padding: 1rem;
`;
export default AboutStyled;
