import { useState } from 'react';
import './Todoinput.css';
import MaterialIcon from 'material-icons-react';
import {todoInputProps} from '../types';
import { nanoid } from 'nanoid';



export default function TodoInput({onAddItem}:todoInputProps){
    
    const [currentInputValue,setcurrentInputValue] = useState<string>('');
   
    function addToDoItem(e:React.FormEvent<HTMLFormElement>):void{
        e.preventDefault();
        onAddItem({title:currentInputValue,id:nanoid(),isCompleted:false,});
        setcurrentInputValue('');
    }

    function onInputChange(event:React.ChangeEvent<HTMLInputElement>):void{
        setcurrentInputValue(event.target.value)
    }
    
    return(
        <>
            <form className="todo-input-div" onSubmit={addToDoItem}>
                <label htmlFor="task-input"></label>
                <input 
                    id="task-input" 
                    required minLength={1} 
                    className='todo-input' 
                    type='text' 
                    placeholder='Enter your todo here' 
                    onChange={(e) => onInputChange(e)} value={currentInputValue} 
                />
                <button className='todo-input-add' type="submit">
                    < MaterialIcon icon='add' />
                </button>
            </form>
        
        </>
    )
}