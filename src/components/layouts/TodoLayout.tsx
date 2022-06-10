import styled from "styled-components";


export const TodoLayout = styled.div`

  max-width: 70%;
  min-width: 350px;
  margin: 1rem auto;
  padding: 1rem;
  background-color: ${({ theme }) => theme.details.bg_todo};
  min-height: 100px;
  border-radius: 15px;
  & > .droppable {
    min-height: 20px;
  }
`;
