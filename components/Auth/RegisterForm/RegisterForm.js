import React from "react";

export default function RegisterForm(props) {
  const { showLoginForm } = props;

  return (
    <div>
      <h1>Estamos en el registro de usuarios</h1>
      <button onClick={showLoginForm}>Ir al login</button>
    </div>
  );
}