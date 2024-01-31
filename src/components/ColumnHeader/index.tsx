import React from "react";

interface ColumnHeaderProps {
  name: string;
  ticketCount: number;
}

const ColumnHeader: React.FC<ColumnHeaderProps> = ({ name, ticketCount }) => {
  const getIcon = (name: string) => {
    return <div>I</div>;
  };
  return (
    <div className="column-header">
      <span className="column-icon">{getIcon(name)}</span>
      <span className="column-name">{name}</span>
      <span className="ticket-count">{ticketCount}</span>
    </div>
  );
};

export default ColumnHeader;
