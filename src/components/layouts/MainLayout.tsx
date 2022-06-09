import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from 'styled-components';

import { NavBar, NavBarList, NavBarListItem } from "../nav";
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
    padding: 2rem;
  }
`;


export const MainLayout = () => {
  const navigator = useNavigate();
  
  const [activeItem, setActiveItem] = useState({active: 1});
  return (
    <Layout>
      <NavBar>
        <NavBarList>
          {
            MENU_ITEMS.map((item) => (
              <NavBarListItem key={item.id} value={item.id} onClick={() => {
                setActiveItem({ active: item.id });
                navigator(item.path , { replace: true });
              }}
              className={activeItem.active === item.id ? 'active' : ''}>
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
