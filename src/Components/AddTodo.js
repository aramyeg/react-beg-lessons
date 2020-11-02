import React, {useEffect, useState} from 'react';

function AddTodo(props){

  const [text, setText] = useState('');

  const handleChange = (ev) => {
    setText(ev.target.value);

  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if(text.trim()){
      props.handleSubmit(text);
      setText('');
    }
  }

  return(
    <form className='AddTodo_form' onSubmit={handleSubmit}>
      <input name='text'
             placeholder='Enter Todo'
             onChange={handleChange}
             value={text}
      />
      <button onClick={handleSubmit}>Add</button>
    </form>
  )
}

export default AddTodo;
