import React, {useState} from 'react'
import './index.css';
import Checkbox from './CheckBox.jsx';
import InputBox from './InputBox.jsx';
import AddBtn from './AddBtn.jsx';
import DeleteBtn from './DeleteBtn.jsx';
import RotatingStopwatch from './RotatingStopwatch.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

{/* SCOPE:
  A todo list with check boxes and delete buttons. 
  Can add new tasks.
  User can change the order of the tasks using buttons.*/}

function ToDoList(){
    const [tasks, setTasks] = useState([{text:"Make Todo List", checked:false}]);
    const [newTask, setNewTask] = useState("");
    

    function updateTask(event){
        setNewTask(event.target.value);
    };
    function addTask(){
        if(newTask.trim() !== ""){
          setTasks(t => [...t, {text: newTask, checked:false}]);
          setNewTask("");
        }
    };
    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i) => i!==index);
        setTasks(updatedTasks);
    };
    function moveUp(index){
      if(index>0){
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index-1]] =
         [updatedTasks[index-1], updatedTasks[index]];
        setTasks(updatedTasks);
        
      }
    };
    function moveDown(index){
      if(index<tasks.length-1){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index+1]] =
      [updatedTasks[index+1], updatedTasks[index]];
        setTasks(updatedTasks);
      }
    };

    function toggleCheckbox(index){
      const updatedTasks = [...tasks];
      updatedTasks[index].checked = !updatedTasks[index].checked;
      setTasks(updatedTasks);
    }
    

  return (
    
  <div className="to-do-list text-center mt-100px">
    {/*<div className="RotatingStopwatch flex items-end justify-center"><RotatingStopwatch/></div>  */}
    <h1>TO DO: List</h1>
    <div className="mt-10">
      <input 
      type="text" 
      placeholder="Enter a Task"
      
      value={newTask} 
      onChange={updateTask}/>
      
    <button className="Addbtn" onClick={addTask}><AddBtn/></button>
    </div>
    <ol>
      {tasks.map((task, index) => {
       return( <li key={index} className="flex items-center justify-center ">
        <Checkbox
        checked={task.checked}
        onChange={() =>toggleCheckbox(index)}/>
          <span className="text flex flex-start align-left">{task.text}</span>
          <button
          className="Deletebtn p-2"
          onClick={() => deleteTask(index)}><DeleteBtn/></button>
          <button
          className="Movebtn p-2"
          onClick={() => moveUp(index)}> <FontAwesomeIcon icon={faAngleUp} /></button>
          <button
          className="Movebtn p-2"
          onClick={() => moveDown(index)}><FontAwesomeIcon icon={faAngleDown} /></button>
        </li>)
      })}
    </ol>
  </div>)
}

export default ToDoList