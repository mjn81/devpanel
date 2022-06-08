import styled from 'styled-components';

export const NavBar = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	position: fixed;
	top: 0;
	left: 0;
	background-color: #fff;
	border-right: 1px solid ${({ theme }) => theme.colors.border};
	min-width: 85px;
	height: 100vh;
	box-shadow: 27px 0px 44px -38px rgba(199, 199, 199, 1);
`;

export const NavBarList = styled.ul`
	margin: auto;
	text-align: center;
	list-style: none;
`;

export const NavBarListItem = styled.li`
	font-size: 2rem;
	cursor: pointer;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: fit-content;
	padding: 0.5rem;
	color: ${({ theme }) => theme.colors.primary};
	border-radius: 10px;
	transition: all 200ms ease-in;
	::after {
		content: '';
		position: absolute;
		top: 0;
		right: 4.2rem;
		height: 100%;
		transition: all 200ms ease-in;
		border-right: 5px solid ${({ theme }) => theme.colors.primary};
		border-top-right-radius: 12px;
		border-bottom-right-radius: 12px;
	}
	:hover {
		background-color: ${({ theme }) => theme.colors.hover_bg};
	}
	&:hover::after {
    right: 3.8rem;
	}
`;
