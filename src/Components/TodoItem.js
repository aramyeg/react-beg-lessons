import React, {useState, useRef, useEffect} from 'react';
import {IconDelete} from "../SVG/Icons";

function TodoItem(props){

  const textInput = useRef(null);
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState(props.todo.text);

  console.log(textInput);

  const checkEditMode = (ev) => {
    // console.log(ev)
    if(textInput.current && !textInput.current.contains(ev.target)){
      // props.handleEdit(text)
      setEditMode(false);
    }
  }

  useEffect(()=>{
    document.addEventListener('click', checkEditMode, true);

    return ()=>{
      document.removeEventListener('click', checkEditMode, true);
    }
  },[])

  return(
    <div onClick={()=>{setEditMode(true)}} className='TodoItem_item'>
      {
        editMode ?
          <input ref={textInput} value={text} onChange={(ev)=>{setText(ev.target.value)}}/>
          :
          <>
            <span>{text}</span>
            <button className='TodoItem_item--icon' onClick={props.handleDelete}>
              <IconDelete height='24px' width='24px'/>
            </button>
          </>
      }
    </div>
  )
}

export default TodoItem
