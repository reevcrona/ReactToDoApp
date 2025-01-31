import { useState } from "react";
import "./App.css";
import TodoItem from "./components/Todoitem";
import TodoInput from "./components/Todoinput";
import { Task } from "./types";

function App() {
  const [todoItems, setTodoItems] = useState<Task[]>([]);
  const [completedItems, setCompletedItems] = useState<Task[]>([]);

  function completeTodoItem(todoItem: Task): void {
    setTodoItems((prevState) =>
      prevState.filter((item) => item.id !== todoItem.id),
    );

    const updatedTask: Task = {
      ...todoItem,
      isCompleted: !todoItem.isCompleted,
    };
    setCompletedItems((prevState) => [...prevState, updatedTask]);
  }

  function addToDoItem(todoItem: Task): void {
    setTodoItems((prevState) => [...prevState, todoItem]);
  }

  function deleteTodo(todoItem: Task): void {
    const listToUpdate = todoItem.isCompleted
      ? setCompletedItems
      : setTodoItems;

    listToUpdate((prevState) =>
      prevState.filter((item) => item.id !== todoItem.id),
    );
  }

  function renderTasks(taskArray: Task[]): React.JSX.Element[] {
    return taskArray.map((item) => {
      const isTaskCompleted = item.isCompleted;

      return (
        <TodoItem
          key={item.id}
          task={item}
          clickHandlers={{
            onDelete: deleteTodo,
            onComplete: completeTodoItem,
          }}
          taskBgColor={isTaskCompleted ? "bg-green-500" : "bg-slate-100"}
          taskTextColor={isTaskCompleted ? "text-slate-100" : "text-zinc-950"}
        />
      );
    });
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-sky-700 font-mono">
      <h1 className="mb-10 mt-10 text-5xl text-slate-50">ToDo List</h1>
      <div className="max-w-taskMaxWidth w-full">
        <TodoInput onAddItem={addToDoItem} />
      </div>

      <div className="max-w-taskContainerMaxWidth flex w-full flex-col items-center justify-center gap-4 border-b-2 px-3 pb-4">
        <h2 className="mt-4 text-2xl text-slate-50">Todo Items</h2>
        {renderTasks(todoItems)}
      </div>
      <div className="max-w-taskContainerMaxWidth mb-5 mt-4 flex w-full flex-col items-center justify-stretch gap-4 border-b-2 px-3 pb-4">
        <h2 className="mt-4 text-2xl text-slate-50">Completed Items</h2>
        {renderTasks(completedItems)}
      </div>
    </div>
  );
}

export default App;
