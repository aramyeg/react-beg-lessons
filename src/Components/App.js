import React, {useState} from 'react';
import '../Styles/main.css'
import TodoList from './TodoList';
import AddTodo from './AddTodo';
let todoId = 1;

function App(){
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = (text) => {
    const shallowCopy = [...todoList, {
      text: text,
      todoId: todoId,
    }];
    setTodoList(shallowCopy);

    todoId++
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
