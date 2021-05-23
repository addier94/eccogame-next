import React from "react";
import { Form, Button } from "semantic-ui-react";

export default function ChangePasswordForm(props) {
  const { user, logout } = props;
  return (
    <div className="change-password-form">
      <h4>Cambiar tu contraseña</h4>
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            name="password"
            type="password"
            placeholder="Tu nueva contraseña"
          />
          <Form.Input
            name="repeatPassword"
            type="password"
            placeholder="Confirma tu nueva contraseña"
          />
        </Form.Group>
        <Button className="submit">Actualizar</Button>
      </Form>
    </div>
  );
}
