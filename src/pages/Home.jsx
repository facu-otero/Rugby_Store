import * as React from "react";
import Header from "../components/Header/Header";
import CardContainers from "../containers/CardContainers";

const Home = ({selectedCategory}) => {
  console.log(selectedCategory)
  return (
    <div>
      <Header name="Facundo" />
      <CardContainers selectedCategory={selectedCategory}/>
    </div>
  );
};

export default Home;
