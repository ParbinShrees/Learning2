import TaskForm from "../components/TaskForm";
import FilterButtons from "../components/FilterButtons";
import TaskList from "../components/TaskList";

export default function Home() {
  return (
    <main className="home">
      {/* Page Header */}
      <header className="home-header">
        <h1>My Tasks</h1>
        <p>Organize your work and stay productive.</p>
      </header>

      {/* Add New Task */}
      <section className="home-section">
        <h2>Add New Task</h2>
        <TaskForm />
      </section>

      {/* Task Categories */}
      <section className="home-section">
        <h2>Task Categories</h2>
        <FilterButtons />
      </section>

      {/* Display Tasks */}
      <section className="home-section">
        <h2>Your Tasks</h2>
        <TaskList />
      </section>
    </main>
  );
}