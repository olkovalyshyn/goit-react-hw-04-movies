import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Find() {
  const [inputValue, setInputValue] = useState();

  const handleInputChange = (e) => {
    setInputValue(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      return alert("Please, input request for search.");
    }
    setInputValue("");

    // onSearch(inputValue);
  };

  console.log("!!!inputValue", inputValue);

  return (
    <>
      <p> !!! FIND FILMS 222</p>

      <form>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        ></input>
        <button type="button">Search</button>
      </form>
    </>
  );
}
