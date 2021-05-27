import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BasicLayout from "../../layouts/BassicLayout";
import { getGamesPlatformApi } from "../../api/game";

const limitPerPage = 10;

export default function Platform() {
  const { query } = useRouter();
  const [games, setGames] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getGamesPlatformApi(
        query.platformds,
        limitPerPage,
        0
      );
      setGames(response);
    })();
  }, [query]);
  return (
    <BasicLayout className="platform">
      <h1>Estamos en Plataformas: {query.platform} </h1>
    </BasicLayout>
  );
}
