import React from 'react';
import {IconDelete} from "../SVG/Icons";

function TodoItem(props){
  return(
    <div className='TodoItem_item'>
      <span>{props.todo.text}</span>
      <button onClick={props.handleDelete}>
        <IconDelete height='24px' width='24px'/>
      </button>
    </div>
  )
}

export default TodoItem
