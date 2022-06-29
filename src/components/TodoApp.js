import React, { useEffect, useState } from 'react'
import { Todo } from '../model/Todo';
import { TodoService } from '../services/TodoService';
import "./todoapp.css"
function TodoApp() {

  const todoService = new TodoService();

  const [task, setTask] = useState(null);

  const [tasks, setTasks] = useState([]);

  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    setTask(e.target.value);
  }

  useEffect(() => {
   updateTasks();
  }
    , );
   const updateTasks = () => {
      todoService.getTodos().then(tasks => setTasks(tasks)).then(() => setLoading(false));

    }

const addTask = (e) => {
  e.preventDefault();
  setLoading(true);
  task?.length>0?todoService.saveTodo(new Todo(null,task,false)).then(updateTasks() ):taskIsNotValid();
  setTask("");
}

const taskIsNotValid = () => {
  alert("Please enter a task")
  setLoading(false)
}

const deleteTask = (todo) => {
    todoService.delete(todo).then(() => {
      updateTasks();
    })
  }

  const completeTask = (todo) => {  // id is the task id     
    todo.isCompleted = !todo.isCompleted;
    todoService.update(todo).then(() => {
      setTasks(tasks.map(task => {
        if (task.id === todo.id) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      }));
    })
  }

 



  return (
    <div className='todo'>


      <input type='text' name='text' id='text' value={task===null ? "" : task} onChange={e => handleChange(e)} placeholder='Add Task Here'></input>
      <button id='add'   className='add-btn' onClick={addTask}>Add</button>
      {tasks.length >0 && !loading   ? 
       
             
        <ul className='todo-list'>
        {tasks.map(t => <li className={t.isCompleted ? "cross-text" : "list-item"} key={t.id}>{t.title}
          <button className='delete-btn' onClick={() => { deleteTask(t) }}>Delete</button>
          <button className='complete-btn' onClick={() => { completeTask(t) }}>Complete</button>

        </li>)}
      </ul>
        : <div className='loading'>No Tasks</div>}

    </div>);
}

export default TodoApp