import './Todoitem.css'
import MaterialIcon from 'material-icons-react';

interface TaskProps{
    key:string,
    title:string,
    onDelete: (todoItem:string) => void;
    onComplete: (todoItem:string) => void;
    isCompleted?: (todoItem:string) => void;
}


export default function TodoItem({title,onDelete,onComplete,isCompleted}: TaskProps){
    function onClickDelete(target){
        onDelete(title);
    }
    function onCompleteClick(target){
        onComplete(title);
    }
    return(
        <div className='todo-item'>
            <div className="todo-title">{title}</div>

            <div className="icons-group">
                {!isCompleted && <div className="todo-complete" onClick={()=>onCompleteClick(title)}>
                    <MaterialIcon icon='task_alt' color='white'/>
                </div>
                }
                <div className="todo-delete" onClick={onClickDelete}>
                    <MaterialIcon icon='delete' color='white'/>
                </div>
            </div>
          
        </div>

    )
}