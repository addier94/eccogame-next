import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { size, forEach } from "lodash";
import BasicLayout from "../layouts/BassicLayout";
import { getFavoriteApi } from "../api/favorite";
import useAuth from "../hooks/useAuth";
import ListGames from "../components/ListGames";

export default function wishlist() {
  const [games, setGames] = useState(null);
  const { auth, logout } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getFavoriteApi(auth.idUser, logout);
      if (size(response) > 0) {
        const gamesList = [];
        forEach(response, (data) => {
          gamesList.push(data.game);
        });
        setGames(gamesList);
      } else {
        setGames([]);
      }
    })();
  }, []);

  return (
    <BasicLayout className="wishlist">
      <div className="wishlist__block">
        <div className="title">Lista de deseos</div>

        <div className="data">
          {!games && <Loader active>Cargando juegos</Loader>}
          {games && size(games) === 0 && (
            <div className="data__not_found">
              <h3>No tienes ningun juego en tu lista</h3>
            </div>
          )}
        </div>

        {size(games) > 0 && <ListGames games={games} />}
      </div>
    </BasicLayout>
  );
}
