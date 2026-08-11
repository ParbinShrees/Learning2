import { useState, useEffect } from "react";
import "./Day6.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch todos");
        }

        return response.json();
      })
      .then((data) => {
        setTodos(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const completed = todos.filter((todo) => todo.completed).length;
  const pending = todos.length - completed;

  if (loading) {
    return (
      <section className="day6-card">
        <p className="loading">⏳ Loading todos...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="day6-card">
        <p className="error">❌ {error}</p>
      </section>
    );
  }

  return (
    <section className="day6-card">
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

      <div className="todo-stats">
        <div className="stat completed-stat">
          <span>✅</span>
          <div>
            <strong>{completed}</strong>
            <small>Completed</small>
          </div>
        </div>

        <div className="stat pending-stat">
          <span>⏳</span>
          <div>
            <strong>{pending}</strong>
            <small>Pending</small>
          </div>
        </div>
      </div>

      <div className="todo-list">
        {todos.map((todo) => (
          <div
            className={`todo-item ${
              todo.completed ? "todo-completed" : ""
            }`}
            key={todo.id}
          >
            <div className="todo-icon">
              {todo.completed ? "✓" : "○"}
            </div>

            <div className="todo-content">
              <span>{todo.title}</span>
              <small>
                Task #{String(todo.id).padStart(2, "0")}
              </small>
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