import "./Todoitem.css";
import MaterialIcon from "material-icons-react";
import { TaskProps } from "../types";

export default function TodoItem({
  task,
  clickHandlers,
  taskBgColor,
  taskTextColor,
}: TaskProps) {
  return (
    <div
      className={`max-w-taskMaxWidth border-3 flex w-full items-center justify-between border-2 border-black ${taskBgColor} rounded-lg p-4 text-white`}
    >
      <h3 className={`${taskTextColor} text-xl font-medium`}>{task.title}</h3>

      <div className="flex items-center justify-center">
        {!task.isCompleted && (
          <div
            className="mr-1.5 flex border-2 border-black p-0.5 hover:scale-110 hover:cursor-pointer"
            onClick={() => clickHandlers.onComplete(task)}
          >
            <MaterialIcon icon="task_alt" color="green" size={30} />
          </div>
        )}
        <div
          className={`flex border-2 ${task.isCompleted ? "border-white" : "border-black"} p-0.5 hover:scale-110 hover:cursor-pointer`}
          onClick={() => clickHandlers.onDelete(task)}
        >
          <MaterialIcon
            icon="delete"
            color={task.isCompleted ? "white" : "black"}
            size={30}
          />
        </div>
      </div>
    </div>
  );
}
