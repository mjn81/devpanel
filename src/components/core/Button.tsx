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
