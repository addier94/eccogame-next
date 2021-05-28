import React from "react";
import { Tab } from "semantic-ui-react";

export default function TabsGame(props) {
  const { game } = props;

  const panes = [
    {
      menuItem: "Información",
      render: () => (
        <Tab.Pane>
          <h1>Info Game</h1>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Comentarios",
      render: () => (
        <Tab.Pane>
          <h1>Lista de comentarios</h1>
        </Tab.Pane>
      ),
    },
  ];

  return <Tab className="tabs-game" panes={panes} />;
}
