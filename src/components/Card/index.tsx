import React from "react";
import { Ticket } from "../../types/Ticket";
import Badge from "../Badge/Badge";
import "./Card.scss";
import Avatar from "../Avatar/Avatar";

interface CardProps {
  cardData: Ticket;
}

const Card: React.FC<CardProps> = ({ cardData }) => {
  const { id, userId, title, tag } = cardData;
  return (
    <div className="ticket">
      <div className="top-content">
        <span className="ticket-id">{id}</span>
        <Avatar userId={userId} />
      </div>
      <span className="ticket-title">{title}</span>
      {tag.length ? (
        tag.map((tagVal, idx) => <Badge title={tagVal} key={idx} />)
      ) : (
        <></>
      )}
    </div>
  );
};

export default Card;
