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
      className={`max-w-taskMaxWidth flex w-full items-center justify-between ${taskBgColor} rounded-lg p-4 text-white`}
    >
      <div className="text-zinc-950">{task.title}</div>

      <div className="flex items-center justify-center">
        {!task.isCompleted && (
          <div
            className="mr-1.5 flex border-2 border-black p-0.5 hover:scale-110 hover:cursor-pointer"
            onClick={() => clickHandlers.onComplete(task)}
          >
            <MaterialIcon icon="task_alt" color="green" />
          </div>
        )}
        <div
          className="flex border-2 border-black p-0.5 hover:scale-110 hover:cursor-pointer"
          onClick={() => clickHandlers.onDelete(task)}
        >
          <MaterialIcon icon="delete" color="black" />
        </div>
      </div>
    </div>
  );
}
