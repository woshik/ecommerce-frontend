import { FC, useState } from 'react';
import SideBar from '../SideBar';
import NavBar from '../NavBar';
import Footer from '../Footer';

const Layout: FC = ({ children }) => {
  const [mobileSideBar, setMobileSideBar] = useState(false);

  const handleMobileSideBar = (): void => {
    setMobileSideBar((preState) => !preState);
  };

  return (
    <>
      <div
        className={`humberger__menu__overlay ${mobileSideBar ? 'active' : ''}`}
        tabIndex={0}
        role="button"
        onKeyPress={handleMobileSideBar}
        onClick={handleMobileSideBar}
      />
      <SideBar shouldSideBarOpen={mobileSideBar} />
      <NavBar handleMobileSideBar={handleMobileSideBar} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
