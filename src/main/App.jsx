import React from "react";
import Banner from "../views/Banner";
import BestSeller from "../views/bestSellers";
import Top from "../views/Top";

const App = (props) => {
  return (
    <main>
      <Top />
      <Banner />
      <BestSeller />
    </main>
  );
};

export default App;
