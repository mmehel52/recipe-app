import styled from "styled-components";

const LoginStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://www.kozanbilgi.net/wp-content/uploads/Guzel-Manzara-Resimleri1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;

  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
  }
`;
export const LoginDiv = styled.div`
  width: 40rem;
  height: 40rem;
  border-radius: 50%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 2px;
  background-color: rgba(0, 0, 0, 0.4);
  @media (max-width: ${({ theme }) => theme.responsive}) {
    width: 30rem;
    height: 30rem;
  }
`;

export const LoginImg = styled.img`
  width: 15rem;

  padding: 1rem;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 15px;
`;
export const LoginInput = styled.input`
  width: 15rem;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.colors.text};
  height: 2rem;
`;
export const LoginButton = styled.button`
  width: 15rem;
  border: none;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.colors.text};
  height: 2rem;
`;

export default LoginStyled;
