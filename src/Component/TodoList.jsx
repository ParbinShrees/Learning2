import { useEffect, useState } from "react";
import "./Day6.css";

function TodoList() {
  // State
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch todos
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=10"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch todos");
        }

        const data = await response.json();
        setTodos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  // Statistics
  const completedCount = todos.filter((todo) => todo.completed).length;
  const pendingCount = todos.length - completedCount;

  // Loading state
  if (loading) {
    return (
      <section className="day6-card">
        <p className="loading">⏳ Loading todos...</p>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="day6-card">
        <p className="error">❌ {error}</p>
      </section>
    );
  }

  return (
    <section className="day6-card">
      {/* Header */}
      <div className="card-header">
        <div>
          <p className="eyebrow">HOMEWORK 01</p>
          <h2>📝 Todo List</h2>
          <p className="subtitle">Your daily tasks</p>
        </div>

        <div className="todo-total">
          {todos.length}
          <span>Total</span>
        </div>
      </div>

      {/* Statistics */}
      <div className="todo-stats">
        <div className="stat completed-stat">
          <span>✅</span>
          <div>
            <strong>{completedCount}</strong>
            <small>Completed</small>
          </div>
        </div>

        <div className="stat pending-stat">
          <span>⏳</span>
          <div>
            <strong>{pendingCount}</strong>
            <small>Pending</small>
          </div>
        </div>
      </div>

      {/* Todo List */}
      <div className="todo-list">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={`todo-item ${
              todo.completed ? "todo-completed" : ""
            }`}
          >
            <div className="todo-icon">
              {todo.completed ? "✓" : "○"}
            </div>

            <div className="todo-content">
              <span>{todo.title}</span>
              <small>Task #{String(todo.id).padStart(2, "0")}</small>
            </div>

            <span
              className={`status ${
                todo.completed ? "status-done" : "status-pending"
              }`}
            >
              {todo.completed ? "Done" : "Pending"}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TodoList;