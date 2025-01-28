import { useState } from 'react';
import './Todoinput.css';
import MaterialIcon from 'material-icons-react';
import { todoInputProps} from '../types';
import { nanoid } from 'nanoid';



export default function TodoInput({onAddItem}:todoInputProps){
    const [currentInputValue,setcurrentInputValue] = useState<string>('');
   
    function addToDoItem():void{
        onAddItem({title:currentInputValue,id:nanoid(),isCompleted:false});
        setcurrentInputValue('');
        
    }
    function onInputChange(event:React.ChangeEvent<HTMLInputElement>):void{
        setcurrentInputValue(event.target.value)
    }
    return(
        <>
        <div className="todo-input-div">
            <input className='todo-input' type='text' placeholder='Enter your todo here' onChange={(e) => onInputChange(e)} value={currentInputValue} />
            <button className='todo-input-add' onClick={addToDoItem}>
                < MaterialIcon icon='add' />
            </button>
        </div>
        </>
    )
}