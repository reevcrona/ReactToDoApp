import './Todoitem.css'
import MaterialIcon from 'material-icons-react';

interface TaskProps{
    key:string,
    title:string,
    onDelete: (todoItem:string) => void;
    onComplete: (todoItem:string) => void;
    isCompleted?: boolean
}


export default function TodoItem({title,onDelete,onComplete,isCompleted}: TaskProps){
    function onClickDelete():void{
        onDelete(title);
    }
    function onCompleteClick():void{
        onComplete(title);
    }
    return(
        <div className='todo-item'>
            <div className="todo-title">{title}</div>

            <div className="icons-group">
                {!isCompleted && <div className="todo-complete" onClick={()=>onCompleteClick()}>
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