import React, { useContext } from "react";
import { Ticket } from "../../types/Ticket";
import Badge from "../Badge/Badge";
import "./Card.scss";
import Avatar from "../Avatar/Avatar";
import { AppStateContext } from "../../context/AppContext";
import { GROUP_BY } from "../../utils/constants";

interface CardProps {
  cardData: Ticket;
}

const Card: React.FC<CardProps> = ({ cardData }) => {
  const { id, userId, title, tag } = cardData;
  const { groupBy } = useContext(AppStateContext);
  return (
    <div className="ticket">
      <div className="top-content">
        <span className="ticket-id">{id}</span>
        {groupBy !== GROUP_BY.USER ? <Avatar userId={userId} /> : <></>}
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
