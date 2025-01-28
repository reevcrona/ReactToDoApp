import './Todoitem.css'
import MaterialIcon from 'material-icons-react';
import { Task } from '../types';
interface TaskProps{
    key:string,
    task:Task
    onDelete: (todoItem:Task) => void;
    onComplete: (todoItem:Task) => void;
    isCompleted: boolean
}


export default function TodoItem({task,onDelete,onComplete,isCompleted}: TaskProps){
    
    return(
        <div className='todo-item'>
            <div className="todo-title">{task.title}</div>

            <div className="icons-group">
                {!isCompleted && <div className="todo-complete" onClick={() => onComplete(task)}>
                    <MaterialIcon icon='task_alt' color='white'/>
                </div>
                }
                <div className="todo-delete" onClick={() => onDelete(task)}>
                    <MaterialIcon icon='delete' color='white'/>
                </div>
            </div>
          
        </div>

    )
}