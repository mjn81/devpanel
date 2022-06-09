import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { IoIosNotifications, IoMdApps } from 'react-icons/io';
import { MdOutlineChecklist } from 'react-icons/md';

import { APP_PATHS } from './appPaths';

export const MENU_ITEMS = [
	{
		id: 1,
		label: 'Home',
		path: APP_PATHS.HOME.path,
		icon: IoMdApps,
	},
	{
		id: 2,
		label: 'Todo',
		path: APP_PATHS.TODO_LIST.path,
		icon: MdOutlineChecklist,
	},
];


export const TOP_NAV_ITEMS = [
	{
		id: 1,
		label: 'Notifications',
		path: APP_PATHS.ROOT,
		icon: BsFillCalendarCheckFill,
		onclick: () => {},
		className: 'small',
	},
	{
		id: 2,
		label: 'Calendar',
		path: APP_PATHS.ROOT,
		icon: IoIosNotifications,
		onclick: () => {},
	},
];