import styled from 'styled-components';

export const VerticalFlex = styled.div<{ gap?: string; padding?: string }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: ${({ padding }) => padding || '0px'};
	gap: ${({ gap }) => gap || '0px'};
`;

export const HorizontalFlex = styled.div<{ gap?: string; padding?: string }>`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: ${({ gap }) => gap || '0px'};
	padding: ${({ padding }) => padding || '0px'};
`;
