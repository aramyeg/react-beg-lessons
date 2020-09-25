import React, {memo} from 'react';
import TodoItem from './TodoItem'

function TodoList(props){

  console.log('TodoList Render: ', props.todoList);

  const todoList = props.todoList.map((todo)=>{
    return(
      <TodoItem key={todo.todoId}
                handleDelete={() => {props.handleDelete(todo.todoId)}}
                todo={todo}/>
      )
  });

  return(
    <section className='TodoList_section'>
      {todoList}
    </section>
  )
}

export default memo(TodoList);