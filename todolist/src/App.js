import React, { useState } from "react";
import "./App.css";
import Input from  "./components/Input";
// import List from "../List";
import listArray from "./listData"
function App() {
  
  const newList =[]
  const [text, setText] = useState()
  
  // needs a handleChange function ✔️
  function handleChange (userInput) {
    setText(userInput);
  }

  function addToList(listArray, text){
    return newList = [...listArray, text];
}

// needs a delete function.


  return (
    <div className="App">
        <h1>To-Do List</h1>
      <Input text={text} handleChange={handleChange} addToList={addToList} />
    </div>
  );
}

export default App;
