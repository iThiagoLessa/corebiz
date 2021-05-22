import React from "react";
import Banner from "../views/Banner";
import BestSeller from "../views/bestSellers";
import Top from "../views/Top";
import Newsletter from "../views/Newsletter";
import Footer from "../views/Footer";

const App = (props) => {
  return (
    <main>
      <Top />
      <Banner />
      <BestSeller />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default App;
