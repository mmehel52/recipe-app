import styled from "styled-components";

const HomeStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.body};
  min-height: 88vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: ${({ theme }) => theme.responsive}) {
  }
`;
export const HomeDiv = styled.div`
  margin: 20px;
  gap: 5px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.responsive}) {
  }
`;
export const CardsDiv = styled.div`
  margin: 20px;
  gap: 5px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.responsive}) {
  }
`;
export const HomeInput = styled.input`
  width: 15rem;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.colors.text};
  height: 2rem;
`;
export const HomeButton = styled.button`
  width: 15rem;
  border: none;
  border-radius: 15px;
  background-color: #9fc131;
  color: ${({ theme }) => theme.colors.header};
  height: 2rem;
`;
export const HomeSelect = styled.select`
  width: 15rem;
  border: none;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.colors.text};
  height: 2rem;
  text-align: center;
`;
export const HomeImg = styled.img`
  width: 40rem;

  border-radius: 10%;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.body};
`;
export default HomeStyled;
