import { useEffect, useMemo, useState } from "react";
import "./Day6.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const fetchTodos = async () => {
    setLoading(todos.length === 0);
    setRefreshing(todos.length > 0);
    setError("");

    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=15"
      );

      if (!res.ok) throw new Error("Failed to fetch todos");

      const data = await res.json();
      setTodos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const filteredTodos = useMemo(() => {
    return todos
      .filter((todo) =>
        todo.title.toLowerCase().includes(search.toLowerCase())
      )
      .filter((todo) => {
        if (filter === "completed") return todo.completed;
        if (filter === "pending") return !todo.completed;
        return true;
      });
  }, [todos, search, filter]);

  const completed = todos.filter((t) => t.completed).length;
  const pending = todos.length - completed;
  const progress =
    todos.length === 0 ? 0 : Math.round((completed / todos.length) * 100);

  if (loading) {
    return (
      <section className="day6-card">
        <div className="loader">
          <div className="spinner"></div>
          <h3>Loading Todos</h3>
          <p>Please wait while we fetch your tasks...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="day6-card">
        <div className="error-box">
          <h2>⚠ Something went wrong</h2>
          <p>{error}</p>
          <button onClick={fetchTodos}>Try Again</button>
        </div>
      </section>
    );
  }

  return (
    <section className="day6-card">
      {/* Header */}
      <div className="todo-header">
        <div>
          <p className="eyebrow">HOMEWORK 01</p>
          <h1>Todo Dashboard</h1>
          <p>Manage and track your daily API tasks</p>
        </div>

        <button
          className={`refresh-btn ${refreshing ? "rotate" : ""}`}
          onClick={fetchTodos}
        >
          ↻
        </button>
      </div>

      {/* Progress */}
      <div className="progress-card">
        <div className="progress-info">
          <span>Overall Progress</span>
          <strong>{progress}%</strong>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card blue">
          <h2>{todos.length}</h2>
          <p>Total Tasks</p>
        </div>

        <div className="stat-card green">
          <h2>{completed}</h2>
          <p>Completed</p>
        </div>

        <div className="stat-card orange">
          <h2>{pending}</h2>
          <p>Pending</p>
        </div>
      </div>

      {/* Search */}
      <input
        className="search-box"
        type="text"
        placeholder="🔍 Search task..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filters */}
      <div className="filters">
        {["all", "completed", "pending"].map((item) => (
          <button
            key={item}
            className={filter === item ? "active" : ""}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Todo List */}
      <div className="todo-list">
        {filteredTodos.length === 0 ? (
          <div className="empty">
            <h3>📭 No matching tasks</h3>
            <p>Try changing your search or filter.</p>
          </div>
        ) : (
          filteredTodos.map((todo) => (
            <div
              key={todo.id}
              className={`todo-row ${
                todo.completed ? "completed" : ""
              }`}
            >
              <div className="circle">
                {todo.completed ? "✓" : "○"}
              </div>

              <div className="content">
                <h4>{todo.title}</h4>
                <small>ID #{todo.id}</small>
              </div>

              <span
                className={
                  todo.completed ? "badge done" : "badge pending"
                }
              >
                {todo.completed ? "Completed" : "Pending"}
              </span>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default TodoList;