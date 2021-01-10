import { useState, useEffect } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";

export default function FindBar({ getSearchQuery }) {
  const history = useHistory();
  const location = useLocation();
  const [inputValue, setInputValue] = useState("");

  const hundleUrlInputValue = (query) => {
    history.push({ ...location, search: `query=${query}` });
  };

  const handleInputChange = (e) => {
    setInputValue(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      return alert("Please, input request for search.");
    }
    setInputValue("");

    hundleUrlInputValue(inputValue);

    getSearchQuery(inputValue);
  };

  const queryOrder = new URLSearchParams(location.search).get("query") ?? "";

  // console.log(
  //   "Якщо тут пусто, то в УРЛ нічого не піде (inputValue)",
  //   inputValue
  // );
  // console.log("history", history);
  // console.log("location", location);
  // console.log("queryOrder", queryOrder);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        ></input>
        <button type="submit">Search</button>
      </form>
    </>
  );
}
