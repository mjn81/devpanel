import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.details.card_shadow};
  padding: 1.5rem;
`;

