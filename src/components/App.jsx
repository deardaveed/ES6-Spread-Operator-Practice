import React, { useState } from "react";
import ListItem from "./ListItem";

function App() {
  const [inputText, setInputItem] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const value = event.target.value;

    setInputItem(value);
  }

  function handleClick(event) {
    setItems((prevState) => {
      return [...prevState, inputText];
    });

    setInputItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => {
            return (
              <ListItem items={item} key={Math.floor(Math.random() * 10000)} />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
