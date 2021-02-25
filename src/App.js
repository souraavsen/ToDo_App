// import React from 'react'
import Header from "./components/Header";
import Task from "./components/Task";
import { useState, useEffect } from "react";
import Form from "./components/Form";

function App() {
  const [showAddBtn, setShowAddBtn] = useState(false);

  const [tasks, setTask] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const taskfromserver = await fetchtasks();
      setTask(taskfromserver);
    };

    getTasks();
  }, []);

  const fetchtasks = async () => {
    const response = await fetch("http://localhost:5000/tasks");
    const data = await response.json();

    return data;
  };

  const fetchtask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await response.json();

    return data;
  };

  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTask([...tasks, data]);
  };

  const deletetask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTask(tasks.filter((tasks) => tasks.id !== id));
  };

  const reminder = async (id) => {
    const taskReminder = await fetchtask(id);
    const updatedTask = { ...taskReminder, reminder: !taskReminder.reminder };
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    const data = await res.json();

    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <div className="whole_container">
      <div className='gap'>
        <Header
          onshowAddBtn={() => setShowAddBtn(!showAddBtn)}
          changebtn={showAddBtn}
        />
      </div>
      <div className='container'>
        {showAddBtn && <Form addTask={addTask} />}
        {tasks.length !== 0 ? (
          <Task
            tasks={tasks}
            onDelete={deletetask}
            onReminder={reminder}
            addTask={addTask}
          />
        ) : (
          <h2>'No Task Remaining'</h2>
        )}
      </div>
    </div>
  );
}

export default App;
