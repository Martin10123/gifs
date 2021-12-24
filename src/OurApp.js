import React, { useState } from "react";
import Header from "./Components/ViewPage/Header";
import Filters from "./Components/ViewPage/Filters";
import Loading from "./Components/Aditionals/Loading";
import ViewCard from "./Components/ViewCards";

import "./App.css";

export const OurApp = () => {
  const [isDark, setIsDark] = useState(false);
  const [changeTitle, setChangeTitle] = useState(false);
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [categorys, setCategorys] = useState([]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setIsFirstLoading(true);

    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=FYpnX0NSwCE01f8uqdE0XpsAfjsjq6Vi&q=${inputValue}&limit=15&offset=0&rating=g&lang=en`
    )
      .then((resp) => resp.json())
      .then((respData) => {
        setCategorys(respData.data);
        setIsFirstLoading(false);
      });
    setChangeTitle(true);
    setInputValue("");
  };

  const Results = () => {
    return (
      <>
        <div className="tittle_change">
          {changeTitle ? (
            <h2>Resultados de la búsqueda</h2>
          ) : (
            <h2>Realiza tu busqueda</h2>
          )}
        </div>
        <>
          {isFirstLoading && changeTitle ? (
            <Loading />
          ) : (
            <ViewCard
              categorys={categorys}
              changeTitle={changeTitle}
              isFirstLoading={isFirstLoading}
            />
          )}
        </>
      </>
    );
  };

  return (
    <div className={`App ${isDark ? "dark" : ""}`}>
      <div className="container__all">
        <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />
        <Filters
          inputValue={inputValue}
          handleChange={handleChange}
          handleClick={handleClick}
        />
        <Results />
      </div>
    </div>
  );
};
