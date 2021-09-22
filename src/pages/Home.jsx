import * as React from "react";
import Header from "../components/Header/Header";
import CardContainers from "../containers/CardContainers";

const Home = () => {
  return (
    <div>
      <Header name="Facundo" />
      <CardContainers />
    </div>
  );
};

export default Home;
