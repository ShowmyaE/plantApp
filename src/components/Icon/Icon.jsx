import React from "react";
import './Icon.css'

const Icon = ({ type }) => {
  return (
    <div className={`icon ${type}`}>
      <img src={`/${type}-icon.svg`} alt={type} />
    </div>
  );
};

export default Icon;