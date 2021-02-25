import React, { ReactNode, useEffect, useState } from 'react';
import './App.scss';
import cartApi from './api/CartService';
import productApi from './api/ProductService';

const App: React.FC = () => {
  const [cart, setCart] = useState();
  const [product, setProduct] = useState();
  useEffect(() => {
    cartApi.getCarts().then(
      (res) => {
        setCart(res.data);
      },
      (error) => {
        console.log(`Error while fetch carts: ${error}`);
      },
    );
    productApi.getProducts().then(
      (res) => {
        setProduct(res.data);
      },
      (error) => {
        console.log(`Error while fetch products: ${error}`);
      },
    );
  }, []);
  return (
    <div className="container">
      <div className="text-center">
        <h1>Welcome to this training </h1>
      </div>
      <h2 className="pt-5">Carts</h2>
      {JSON.stringify(cart)}
      <br />
      <h2 className="pt-5">Products</h2>
      {JSON.stringify(product)}
    </div>
  );
};

export default App;
