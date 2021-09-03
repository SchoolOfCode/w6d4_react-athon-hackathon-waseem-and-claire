/* Plan.
    import css later
export Input component ✔️
 function ListItem.✔️
    takes in text and delete function ✔️

    returns
        list text as a child ✔️
        delete button✔️
            onClick = delete function ✔️
*/

import React from "react";

function ListItem({ text, deleteListItem, index }) {
  return (
    <>
      <li class= "theList" key = {index}>{text}</li>
      <button class = "deleteButton" key = {index}
        onClick={()=> {
          deleteListItem(index)}}
      >
        Delete from list
      </button>
    </>
  );
}

export default ListItem;
