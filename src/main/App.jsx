import React from "react";
import Banner from "../views/Banner";
import BestSeller from "../views/bestSellers";
import Top from "../views/Top";
import Newsletter from "../views/Newsletter";

const App = (props) => {
  return (
    <main>
      <Top />
      <Banner />
      <BestSeller />
      <Newsletter />
    </main>
  );
};

export default App;
