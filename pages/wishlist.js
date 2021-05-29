import React from "react";
import BasicLayout from "../layouts/BassicLayout";

export default function wishlist() {
  return (
    <BasicLayout className="wishlist">
      <div className="wishlist__block">
        <div className="title">Lista de deseos</div>

        <div className="data">
          <p>Lista de productos</p>
        </div>
      </div>
    </BasicLayout>
  );
}
