import React, { useContext, useEffect } from "react";
import {
  ACTIONS,
  AppDispatchContext,
  AppStateContext,
} from "../context/AppContext";
import Header from "./Header";
import Content from "./Content";
import "./KanbanBoard.scss";

const KanbanBoard = () => {
  const dispatch = useContext(AppDispatchContext);
  const { tickets } = useContext(AppStateContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        const json = await response.json();
        dispatch({ type: ACTIONS.SET_DATA, payload: json });
      } catch {
        console.error("Error Fetching Data");
      }
    };

    if (!tickets) {
      fetchData();
    }
  }, [dispatch]);

  return (
    <div className="kanban-board-app">
      <Header />
      {tickets && <Content />}
    </div>
  );
};

export default KanbanBoard;
