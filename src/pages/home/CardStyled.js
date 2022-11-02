import styled from "styled-components";
const CardStyled = styled.div`
  height: 25rem;
  width: 18rem;
  background-color: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 20px;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const CardButton = styled.button`
  width: 8rem;
  border: none;
  border-radius: 15px;
  background-color: #9fc131;
  color: ${({ theme }) => theme.colors.header};
  height: 2rem;
`;
export const CardImg = styled.img`
  width: 10rem;
  border-radius: 50%;
  padding: 1rem;
`;
export default CardStyled;
