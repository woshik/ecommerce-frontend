import { FC } from 'react';
import { Link } from 'react-router-dom';

const HeroBanner: FC = () => (
  <section className="hero">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="hero__search">
            <div className="hero__search__form">
              <form action="#">
                <div className="hero__search__categories">
                  All Categories
                  <span className="arrow_carrot-down" />
                </div>
                <input type="text" placeholder="What do yo u need?" />
                <button type="submit" className="site-btn">SEARCH</button>
              </form>
            </div>
            <div className="hero__search__phone">
              <div className="hero__search__phone__icon">
                <i className="fa fa-phone" />
              </div>
              <div className="hero__search__phone__text">
                <h5>+6000000000</h5>
                <span>support 24/7 time</span>
              </div>
            </div>
          </div>
          <div className="hero__item set-bg" style={{ backgroundImage: "url('/images/hero/banner.jpg')" }}>
            <div className="hero__text">
              <span>FRUIT FRESH</span>
              <h2>
                Vegetable
                <br />
                100% Organic
              </h2>
              <p>Free Pickup and Delivery Available</p>
              <Link to="/" className="primary-btn">SHOP NOW</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroBanner;
