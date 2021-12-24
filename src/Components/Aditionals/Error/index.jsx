import React from "react";
import alert from "../../../images/alerta.svg";

import "./error.css";

const ErrorAlert = () => {
  return (
    <div className="box_alert_danger">
      <div className="alert_inside_box">
        <img className="alert__error" src={alert} alt="alert" />
        <h2>Lo sentimos, no pudimos encontrar su busqueda</h2>
      </div>
    </div>
  );
};

export default ErrorAlert;
