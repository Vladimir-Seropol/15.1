import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {

  return (
	<div className='main'>
	 <div className='container'>
      <h1>Список задач</h1>
		<AddTodo />
		<TodoList />
    </div>
	</div>
   
  )
}

export default App;

