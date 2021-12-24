import React, { useEffect, useState } from "react";
import friends from "../../../images/header.svg";
import search from "../../../images/searchDark.svg";
import AutoCompleteCard from "../../Aditionals/AutoComplete";
import "./filters.css";

const Filters = ({ handleChange, handleClick, inputValue }) => {
  const [disableButton, setDisableButton] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const [autoComplete, setAutoComplete] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search/tags?q=${inputValue}&limit=5&api_key=MNMtkdCKzAHbx64MticDFColNQcJKuuK`
    )
      .then((resp) => resp.json())
      .then((respData) => setAutoComplete(respData.data));
  }, [inputValue]);

  useEffect(() => {
    if (inputValue.length < 1) {
      setDisableButton(true);
      setIsOn(false);
    } else {
      setDisableButton(false);
      setIsOn(true);
    }
  }, [inputValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="filtros_box">
        <h1>¡Inspirate y busca los mejores GIFS!</h1>
        <img src={friends} alt="" />
        <form onSubmit={handleSubmit} className="box__search">
          <input
            placeholder="Busca gifs"
            type="text"
            value={inputValue}
            onChange={handleChange}
          />
          <button
            disabled={disableButton}
            onClick={handleClick}
            className="btn_filtros"
          >
            <img src={search} alt="search" />
          </button>
        </form>
        {isOn && (
          <div className="box_main_Autocomplete">
            <div className="div_autoComplete">
              <div className="all_box">
                {autoComplete.map((algo) => {
                  return (
                    <AutoCompleteCard
                      key={algo.analytics_response_payload}
                      nameComplete={algo}
                      sent={handleClick}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Filters;
