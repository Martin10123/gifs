import React from "react";
import search from "../../../images/searchDark.svg";

import "./autoComplete.css";

const AutoCompleteCard = ({ nameComplete, sent }) => {
  return (
    <>
      <div className="li_inside_div" onClick={sent}>
        <img className="loupe" src={search} alt="" />
        <li>{nameComplete.name}</li>
      </div>
    </>
  );
};

export default AutoCompleteCard;
