import React, { Component } from "react";

import "./HomePage.styles.css";

export class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/products")
      .then(response => response.json())
      .then(data => {
        this.setState(
          {
            products: data,
            isLoading: false,
          },
          () => {
            // console.log(this.state);
          }
        );
      })
      .catch(error => {
        this.setState({
          error: error,
        });
      });
  }

  render() {
    const { isLoading, products } = this.state;
    if (isLoading) {
      return <div>Loading....</div>;
    }
    return (
      <div>
        {products.map(product => (
          <div key={product.id}>
            {product.mainImage}
            <br />
            {product.serialNumber}
            <br />
            {product.displayName}
            <br />
            {product.productName}
            <br />
          </div>
        ))}
      </div>
    );
  }
}

export default HomePage;
