import styled from "styled-components";

export const TodoTitle = styled.h4`
	padding: 0.5rem 0.15rem;
	border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.primary};
	font-size: 2rem;
	width: 100%;
`;