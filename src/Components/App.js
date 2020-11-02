import React, {Component} from 'react';
import axios from 'axios';
import '../Styles/main.css';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
const MAIN_URL = 'https://jsonplaceholder.typicode.com';

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      todoList : [],
      toggle : false,
      disableForm : true,
    }
  }

  componentDidMount() {
    axios.get(MAIN_URL+'/todos?_start=0&_limit=5')
      .then((response)=>{
        const elements = response.data;
        const fetchedTodoList = [];

        elements.forEach((todo)=>{
          fetchedTodoList.push({
            text: todo.title,
            todoId: todo.id,
          })
          this.todoId++
        })

        setTimeout(()=>{
          this.setState({todoList: fetchedTodoList});
        }, 5000)

      });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevState.disableForm && this.state.disableForm){
      this.setState({disableForm: false})
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
    });
    this.todoId++;
  }

  handleDelete = (id) => {
    const shallowList = this.state.todoList.filter((todo)=>{
      return (todo.todoId !== id);
    });
    this.setState({
      todoList : [...shallowList]
    });
    // console.log("delete item with :", id);
  };

  render() {

    // console.log('App Render')

    return (
      <main className='App_wrapper'>
        <header className='App_header'>
          <h1>Todo List</h1>
          {/*<button onClick={()=>{*/}
          {/*  this.setState({*/}
          {/*    toggle : !this.state.toggle*/}
          {/*  })*/}
          {/*}}>Toggle</button>*/}
        </header>

        <AddTodo toggle={this.state.toggle} disableForm={this.state.disableForm} handleSubmit={this.handleSubmit}/>

        <TodoList handleDelete={this.handleDelete} todoList={ this.state.todoList}/>
      </main>
    );
  }
}

export default App;
