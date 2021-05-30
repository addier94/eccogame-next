import React, { useState, useEffect } from "react";
import BasicLayout from "../layouts/BassicLayout";
import { getGameByUrlApi } from "../api/game";
import useCart from "../hooks/useCart";

export default function Cart() {
  const { getProductsCart } = useCart();
  const products = getProductsCart();

  return !products ? <EmptyCart /> : <FullCart products={products} />;
}

function EmptyCart() {
  return (
    <BasicLayout className="empty-cart">
      <h1>No hay productos en el carrito</h1>
    </BasicLayout>
  );
}

function FullCart(props) {
  const { products } = props;
  const [productsData, setProductsData] = useState(null);

  useEffect(() => {
    (async () => {
      const productsTemp = [];
      for await (const product of products) {
        const data = await getGameByUrlApi(product);
        productsTemp.push(data);
      }
      setProductsData(productsTemp);
    })();
  }, []);

  return (
    <BasicLayout className="cart">
      <h1>Carrito</h1>
    </BasicLayout>
  );
}
