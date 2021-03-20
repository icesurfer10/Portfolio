import React from 'react';
import { BrowserRouter, NavLink, Router } from 'react-router-dom';

export interface INavigationMenuProps {

}

export interface INavigationMenuItem {
  title: string;
  link: string;
}

const NavigationMenu: React.FC<INavigationMenuProps> = () => {
  const navigationMenuItems: ReadonlyArray<INavigationMenuItem> = [
    {
      title: 'projects',
      link: 'projects'
    },
    {
      title: 'contact',
      link: 'contact'
    }
  ];

  return (
    <BrowserRouter>
    <nav>
      <ul>
        {navigationMenuItems.map((item) => {
          return (
            <li>
              <NavLink
                exact={true}
                className='menu-link'
                activeClassName='active'
                to={`/${item.link}`}>
                  {item.title}
                </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
    </BrowserRouter>
  )
};

export default NavigationMenu;