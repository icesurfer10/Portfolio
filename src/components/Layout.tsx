import React from 'react';
import NavigationMenu from './NavigationMenu';

const Layout: React.FC<React.PropsWithChildren<any>> = ({ children}) => {
  return (
    <div>
      {/* <NavigationMenu /> */}

      <React.Fragment>
        { children }
      </React.Fragment>
    </div>
  );
};

export default Layout;