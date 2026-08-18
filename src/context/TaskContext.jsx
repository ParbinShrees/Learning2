import { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  // Add new task
  const addTask = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const newTask = {
      id: Date.now(),
      text: trimmed,
      completed: false,
    };

    setTasks((prev) => [newTask, ...prev]);
  };

  // Mark task as complete / pending
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case "pending":
        return !task.completed;
      case "done":
        return task.completed;
      default:
        return !task.completed; // All shows active tasks
    }
  });

  return (
    <TaskContext.Provider
      value={{
        tasks,
        filter,
        setFilter,
        filteredTasks,
        addTask,
        toggleTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};