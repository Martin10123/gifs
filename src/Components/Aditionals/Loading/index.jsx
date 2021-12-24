import React from "react";
import gifLoading from "../../../images/loading.gif";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <h2>Loading...</h2>
      <img src={gifLoading} alt="" />
    </div>
  );
};

export default Loading;
