import React, { useState } from "react";
import "./App.css";
import Input from  "./components/Input";
import ListItem from "./components/ListItem"
// import List from "../List";


function App() {
  
  const newList =[]
  const [list,setList] = useState ([])
  const [text, setText] = useState()
  
  // needs a handleChange function ✔️
  function handleChange (userInput) {
    setText(userInput);
  }

  function addToList(text){
    setList([...list, text]);
}

// needs a delete function.
function deleteListItem (index){
setList ([...list.slice(0,index), ...list.slice(index + 1)])
}

  return (
    <div className="App">
        <h1>To-Do List</h1>
      <Input text={text} handleChange={handleChange} addToList={addToList} />
      <ListItem text = {text} deleteListItem={deleteListItem} />
    </div>
  );
}

export default App;
