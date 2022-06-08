import { Outlet } from "react-router-dom";

import { NavBar, NavBarList, NavBarListItem } from "../nav"

import styled from 'styled-components';
import { MENU_ITEMS } from "src/constants";

const Layout = styled.div`
  display: grid;
  grid-template-columns:repeat(20 , 1fr);
  & > .nav-filler {
    grid-column: 1 / span 1;
    min-width:85px;
  }

  & > main {
    grid-column: 2 / span 19;
    padding: 1rem;
  }
`;


export const MainLayout = () => {
  console.log(MENU_ITEMS);
  
  return (
    <Layout>
      <NavBar>
        <NavBarList>
          {
            MENU_ITEMS.map((item) => (
              <NavBarListItem key={item.id}>
                <item.icon />
              </NavBarListItem>
            ))
          }
        </NavBarList>
      </NavBar>
      <div className="nav-filler"></div>
      <main>
        <Outlet />
      </main>
    </Layout>
  );
};
