import React from "react";
import HeroSection from "../HeroSection";
import { productObjOne, productObjTwo } from "./Data";

const Products = () => {
  return (
    <>
      <HeroSection {...productObjOne} />
      <HeroSection {...productObjTwo} />
    </>
  );
};

export default Products;
