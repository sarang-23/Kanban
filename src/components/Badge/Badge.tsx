import React from "react";
import "./Badge.scss";

type BadgeProps = {
  title: string;
};

const Badge: React.FC<BadgeProps> = ({ title }) => {
  return (
    <div className="tag">
      <div className="dot"></div>
      {title}
    </div>
  );
};

export default Badge;
