import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import List from "./components/List";
// import List from "../List";

function App() {
  const startArray = [];
  const [list, setList] = useState([startArray]);
  const [text, setText] = useState();

  // needs a handleChange function ✔️
  function handleChange(userInput) {
    setText(userInput);
  }

  function addToList(text) {
    console.log("added to list");
    setList([...list, { text: text, id: list.length }]);
    console.log(list);
  }

  // needs a delete function. ✔️
  function deleteListItem(index) {
    console.log("deleted from list");
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <Input text={text} handleChange={handleChange} addToList={addToList} />
      <List list={list} deleteListItem={deleteListItem} />
    </div>
  );
}

export default App;
