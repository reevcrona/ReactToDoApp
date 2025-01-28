

export interface Task {
    title:string,
    id:string,
    isCompleted:boolean
  }  
 
 export interface TaskProps{
    key:string,
    task:Task
    clickHandlers:{
        onDelete:(todoItem:Task) => void;
        onComplete:(todoItem:Task) => void;
    }
}

export interface todoInputProps{
    onAddItem:(todoItem:Task) => void
}