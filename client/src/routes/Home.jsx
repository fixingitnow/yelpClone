import React from "react";
import Header from "../components/Header";
import AddRestaurant from "../components/AddRestaurant";
import Restaurant from "../components/Restaurant";

const Home = () => {
  return (
    <>
      <Header />
      <AddRestaurant />
      <Restaurant />
    </>
  );
};

export default Home;
