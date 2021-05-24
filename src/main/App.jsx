import React, { Component } from "react";
import Banner from "../views/Banner";
import BestSeller from "../views/bestSellers";
import Top from "../views/Top";
import Newsletter from "../views/Newsletter";
import Footer from "../views/Footer";
import Axios from "axios";

const urlProducts = "https://corebiz-test.herokuapp.com/api/v1/products";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.state = {
      products: [],
      shoppingCart: 0,
    }

    /* executa o metodo que busca os produtos */
    this.getProducts();
  }

  /* Caso tenha sido adicionado algum produto, ele resgata do localStorage */
  componentDidMount() {
    const addedProducts = localStorage.getItem("shoppingCart") !== null ? localStorage.getItem("shoppingCart") : 0;
    const qtd = parseInt(addedProducts);
    qtd > 0 ? this.setState({shoppingCart: qtd}): this.setState({shoppingCart: 0})
  }

  getProducts() {
    Axios.get(`${urlProducts}`).then((resp) => {
      const products = resp.request.status ? resp.data : {};
      this.setState({products});
    });
  }

  handleAddToCart() {
    this.setState({shoppingCart: this.state.shoppingCart + 1});
  }

  render() {
    return (
      <main>
        <Top productsInCart={this.state.shoppingCart} />
        <Banner />
        <BestSeller products={this.state.products} addToCart={this.handleAddToCart} />
        <Newsletter />
        <Footer />
      </main>
    );
  }
}

export default App;
