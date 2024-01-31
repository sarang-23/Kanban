import React from "react";
import { IoIosMore, IoMdAdd } from "react-icons/io";
import "./ColumnHeader.scss";
import useColumnDetails from "../../hooks/useColumnDetails";

interface ColumnHeaderProps {
  name: string;
  ticketCount: number;
}

const ColumnHeader: React.FC<ColumnHeaderProps> = ({ name, ticketCount }) => {
  const { title, icon } = useColumnDetails(name);
  return (
    <div className="column-header">
      <div className="left">
        {icon}
        <span className="column-name">{title}</span>
        <span className="ticket-count">{ticketCount}</span>
      </div>
      <div className="right">
        <IoIosMore style={{ marginRight: 10, cursor: "pointer" }} />
        <IoMdAdd style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default ColumnHeader;
