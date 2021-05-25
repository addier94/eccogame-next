import React from "react";
import { useRouter } from "next/router";
import BasicLayout from "../../layouts/BassicLayout";

export default function Platform() {
  const { query } = useRouter();

  return (
    <BasicLayout className="platform">
      <h1>Estamos en Plataformas: {query.platform} </h1>
    </BasicLayout>
  );
}
