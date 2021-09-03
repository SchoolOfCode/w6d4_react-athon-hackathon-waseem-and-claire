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

function ListItem({ text, deleteListItem, key }) {
  return (
    <>
      <li key={key}>{text}</li>
      <button
        key={key}
        onClick={() => {
          deleteListItem();
        }}
      >
        Delete from list
      </button>
    </>
  );
}

export default ListItem;
