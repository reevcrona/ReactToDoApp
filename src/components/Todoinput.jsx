import { useState } from 'react';
import './Todoinput.css';
import MaterialIcon from 'material-icons-react';
export default function TodoInput({onAddItem}){
    var [currentInputValue,setcurrentInputValue] = useState('');
    function addToDoItem(){
        onAddItem(currentInputValue);
        setcurrentInputValue('');
        
    }
    function onInputChange(event){
        setcurrentInputValue(event.target.value)
    }
    return(
        <>
        <div className="todo-input-div">
            <input className='todo-input' type='text' placeholder='Enter your todo here' onChange={onInputChange} value={currentInputValue} />
            <button className='todo-input-add' onClick={addToDoItem}>
                < MaterialIcon icon='add' />
            </button>
        </div>
        </>
    )
}