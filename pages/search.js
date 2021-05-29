import React, { useState, useEffect } from "react";
import BasicLayout from "../layouts/BassicLayout";

export default function search() {
  useEffect(() => {
    document.getElementById("search-game").focus();
  }, []);

  return (
    <BasicLayout className="search">
      <div>
        <h1>Busqueda...</h1>
      </div>
    </BasicLayout>
  );
}
