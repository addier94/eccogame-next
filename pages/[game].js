import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BasicLayout from "../layouts/BassicLayout";

export default function Game() {
  const { query } = useRouter();

  return (
    <BasicLayout className="game">
      <h1>Estamos en Game {query.game}</h1>
    </BasicLayout>
  );
}
