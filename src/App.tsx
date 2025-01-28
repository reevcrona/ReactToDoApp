import { useState } from 'react';
import './App.css';
import TodoItem from './components/Todoitem';
import TodoInput from './components/Todoinput';
import {Task} from './types';


function App() {
  
  const [todoItems, setTodoItems] = useState<Task[]>([]);
  const [completedItems, setCompletedItems] = useState<Task[]>([]);
  
  
  function completeTodoItem(todoItem:Task):void{
    setTodoItems((prevState) => prevState.filter(item => item.id !== todoItem.id))
    
    const updatedTask:Task = {
      ...todoItem,
      isCompleted:!todoItem.isCompleted
    }
    setCompletedItems((prevState) => [...prevState,updatedTask])
  }
  
  function addToDoItem(todoItem:Task):void{
    setTodoItems((prevState) => [...prevState,todoItem])
  }

  function deleteTodo(todoItem:Task):void{

    const listToUpdate = todoItem.isCompleted ? setCompletedItems : setTodoItems;

    listToUpdate((prevState) => prevState.filter((item) => item.id !== todoItem.id))
     
  }

  function renderTasks(taskArray:Task[]):React.JSX.Element[]{
    return taskArray.map((item) =>
   <TodoItem 
      key={item.id} 
      task= {item} 
      clickHandlers = {
        {
          onDelete:deleteTodo,
          onComplete:completeTodoItem
        }
      }
    /> )
  }


  return (
    <div className="app">
      <h1 className='title'>ToDo List</h1>
      <div><TodoInput onAddItem={addToDoItem}/></div>
      <div  className='list-block'>
        <h2 className='title'>Todo Items</h2> 
        <hr/>
        {renderTasks(todoItems)}
      </div>
      <div className='list-block'>
        <h2 className='title'>Completed Items</h2>
        {renderTasks(completedItems)}

        <hr/>
      </div>
    </div>
  );
}

export default App
