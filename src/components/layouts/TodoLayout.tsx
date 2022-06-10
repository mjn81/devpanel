import styled from "styled-components";


export const TodoLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 70%;
  min-width: 350px;
  margin: 1rem auto;
  padding: 1rem;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.bg_gray};
  min-height: 100px;
  border-radius: 15px;
`;
