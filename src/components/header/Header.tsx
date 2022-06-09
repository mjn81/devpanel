import styled from 'styled-components';
import { BiSearchAlt } from 'react-icons/bi';
import { IoIosNotifications } from 'react-icons/io';
import { BsCalendar2Date, BsFillCalendarCheckFill } from 'react-icons/bs';

import { Input, SimpleButton } from '../core';
import { TOP_NAV_ITEMS } from 'src/constants';

const HeaderComponent = styled.header`
	display: flex;
	justify-content: space-between;
	margin-bottom: 1.5rem;
`;

const NotificationSection = styled.section`
	display: flex;
	align-items: center;
	gap: 0.75rem;
	padding-right: 0.5rem;
	.n-icon {
		padding: 0.5rem;
		font-size: 1.5rem;
		display: flex;
		align-items: center;
		color: ${({ theme }) => theme.colors.de_active};
		:hover {
			color: ${({ theme }) => theme.colors.primary};
		}

		&.small {
			padding: 0.65rem;
			font-size: 1.2rem;
		}
	}

	.welcome {
		font-weight: 400;
		margin-right: 0.5rem;
	}
`;

const SearchSection = styled.section`
	position: relative;
	width: 30%;
	& > .s-icon {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 5px;
		display: flex;
		align-items: center;
		font-size: 1.5rem;
		color: ${({ theme }) => theme.colors.text_gray};
	}
`;
export const Header = () => {
	// const today = new Date().toLocaleDateString('fa-IR');
	return (
		<HeaderComponent>
			<SearchSection>
				<Input full type="search" placeholder="search..." />
				<SimpleButton hoverColor="bg_gray" className="s-icon">
					<BiSearchAlt />
				</SimpleButton>
			</SearchSection>
			<NotificationSection>
				<p className="welcome">hello mjn!</p>
				{TOP_NAV_ITEMS.map((item) => (
					<SimpleButton key={item.id} onClick={item.onclick} className={`n-icon ${item?.className}`}>
						{<item.icon />}
					</SimpleButton>
				))}
			</NotificationSection>
		</HeaderComponent>
	);
};
