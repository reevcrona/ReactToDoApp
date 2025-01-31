import "./Todoitem.css";
import MaterialIcon from "material-icons-react";
import { TaskProps } from "../types";

export default function TodoItem({ task, clickHandlers }: TaskProps) {
  return (
    <div className="flex items-center justify-center rounded-lg bg-red-500 p-4 text-white">
      <div className="todo-title">{task.title}</div>

      <div className="icons-group">
        {!task.isCompleted && (
          <div
            className="todo-complete"
            onClick={() => clickHandlers.onComplete(task)}
          >
            <MaterialIcon icon="task_alt" color="white" />
          </div>
        )}
        <div
          className="todo-delete"
          onClick={() => clickHandlers.onDelete(task)}
        >
          <MaterialIcon icon="delete" color="white" />
        </div>
      </div>
    </div>
  );
}
