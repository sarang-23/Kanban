import React, { useContext, useEffect } from "react";
import {
  ACTIONS,
  AppDispatchContext,
  AppStateContext,
} from "../context/AppContext";

const KanbanBoard = () => {
  const dispatch = useContext(AppDispatchContext);
  const { users, tickets } = useContext(AppStateContext);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      const json = await response.json();
      dispatch({ type: ACTIONS.SET_DATA, payload: json });
    };

    if (!tickets) {
      fetchData();
    }
  }, [dispatch]);

  return <div>{users ? users.map((u) => <div>{u.name}</div>) : ""}</div>;
};

export default KanbanBoard;
