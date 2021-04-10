import React from 'react';

const Layout: React.FC<React.PropsWithChildren<any>> = ({ children }) => {
  return (
    <div>
      <React.Fragment>
        { children }
      </React.Fragment>
    </div>
  );
};

export default Layout;