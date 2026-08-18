import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm() {
  const [text, setText] = useState("");
  const { addTask } = useContext(TaskContext);

  // Add new task
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    addTask(text);
    setText("");
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search or add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}