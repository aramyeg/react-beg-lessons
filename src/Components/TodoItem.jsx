import React, {useState, useRef, useEffect} from 'react';
import {IconDelete} from "../SVG/Icons";

function TodoItem(props){

  const textInput = useRef(null);
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState(props.todo.text);

  console.log(textInput);

  const checkEditMode = (ev) => {
    console.log('edit is on');
    // console.log(ev)
    if(textInput.current && !textInput.current.contains(ev.target)){
      // props.handleEdit(text)
      setEditMode(false);
    }
  }

  useEffect(()=>{
    editMode && document.addEventListener('click', checkEditMode, true);

    return ()=>{
      document.removeEventListener('click', checkEditMode, true);
    }
  },[editMode])

  return(
    <>
      {
        editMode ?
          <input className='TodoItem_item--input' ref={textInput} value={text} onChange={(ev)=>{setText(ev.target.value)}}/>
          :
          <div onClick={()=>{setEditMode(true)}} className='TodoItem_item'>
            <span>{text}</span>
            <button className='TodoItem_item--icon' onClick={props.handleDelete}>
              <IconDelete height='24px' width='24px'/>
            </button>
          </div>
      }
    </>
  )
}

export default TodoItem
