import styled from 'styled-components';

export const Card = styled.div<{ full?: boolean }>`
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.details.card_shadow};
  background-color: ${({ theme }) => theme.colors.white};
  width: ${({ full }) => (full ? '100%' : 'auto')};
`;

