import { useState } from 'react';
import './App.css';
import TodoItem from './components/Todoitem.tsx';
import TodoInput from './components/Todoinput.tsx';
function App() {
  const [todoItems, setTodoItems] = useState(['Task1', 'Task2', 'Task3']);
  const [completedItems, setCompletedItems] = useState([]);
  
  
  function completeTodoItem(todoitem){
    setTodoItems(todoItems.filter(e=>e!==todoitem))
    setCompletedItems([...completedItems,todoitem])
  }
  
  function addToDoItem(todoitem){
    setTodoItems([...todoItems, todoitem])
  }

  function deleteTodo(todoitem){
    setTodoItems(todoItems.filter((e) => e !== todoitem) )
    setCompletedItems(completedItems.filter((e) => e !== todoitem) )
  }
  return (
    <div className="app">
      <h1 className='title'>ToDo List</h1>
      <div><TodoInput onAddItem={addToDoItem}/></div>
      <div  className='list-block'>
        <h2 className='title'>Todo Items</h2> 
        <hr/>
        {todoItems.map((todo) => <TodoItem key={todo} title={todo} onDelete={deleteTodo} onComplete={completeTodoItem}/>)}
      </div>
      <div className='list-block'>
        <h2 className='title'>Completed Items</h2>
        {completedItems.map((todo) => <TodoItem key={todo} title={todo} onDelete={deleteTodo} isCompleted />)}

        <hr/>
      </div>
    </div>
  );
}

export default App
