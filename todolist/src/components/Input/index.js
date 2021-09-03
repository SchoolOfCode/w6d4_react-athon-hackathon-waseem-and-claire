/* Plan.
import  react ✔️
    import css later
export Input component ✔️

define function Input ✔️
    take in {text, handleChange} ✔️
state of text to be changed to the input text ✔️
   

within Input function, define 'add' function.✔️
    add function should take in {text} from input.✔️
    spread listArray and add to the end.✔️

return
    input tag
        value = text
        onChange with inline function handleChange
            handleChange takes in event.targe.value
            NOTE: handleChange function written in App.
    'add' button
        add to List array
    inside a form tag.

export the list array?!
*/

import React from "react"
import listArray from "../../listData"


function Input({ text, handleChange, addToList }) {
   
    return <form>
        <input value={text} onChange={(e)=>{handleChange(e.target.value)}}/>
        <button onClick={()=>{addToList(listArray, text )}}>Add to list!</button>
    </form>
    
}


export default Input