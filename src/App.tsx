import { useState } from 'react';
import './App.css';
import TodoItem from './components/Todoitem';
import TodoInput from './components/Todoinput';
import { Task} from './types';


function App() {
  


  const [todoItems, setTodoItems] = useState<Task[]>([]);
  const [completedItems, setCompletedItems] = useState<Task[]>([]);
  
  
  function completeTodoItem(todoitem:Task):void{
    setTodoItems(todoItems.filter(item => item.id !== todoitem.id))
    const updatedTask:Task = {
      ...todoitem,
      isCompleted:!todoitem.isCompleted
    }
    setCompletedItems([...completedItems,updatedTask])
  }
  
  function addToDoItem(todoitem:Task):void{
    setTodoItems([...todoItems, todoitem])
  }

  function deleteTodo(todoitem:Task):void{
    setTodoItems(todoItems.filter((item) => item.id !== todoitem.id) )
    setCompletedItems(completedItems.filter((item) => item.id !== todoitem.id) )
  }

  function renderTasks(taskArray:Task[]):JSX.Element[]{
   return taskArray.map((item) =>
   <TodoItem 
      key={item.id} 
      task= {item} 
      onDelete={deleteTodo} 
      onComplete={completeTodoItem} 
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
