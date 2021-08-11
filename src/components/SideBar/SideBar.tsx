import { FC } from 'react';
import { Link } from 'react-router-dom';

interface ISideBar {
  shouldSideBarOpen: boolean
}

const SideBar: FC<ISideBar> = ({ shouldSideBarOpen }) => (
  <div className={`humberger__menu__wrapper ${shouldSideBarOpen ? 'show__humberger__menu__wrapper' : ''}`}>
    <div className="humberger__menu__logo">
      <Link to="/"><img src="img/logo.png" alt="" /></Link>
    </div>
    <div className="humberger__menu__cart">
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
      <div className="header__cart__price">
        item:
        <span>$150.00</span>
      </div>
    </div>
    <nav className="humberger__menu__nav mobile-menu">
      <ul>
        <li className="active"><Link to="./index.html">Home</Link></li>
        <li><Link to="/">Checkout</Link></li>
        <li><Link to="/">Contact</Link></li>
      </ul>
    </nav>
    <div id="mobile-menu-wrap" />
    <div className="header__top__right__social">
      <Link to="/"><i className="fa fa-facebook" /></Link>
      <Link to="/"><i className="fa fa-twitter" /></Link>
      <Link to="/"><i className="fa fa-pinterest-p" /></Link>
    </div>
    <div className="humberger__menu__contact">
      <ul>
        <li>
          <i className="fa fa-envelope" />
        </li>
        <li />
      </ul>
    </div>
  </div>
);

export default SideBar;
