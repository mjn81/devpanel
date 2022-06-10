import styled from "styled-components";

export const CheckBox = styled.input.attrs({
	type: 'checkbox',
})`
	appearance: none;
	background-color: ${({ theme }) => theme.colors.white};
	border: 1px solid ${({ theme }) => theme.colors.de_active};
	transition: all 150ms ease-in-out;
	width: 1.5rem;
	height: 1.5rem;
	border-radius: 30%;
	cursor: pointer;
	position: relative;
	&::before {
		content: '';
		position: absolute;
		width: 4px;
		height: 12px;
		opacity: 0;
		transform: rotate(46deg);
		left: 11px;
		top: 5px;
		border-radius: 10px;
	}
	&::after {
		content: '';
		position: absolute;
		width: 4px;
		height: 8px;
		transform: rotate(-45deg);
		border-radius: 10px;
		opacity: 0;
		left: 6px;
		top: 9px;
	}

	&:checked {
		border-color: ${({ theme }) => theme.colors.primary};
		background-color: ${({ theme }) => theme.colors.primary};
		::before,
		::after {
			background-color: ${({ theme }) => theme.colors.white};
			opacity: 1;
		}
	}
`;
