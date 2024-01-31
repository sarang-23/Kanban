import React from "react";
import ColumnHeader from "../ColumnHeader";
import { Ticket } from "../../types/Ticket";
import Card from "../Card";
import "./Column.scss";

interface ColumnProps {
  name: string;
  tickets: Ticket[];
}

const Column: React.FC<ColumnProps> = ({ name, tickets }) => {
  //Sorting Logic Goes here
  return (
    <div className="column">
      <ColumnHeader name={name} ticketCount={tickets.length} />
      <div className="card-list">
        {tickets.map((ticket) => (
          <Card key={ticket.id} cardData={ticket} />
        ))}
      </div>
    </div>
  );
};

export default Column;
