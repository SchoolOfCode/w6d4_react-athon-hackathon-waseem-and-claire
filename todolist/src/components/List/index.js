/* Plan.
Only job of list is to put all list array items into a ul.

import react✔️
    import css later
export Input component✔️

definte function List.✔️
    takes in listArray .✔️

    returns
        each item from new list in a ul.✔️
            array.map.✔️
            return ul with the text in.✔️
*/

import React from "react";
import ListItem from "../ListItem";

function List({ list, deleteListItem }) {
  return (
    <ul>
      {list.map((item, index) => {
        return (
          <ListItem 
            index={index}
            text={item}
            deleteListItem={deleteListItem}/>);  
      })}
    </ul>
  );
}

export default List;
