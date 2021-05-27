import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { useRouter } from "next/router";
import { size } from "lodash";
import BasicLayout from "../../layouts/BassicLayout";
import { getGamesPlatformApi } from "../../api/game";
import ListGames from "../../components/ListGames";

const limitPerPage = 10;

export default function Platform() {
  const { query } = useRouter();
  const [games, setGames] = useState(null);

  useEffect(() => {
    (async () => {
      if (query.platformds) {
        const response = await getGamesPlatformApi(
          query.platformds,
          limitPerPage,
          0
        );
        setGames(response);
      }
    })();
  }, [query]);
  return (
    <BasicLayout className="platform">
      {!games && <Loader active>Cargando juegos</Loader>}
      {games && size(games) === 0 && (
        <div>
          <h3>No hay juegos</h3>
        </div>
      )}
      {size(games) > 0 && <ListGames games={games} />}
    </BasicLayout>
  );
}
