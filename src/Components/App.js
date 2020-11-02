import React, {useState, useEffect} from 'react';
import '../Styles/main.css'
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import axios from 'axios';
const BASE_URL = 'https://jsonplaceholder.typicode.com';

function App(){

  const [todoList, setTodoList] = useState([]);

  useEffect(()=>{

    axios.get(BASE_URL+'/todos?_limit=5')
      .then(function (response) {
        const todoListArr = response.data.map((todo)=>{
          return {
            text: todo.title,
            todoId: todo.id,
          }
        });
        setTodoList(todoListArr);
    })
      .catch(function (error) {
        console.log(error);
      })

  }, []);

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

  return (
    <main className='App_wrapper'>
      <header className='App_header'>
        <h1>Todo List</h1>
      </header>

      <AddTodo  handleSubmit={handleSubmit}/>

      <TodoList handleDelete={handleDelete} todoList={ todoList}/>

    </main>
  );

}

export default App;
