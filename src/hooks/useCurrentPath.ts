import { useLocation, matchPath } from 'react-router-dom';

import { MENU_ITEMS } from 'src/constants';

export const useCurrentPath = (): { id: number, path: string} | null => {
	const location = useLocation();
	const pathes = Object.values(MENU_ITEMS).map((item) => ({
		path: item.path,
		id: item.id,
	}));

	for (const path of pathes) {
		if (matchPath(path.path, location.pathname)) {
      return path;
    }
	}
  return null;
};
