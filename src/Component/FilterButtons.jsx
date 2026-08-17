import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function FilterButtons() {
  const { filter, setFilter } = useContext(TaskContext);

  return (
    <div className="filters">
      <button
        className={filter === "all" ? "active" : ""}
        onClick={() => setFilter("all")}
      >
        All Task
      </button>

      <button
        className={filter === "pending" ? "active" : ""}
        onClick={() => setFilter("pending")}
      >
        Pending
      </button>

      <button
        className={filter === "done" ? "active" : ""}
        onClick={() => setFilter("done")}
      >
        Done
      </button>
    </div>
  );
}