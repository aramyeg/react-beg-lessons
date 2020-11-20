import React, {useState, useEffect} from 'react';
import '../styles/main.css'
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import {useDataFetching} from "../hooks/useDataFetching"
import axios from 'axios';
const BASE_URL = 'https://jsonplaceholder.typicode.com';

function formatter(data) {

  const todoListArr = data.map((todo)=>{
    return {
      text: todo.title,
      todoId: todo.id,
    }
  });

  return todoListArr;
}

function App(){

  const [todoList, setTodoList] = useState([]);
  const {data, loading} = useDataFetching(BASE_URL+'/todos?_limit=5', [], formatter);

  const handleSubmit = (text) => {
    const shallowCopy = [...todoList, {
      text: text,
      todoId: todoList.length + 1,
    }];
    setTodoList(shallowCopy);

  }

  const handleDelete = (id) => {

    const shallowList = todoList.filter((todo)=>{
      return (todo.todoId !== id);
    });

    setTodoList(shallowList);
  }

  if(loading) return(<h1>LOADING</h1>)

  return (
    <main className='App_wrapper'>
      <header className='App_header'>
        <h1>Todo List</h1>
      </header>

      <AddTodo  handleSubmit={handleSubmit}/>

      <TodoList handleDelete={handleDelete} todoList={ data }/>

    </main>
  );

}

export default App;
