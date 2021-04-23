import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";

export default function RegisterForm(props) {
  const { showLoginForm } = props;

  return (
    // <div>
    //   <h1>Estamos en el registro de usuarios</h1>
    //   <button onClick={showLoginForm}>Ir al login</button>
    // </div>
    <Form className="login-form">
      <Form.Input name="name" type="text" placeholder="Nombre" />
      <Form.Input name="lastname" type="text" placeholder="Apellidos" />
      <Form.Input name="username" type="text" placeholder="Nombre de usuario" />
      <Form.Input name="email" type="email" placeholder="Correo electrónico" />
      <Form.Input name="password" type="password" placeholder="Contraseña" />
      <div className="actions">
        <Button type="button" basic>
          Iniciar sesión
        </Button>
        <Button type="submit" className="submit">
          Registrar
        </Button>
      </div>
    </Form>
  );
}