import React, { useState, useEffect } from "react";
import { getAddressesApi } from "../../../api/address";
import useAuth from "../../../hooks/useAuth";

export default function ListAddress() {
  const [addresses, setAddresses] = useState(null);
  const { auth, logout } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getAddressesApi(auth.idUser, logout);
      setAddresses(response || []); // Si response tiene contenido añade  Or si no va ser igual a []
    })();
  }, []);

  return (
    <div>
      <h1>List Address.....</h1>
    </div>
  );
}
