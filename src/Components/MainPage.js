import React, { useState, useEffect } from 'react';
import Header from './Header';
import Banner from './Banner';

import ProductsContainer from './ProductsContainer';

export default function MainPage() {
  return (
    <div>
      <Header />
      <ProductsContainer />
    </div>
  );
}
