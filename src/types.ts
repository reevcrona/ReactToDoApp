

export interface Task {
    title:string,
    id:string,
    isCompleted:boolean
  }  
 export interface CompletedTask  {
    title:string,
    id:string,
    isCompleted:boolean
  }

 export interface TaskProps{
    key:string,
    task:Task
    onDelete: (todoItem:Task) => void;
    onComplete: (todoItem:Task) => void;
}