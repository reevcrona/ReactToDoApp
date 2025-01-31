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
      className="relative flex h-12 w-full items-center justify-center rounded border-2 border-black"
      onSubmit={addToDoItem}
    >
      <label htmlFor="task-input"></label>
      <input
        id="task-input"
        required
        minLength={1}
        className="h-full w-full rounded px-3 text-center focus:text-start focus:placeholder-transparent focus:outline-none"
        type="text"
        placeholder="Enter your todo here"
        onChange={(e) => onInputChange(e)}
        value={currentInputValue}
      />
      <button
        className="top-10px absolute right-3 flex rounded bg-sky-700 p-1 hover:scale-110"
        type="submit"
      >
        <MaterialIcon icon="add" color="white" />
      </button>
    </form>
  );
}
