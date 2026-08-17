import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskItem({ task }) {
  const { toggleTask, deleteTask } = useContext(TaskContext);

  return (
    <div className="task">
      <div className="left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        <span className={task.completed ? "done" : ""}>
          {task.text}
        </span>
      </div>

      <button className="delete" onClick={() => deleteTask(task.id)}>
        ✕
      </button>
    </div>
  );
}