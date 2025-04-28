import React, { useState } from "react";
import TaskList from "./TaskList.js";
import CategoryFilter from "./CategoryFilter.js";
import NewTaskForm from "./NewTaskForm.js";
import { TASKS, CATEGORIES } from "../data.js";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [filteredCategory, setFilteredCategory] = useState("All");

  const handleDelete = (taskText) => {
    setTasks(tasks.filter((task) => task.text !== taskText));
  };

  const handleCategorySelect = (category) => {
    setFilteredCategory(category);
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const filteredTasks =
  filteredCategory === "All"
    ? tasks
    : tasks.filter((task) => task.category === filteredCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        onCategorySelect={handleCategorySelect}
      />
      <NewTaskForm 
        categories={CATEGORIES} 
        onTaskFormSubmit={handleTaskFormSubmit} 
      />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDelete} />
    </div>
  );
}

export default App;
