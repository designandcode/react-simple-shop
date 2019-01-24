import React, { Component } from 'react';
import ProductsData from '../data/products';
import HomeProduct from '../components/Home-Product';

class HomeProducts extends Component {
	
  //state = ProductsData;

  constructor(props) {
    super(props);
    this.state = { products: ProductsData };
  }

  render() {
    return (
        <div className="home-products-container">
          {
            this.state.products.map((product) => 
              <HomeProduct 
                key={product.id} 
                id={product.id} 
                images={product.images} />
            )
          }
      </div>
    )
  }
}

export default HomeProducts;
