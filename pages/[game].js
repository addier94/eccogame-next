import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BasicLayout from "../layouts/BassicLayout";
import { getGameByUrlApi } from "../api/game";

export default function Game() {
  const [game, setGame] = useState(null);
  const { query } = useRouter();

  useEffect(() => {
    (async () => {
      const response = await getGameByUrlApi(query.game);
      setGame(response);
    })();
  }, [query]);

  return (
    <BasicLayout className="game">
      <h1>Estamos en Game {query.game}</h1>
    </BasicLayout>
  );
}
