import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { useRouter } from "next/router";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import { size } from "lodash";
import useAuth from "../../../../hooks/useAuth";
import useCart from "../../../../hooks/useCart";

export default function FormPayment(props) {
  const { products, address } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Realizando pago...");
  };

  return (
    <form className="form-payment" onSubmit={handleSubmit}>
      <div>shi</div>
      <CardElement />
      <Button type="submit">Pagar</Button>
    </form>
  );
}
