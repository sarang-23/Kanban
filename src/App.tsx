import React from "react";
import "./App.css";
import KanbanBoard from "./components/KanbanBoard";
import AppContext from "./context/AppContext";

function App() {
  return (
    <AppContext>
      <KanbanBoard />
    </AppContext>
  );
}

export default App;
