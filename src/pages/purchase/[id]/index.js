import React from "react";
import { ProductDetailContainer } from "./styled";
import { Mainlayouts } from "@/components";

const ProductDetail = () => {
  return (
    <Mainlayouts.NavAndFooterWithBanner>
      <ProductDetailContainer>ProductDetail</ProductDetailContainer>
    </Mainlayouts.NavAndFooterWithBanner>
  );
};

export default ProductDetail;
