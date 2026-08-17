import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm() {
  const [text, setText] = useState("");
  const { addTask } = useContext(TaskContext);

  const submit = (e) => {
    e.preventDefault();
    addTask(text);
    setText("");
  };

  return (
    <form className="search-bar" onSubmit={submit}>
      <input
        type="text"
        placeholder="Search or Add a Task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
}