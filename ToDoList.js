import React from 'react';
function ToDoList({ task ,deleteTask,toggleComplete,handleEditing}) {
 
 return (
 <div className="todo-item">
<input type="checkbox" checked={task.Completed} onChange={()=>toggleComplete(task.id)}></input>
<p>{task.text}</p>
<button onClick={()=>handleEditing(task.id)}>Edit</button>
<button  id ='butt1'onClick={()=>deleteTask(task.id)}>x</button>

</div>
)
}
export default ToDoList;