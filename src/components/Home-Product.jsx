import React from 'react';
import { Link } from 'react-router-dom';

const HomeProduct = (props) => (
  <div className="home-product-item">
    <Link to={"/product?id=" + props.id}>
      <img className="home-product-image" src={require('../assets/'+ props.images[0])} />
      <span>View Item</span>
    </Link>
  </div>
);

export default HomeProduct;
