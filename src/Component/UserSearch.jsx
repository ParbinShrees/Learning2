import { useState, useEffect } from "react";
import "./Day6.css";

function UserSearch() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="day6-card">
      <div className="card-header">
        <div>
          <p className="eyebrow">HOMEWORK 03</p>
          <h2>🔎 User Search</h2>
          <p className="subtitle">
            Search users fetched from the API
          </p>
        </div>

        <div className="user-count">
          {filteredUsers.length}
          <span>Results</span>
        </div>
      </div>

      <div className="search-box">
        <span>🔍</span>

        <input
          type="text"
          placeholder="Search by user name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {search && (
          <button onClick={() => setSearch("")}>
            ✕
          </button>
        )}
      </div>

      {loading ? (
        <p className="loading">⏳ Loading users...</p>
      ) : filteredUsers.length === 0 ? (
        <div className="no-results">
          <span>😕</span>
          <h3>No users found</h3>
          <p>Try searching for another name.</p>
        </div>
      ) : (
        <div className="user-grid">
          {filteredUsers.map((user) => (
            <div className="user-card" key={user.id}>
              <div className="avatar">
                {user.name.charAt(0)}
              </div>

              <div className="user-info">
                <h3>{user.name}</h3>

                <p>✉️ {user.email}</p>

                <p>📍 {user.address.city}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default UserSearch;