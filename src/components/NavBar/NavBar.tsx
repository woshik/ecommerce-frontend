import { FC } from 'react';
import { Link } from 'react-router-dom';

interface INavBar {
  handleMobileSideBar: () => void
}

const NavBar: FC<INavBar> = ({ handleMobileSideBar }) => (
  <header className="header">
    <div className="header__top">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="header__top__left">
              <ul>
                <li>
                  <i className="fa fa-envelope" />
                </li>
                <li />
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="header__top__right">
              <div className="header__top__right__social">
                <Link to="/"><i className="fa fa-facebook" /></Link>
                <Link to="/"><i className="fa fa-twitter" /></Link>
                <Link to="/"><i className="fa fa-pinterest-p" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="header__logo">
            <Link to="/"><img src="/images/logo.png" alt="" /></Link>
          </div>
        </div>
        <div className="col-lg-6">
          <nav className="header__menu">
            <ul>
              <li className="active"><Link to="/">Home</Link></li>
              <li><Link to="/">Checkout</Link></li>
              <li><Link to="/">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <div className="col-lg-3">
          <div className="header__cart">
            <ul>
              <li>
                <Link to="/">
                  <i className="fa fa-heart" />
                  <span>1</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fa fa-shopping-bag" />
                  <span>3</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="humberger__open" onClick={handleMobileSideBar} onKeyPress={handleMobileSideBar} role="button" tabIndex={0}>
        <i className="fa fa-bars" />
      </div>
    </div>
  </header>
);

export default NavBar;
