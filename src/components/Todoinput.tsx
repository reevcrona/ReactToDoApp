import { useState } from 'react';
import './Todoinput.css';
import MaterialIcon from 'material-icons-react';

interface todoInputProps{
    onAddItem:(todoItem:string) => void
}

export default function TodoInput({onAddItem}:todoInputProps){
    const [currentInputValue,setcurrentInputValue] = useState('');
    function addToDoItem(){
        onAddItem(currentInputValue);
        setcurrentInputValue('');
        
    }
    function onInputChange(event:React.ChangeEvent<HTMLInputElement>){
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