import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function Auth(props) {
  const { onCloseModal, setTitleModal } = props;
  const [showLogin, setShowLogin] = useState(true);

  const showLoginForm = () => {
    setTitleModal("Iniciar sesión")
    setShowLogin(true)
  };
  const showRegisterForm = () => {
    setTitleModal("Crear nuevo usuario")
    setShowLogin(false)
  };

  return showLogin ? (
    <LoginForm showRegisterForm={showRegisterForm} />
  ) : (
    <RegisterForm showLoginForm={showLoginForm} />
  );
}
