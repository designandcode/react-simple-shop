import React, { Component } from 'react';

class ProductProduct extends Component {

  constructor(props) {
    super(props);

    let images = this.props.product.images;

    this.state = {
      images: {
        "0": require('../assets/'+ images[0]),
        "1": images[1] && require('../assets/'+ images[1]),
        "2": images[2] && require('../assets/'+ images[2]),
        "3": images[3] && require('../assets/'+ images[3]),
      },
      currentImg: require('../assets/'+ images[0]),
      currentImgIdx: 0
    }
  }

  onUpdateCurrentImg(idx) {

    let that = this;

    return function() {

      that.setState({
        currentImg: that.state.images[idx]
      })
    }
  }

  render() {

    let { images, title, description, quantity, extra } = this.props.product;

    return(
      <div className="product-product-container">
        <div className="product-product-images">
          <img className="product-product-image-hero" src={this.state.currentImg} />
          <div className="product-product-images-additional">
            { <img onClick={this.onUpdateCurrentImg(0)} src={this.state.images[0]} /> }
            { images[1] && <img onClick={this.onUpdateCurrentImg(1)} src={this.state.images[1]} /> }
            { images[2] && <img onClick={this.onUpdateCurrentImg(2)} src={this.state.images[2]} /> }
            { images[3] && <img onClick={this.onUpdateCurrentImg(3)} src={this.state.images[3]} /> }
          </div>
        </div>
        <div className="product-product-description">
          <h2>{title}</h2>
          <p>{description}</p>
          <div>
            { 
              quantity 
                ? 

                <button>Buy Now</button>
                : 

                <React.Fragment>
                <a href={extra.amazon}>On Amazon</a> <a href={extra.ebay}>On eBay</a>
                </React.Fragment>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default ProductProduct;
