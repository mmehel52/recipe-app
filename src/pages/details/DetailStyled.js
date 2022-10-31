import styled from "styled-components";
const DetailStyled = styled.div`
  min-height: 86vh;
  min-width: 98vw;
  background-color: ${({ theme }) => theme.colors.body};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.responsive}) {
  }
`;
export const DetailDiv = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 20px;
  padding: 13px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;
export const TopDiv = styled.div`
  color: ${({ theme }) => theme.colors.text};
  border-radius: 20px;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;

export const DetailImg = styled.img`
  border: 1px solid ${({ theme }) => theme.colors.text};
  width: 25rem;
  border-radius: 10%;
  padding: 0.5rem;
`;
export const TopImg = styled.img`
  width: 10rem;
  border-radius: 50%;
  padding: 0.5rem;
`;
export const DetailLi = styled.li`
  list-style-type: none;
  text-align: end;
  font-size: 1.5rem;
  margin: 0 1rem;
`;
export const DetailLi2 = styled.li`
  text-align: start;
  font-size: 1.5rem;
  margin: 0 1rem;
`;
export default DetailStyled;
