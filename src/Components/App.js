import React, {Component} from 'react';
import '../Styles/main.css'
import TodoList from './TodoList';
import AddTodo from './AddTodo';

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      todoList : [],
    }
  }

  todoId = 1;

  handleSubmit = (text) => {
    this.setState({
      todoList : [{
        text: text,
        todoId: this.todoId,
        }
        , ...this.state.todoList],
    })
    this.todoId++
  }

  handleDelete = (id) => {
    const shallowList = this.state.todoList.filter((todo)=>{
      return (todo.todoId !== id);
    })
    this.setState({
      todoList : [...shallowList]
    })
    console.log("delete item with :", id)
  }

  render() {

    // console.log('App Render')

    return (
      <main className='App_wrapper'>
        <header className='App_header'>
          <h1>Todo List</h1>
        </header>

        <AddTodo  handleSubmit={this.handleSubmit}/>

        <TodoList handleDelete={this.handleDelete} todoList={ this.state.todoList}/>

      </main>
    );
  }
}

export default App;
