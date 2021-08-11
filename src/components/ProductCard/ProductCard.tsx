import { FC } from 'react';

interface IProduct {
  name: string;
  price: number;
  imgSrc: string
}

const ProductCard: FC<IProduct> = ({ name, price, imgSrc }) => (
  <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
    <div className="featured__item">
      <div className="featured__item__pic set-bg">
        <img src={`/images/featured/${imgSrc}`} alt="2" />
        <ul className="featured__item__pic__hover">
          <li><i className="fa fa-heart" /></li>
          <li><i className="fa fa-retweet" /></li>
          <li><i className="fa fa-shopping-cart" /></li>
        </ul>
      </div>
      <div className="featured__item__text">
        <h6>{name}</h6>
        <h5>
          $
          {price}
        </h5>
      </div>
    </div>
  </div>
);

export default ProductCard;
