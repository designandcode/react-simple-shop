import React from 'react';
import ProductsData from '../data/products';
import ProductProduct from '../components/Product-Product';
import queryString from 'query-string';
import HomeProducts from '../components/Home-Products';

//const parsed = queryString.parse(props.location.search);

const Product = (props) => {

  if (queryString.parse(props.location.search).id) {

    let product = ProductsData.filter((product) => {
      return product.id == queryString.parse(props.location.search).id;
    })[0];

    if (product) {
      return (
        <React.Fragment>
          <h2>Product Page</h2>
          <ProductProduct 
            id={queryString.parse(props.location.search).id}
            key={queryString.parse(props.location.search).id}
            product={product} />
        </React.Fragment>
      )
    }
  }

  return <HomeProducts />;
};

export default Product;
