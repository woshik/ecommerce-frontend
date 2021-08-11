import { FC } from 'react';
import HeroBanner from '../../components/HeroBanner';
import Layout from '../../components/Layout';
import ProductCard from '../../components/ProductCard';
import products from '../../assets/data/product.json';

const Home: FC = () => (
  <Layout>
    <HeroBanner />
    <section className="featured spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Featured Product</h2>
            </div>
          </div>
        </div>
        <div className="row featured__filter">
          {products.products.map((product) => (
            <ProductCard
              key={product.key}
              name={product.name}
              price={product.price}
              imgSrc={product.img}
            />
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Home;
