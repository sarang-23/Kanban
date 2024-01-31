import React, { useContext } from "react";
import { AppStateContext } from "../../context/AppContext";
import { groupBy } from "../../utils/helpers";
import Column from "../Column";
import "./Content.scss";

const Content: React.FC = () => {
  const appState = useContext(AppStateContext);

  const columns = groupBy(appState.groupBy, appState.tickets);

  console.log(columns);
  return (
    <main className="content-wrapper">
      {columns ? (
        <div className="column-wrapper">
          {Object.keys(columns).map((category, idx) => (
            <Column key={idx} name={category} tickets={columns[category]} />
          ))}
        </div>
      ) : (
        <></>
      )}
    </main>
  );
};

export default Content;
