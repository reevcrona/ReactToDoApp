import "./Todoitem.css";
import MaterialIcon from "material-icons-react";
import { TaskProps } from "../types";

export default function TodoItem({
  task,
  clickHandlers,
  taskBgColor,
}: TaskProps) {
  return (
    <div
      className={`min-w-taskminwidth flex items-center justify-between ${taskBgColor} rounded-lg p-4 text-white`}
    >
      <div className="text-zinc-950">{task.title}</div>

      <div className="flex items-center justify-center">
        {!task.isCompleted && (
          <div
            className="hover:cursor-pointer"
            onClick={() => clickHandlers.onComplete(task)}
          >
            <MaterialIcon icon="task_alt" color="black" />
          </div>
        )}
        <div
          className="hover:cursor-pointer"
          onClick={() => clickHandlers.onDelete(task)}
        >
          <MaterialIcon icon="delete" color="black" />
        </div>
      </div>
    </div>
  );
}
