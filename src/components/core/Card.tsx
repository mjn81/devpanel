import { DIRECTIONS } from 'src/constants';
import styled from 'styled-components';

export const Card = styled.div<{ full?: boolean }>`
	border-radius: 15px;
	box-shadow: ${({ theme }) => theme.details.card_shadow};
	background-color: ${({ theme }) => theme.colors.white};
	width: ${({ full }) => (full ? '100%' : 'auto')};
`;

export const FixedSection = styled.section<{ direction: DIRECTIONS }>`
	position: fixed;
	margin-left: ${({ direction }) =>
		[DIRECTIONS.BOTTOM, DIRECTIONS.TOP].includes(direction) ? '35px' : '0px'};
	z-index: 100;
	${({ direction }) => {
		switch (direction) {
			case DIRECTIONS.TOP:
				return `top: 0; left:50%; transform: translateX(-50%); width: 50%; min-width: 350px; min-height:35px;`;
			case DIRECTIONS.BOTTOM:
				return `bottom: 0; left:50%; transform: translateX(-50%); width: 50%; min-width: 350px;  min-height:75px;`;
			case DIRECTIONS.LEFT:
				return `left: 0; top:50%; transform: translateY(-50%); height: 50%; min-height: 350px;`;
			case DIRECTIONS.RIGHT:
				return `right: 0; top:50%; transform: translateY(-50%); height: 50%; min-height: 350px;`;
			default:
				return '';
		}
	}}
	box-shadow: ${({ theme }) => theme.details.card_shadow};
	background-color: ${({ theme }) => theme.colors.white};
`;
