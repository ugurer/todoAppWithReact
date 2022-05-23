import React, { useState } from 'react'
import "./todoapp.css"
function TodoApp() {

  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  }

  const addTask = () => {
    if (task !== "") {
      const taskData = {
        id: Math.floor(Math.random() * 10000),
        value: task,
        isCompleted: false
      }
      setTasks([...tasks, taskData]);
      setTask("");
    }
  }

  const deleteTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }

  const completeTask = (id) => {  // id is the task id     
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    }
    ); setTasks(newTasks);
  }

  return (
    <div className='todo'>


      <input type='text' name='text' id='text' onChange={e => handleChange(e)} placeholder='Add Task Here'></input>
      <button id='add' className='add-btn' onClick={addTask}>Add</button>
      {tasks !== [] ?
        <ul className='todo-list'>
          {tasks.map(t => <li className={t.isCompleted ? "cross-text":"list-item" } key={t.id}>{t.value}
            <button className='delete-btn' onClick={() => { deleteTask(t.id) }}>Delete</button>
            <button className='complete-btn' onClick={() => {completeTask(t.id) }}>Complete</button>

          </li>)}
        </ul>
        : null}

    </div>);
}

export default TodoApp