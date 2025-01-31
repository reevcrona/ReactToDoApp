export interface Task {
  title: string;
  id: string;
  isCompleted: boolean;
}

export interface TaskProps {
  key: string;
  task: Task;
  clickHandlers: {
    onDelete: (todoItem: Task) => void;
    onComplete: (todoItem: Task) => void;
  };
  taskBgColor: "bg-slate-100" | "bg-green-500";
  taskTextColor: "text-zinc-950" | "text-slate-100";
}

export interface todoInputProps {
  onAddItem: (todoItem: Task) => void;
}
