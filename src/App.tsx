import { useState } from 'react';
import './App.css';
import TodoItem from './components/Todoitem';
import TodoInput from './components/Todoinput';
import { Task , CompletedTask } from './types';


function App() {
  


  const [todoItems, setTodoItems] = useState<Task[]>([]);
  const [completedItems, setCompletedItems] = useState<CompletedTask[]>([]);
  
  
  function completeTodoItem(todoitem:Task):void{
    setTodoItems(todoItems.filter(e => e !== todoitem))
    setCompletedItems([...completedItems,todoitem])
  }
  
  function addToDoItem(todoitem:Task):void{
    setTodoItems([...todoItems, todoitem])
  }

  function deleteTodo(todoitem:Task):void{
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
        {todoItems.map((todo) => <TodoItem key={todo.id} task= {todo} onDelete={deleteTodo} onComplete={completeTodoItem}/>)}
      </div>
      <div className='list-block'>
        <h2 className='title'>Completed Items</h2>
        {completedItems.map((todo) => <TodoItem key={todo} title={todo} onDelete={deleteTodo}  onComplete={completeTodoItem} isCompleted ={true} />)}

        <hr/>
      </div>
    </div>
  );
}

export default App
