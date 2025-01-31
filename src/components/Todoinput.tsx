import { useState } from "react";
import "./Todoinput.css";
import MaterialIcon from "material-icons-react";
import { todoInputProps } from "../types";
import { nanoid } from "nanoid";

export default function TodoInput({ onAddItem }: todoInputProps) {
  const [currentInputValue, setcurrentInputValue] = useState<string>("");

  function addToDoItem(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    onAddItem({ title: currentInputValue, id: nanoid(), isCompleted: false });
    setcurrentInputValue("");
  }

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setcurrentInputValue(e.target.value);
  }

  return (
    <form
      className="flex w-full items-center justify-center"
      onSubmit={addToDoItem}
    >
      <label htmlFor="task-input"></label>
      <input
        id="task-input"
        required
        minLength={1}
        className="h-9 w-1/2 rounded p-3 focus:outline-none"
        type="text"
        placeholder="Enter your todo here"
        onChange={(e) => onInputChange(e)}
        value={currentInputValue}
      />
      <button className="todo-input-add" type="submit">
        <MaterialIcon icon="add" />
      </button>
    </form>
  );
}
