import React, { useState, useEffect } from "react";
import BasicLayout from "../layouts/BassicLayout";
import { useRouter } from "next/router";
import { searchGamesApi } from "../api/game";
import { size } from "lodash";

export default function search() {
  const [games, setGames] = useState(null);
  const { query } = useRouter();

  useEffect(() => {
    document.getElementById("search-game").focus();
  }, []);

  useEffect(() => {
    (async () => {
      if (size(query.query) > 0) {
        const response = await searchGamesApi(query.query);
        if (size(response) > 0) setGames(response);
        else setGames([]);
      } else {
        setGames([]);
      }
    })();
  }, [query]);

  return (
    <BasicLayout className="search">
      <div>
        <h1>Busqueda...</h1>
      </div>
    </BasicLayout>
  );
}
