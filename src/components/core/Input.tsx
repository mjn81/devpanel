import styled from 'styled-components';

export const Input = styled.input<{full? : boolean}>`
	outline: none;
	font-size: 1rem;
  width: ${({full}) => full ? '100%' : 'auto'};
	background-color: ${({ theme }) => theme.colors.bg_gray};
	border: 1px solid transparent;
	color: ${({ theme }) => theme.colors.text_gray};
	padding: 0.75rem 1.5rem;
	border-radius: 15px;
	transition: all 150ms ease-in;
	:focus {
		background-color: ${({ theme }) => theme.colors.white};
		border: 1px solid ${({ theme }) => theme.colors.bg_gray};
	}
	::placeholder {
		color: ${({ theme }) => theme.colors.gray};
	}
`;
