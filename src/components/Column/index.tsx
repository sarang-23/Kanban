import React, { useContext } from "react";
import ColumnHeader from "../ColumnHeader";
import { Ticket } from "../../types/Ticket";
import Card from "../Card";
import "./Column.scss";
import { AppStateContext } from "../../context/AppContext";
import { SORT_BY } from "../../utils/constants";

interface ColumnProps {
  name: string;
  tickets: Ticket[];
}

const Column: React.FC<ColumnProps> = ({ name, tickets }) => {
  const { sortBy } = useContext(AppStateContext);
  const sortedTickets = tickets.sort((a: Ticket, b: Ticket) =>
    sortBy === SORT_BY.TITLE
      ? a[sortBy].localeCompare(b[sortBy])
      : a[sortBy] - b[sortBy]
  );
  return (
    <div className="column">
      <ColumnHeader name={name} ticketCount={tickets.length} />
      <div className="card-list">
        {sortedTickets.map((ticket) => (
          <Card key={ticket.id} cardData={ticket} />
        ))}
      </div>
    </div>
  );
};

export default Column;
