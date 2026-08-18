import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { filteredTasks } = useContext(TaskContext);

  // Empty state
  if (filteredTasks.length === 0) {
    return <p className="empty">No tasks found.</p>;
  }

  // Task list
  return (
    <section className="task-list">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </section>
  );
}