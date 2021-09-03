import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import List from "./components/List";
// import List from "../List";

function App() {
  const startArray = [];
  const [list, setList] = useState([]);
  const [text, setText] = useState();

  // needs a handleChange function ✔️
  function handleChange(userInput) {
    setText(userInput);
  }

  function addToList(text) {
    console.log("added to list");
    setList([...list, text]);
    console.log(list);
  }

  // needs a delete function. ✔️
  function deleteListItem(index) {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);

    console.log("deleted from list");
    console.log(list);
  }

  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <Input text={text} handleChange={handleChange} addToList={addToList} />
      <List list={list} deleteListItem={deleteListItem} />
    </div>
  );
}

export default App;
