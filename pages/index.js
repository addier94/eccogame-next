import React, { useState, useEffect } from "react";
import { size } from "lodash";
import BasicLayout from "../layouts/BassicLayout";
import { getLastGamesApi } from "../api/game";

export default function Home() {
  const [games, setGames] = useState(null);
  console.log(games);

  useEffect(() => {
    (async () => {
      const response = await getLastGamesApi(50);
      if (size(response) > 0) setGames(response);
      else setGames([]);
    })();
  }, []);
  return (
    <div className="home">
      <BasicLayout>
        <h1>Estamos en la HOME</h1>
      </BasicLayout>
    </div>
  );
}
