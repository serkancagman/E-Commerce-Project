import { FooterMain } from 'components/Footer/FooterMain';
import { Header } from 'components/Header/Header';
import ProductDetail from 'components/ProductDetail/ProductDetail';
import React from 'react';

const ProductInnerPage = () => {
  return <>
    <Header/>
    <ProductDetail/>
    <FooterMain/>
  </>;
};

export default ProductInnerPage;
