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
    this.state = {
      products: [],
    }

    this.getProducts();
  }
  getProducts() {
    Axios.get(`${urlProducts}`).then((resp) => {
      const products = resp.request.status ? resp.data : {};
      this.setState({products});
    });
  }
  render() {
    return (
      <main>
        <Top />
        <Banner />
        <BestSeller products={this.state.products} />
        <Newsletter />
        <Footer />
      </main>
    );
  }
}

export default App;
