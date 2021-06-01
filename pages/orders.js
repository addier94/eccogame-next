import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import BasicLayout from "../layouts/BassicLayout";
import { getOrdersApi } from "../api/order";
import useAuth from "../hooks/useAuth";

export default function Orders() {
  const [orders, setOrders] = useState(null);
  const { auth, logout } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getOrdersApi(auth.idUser, logout);
      setOrders(response);
    })();
  }, []);

  return (
    <BasicLayout className="orders">
      <div className="orders__block">
        <div className="title">Mis pedidos</div>
        <div className="data">
          <p>Lista de pedidos</p>
        </div>
      </div>
    </BasicLayout>
  );
}
