// App.js

import React, { useState } from 'react';
import TaskListInterface from './components/TaskListInterface';
import TaskAssignment from './components/TaskAssignment';
import TaskStatusUpdates from './components/TaskStatusUpdates';
import TaskSummaryPage from './components/TaskSummaryPage';
import './App.css';

function App() {
  // State for managing tasks
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Function to assign a task to a user or team
  const assignTask = (taskId, assignee) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, assignee };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  // Function to update task status
  const updateTaskStatus = (taskId, status) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, status };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Task Management System</h1>
      <TaskListInterface addTask={addTask} />
      <TaskAssignment tasks={tasks} assignTask={assignTask} />
      <TaskStatusUpdates tasks={tasks} updateTaskStatus={updateTaskStatus} />
      <TaskSummaryPage tasks={tasks} />
    </div>
  );
}

export default App;
