import styled from 'styled-components';

export const SimpleButton = styled.button<{ hoverColor?: string }>`
	border: none;
	outline: none;
	transition: all 150ms ease-in;
  cursor:pointer;
	text-align: center;
  padding: 5px;
  width:fit-content;
  height:fit-content;
  border-radius:10px;
  background-color:transparent;
	&:hover {
		cursor: pointer;
		background-color: ${({ theme, hoverColor }) =>
			hoverColor ? theme.colors[hoverColor] : theme.colors.bg_hover};
	}
`;

export const Button = styled.button`
	border: none;
	outline: none;
	transition: all 150ms ease-in;
	text-align: center;
	padding: 5px;
	width:fit-content;
	height:fit-content;
	border-radius:10px;
	background-color:${({ theme })=>  theme.colors.primary};
	color:${({ theme })=>  theme.colors.white};
	&:hover {
		cursor: pointer;
		background-color: ${({ theme }) => theme.colors.bg_hover};
	}


`;