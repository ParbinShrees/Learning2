import TaskForm from "../components/TaskForm";
import FilterButtons from "../components/FilterButtons";
import TaskList from "../components/TaskList";

export default function Home() {
  return (
    <main className="home">
      {/* Add New Task */}
      <TaskForm />

      {/* Task Categories */}
      <FilterButtons />

      {/* Display Tasks */}
      <TaskList />
    </main>
  );
}