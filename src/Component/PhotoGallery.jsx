import { useState, useEffect } from "react";
import "./Day6.css";

function PhotoGallery() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=1&limit=12")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch photos");
        }

        return response.json();
      })
      .then((data) => {
        setPhotos(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filteredPhotos = photos.filter((photo) =>
    photo.author.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <section className="day6-card">
        <div className="loading">
          <h2>📸 Loading photos...</h2>
          <p>Fetching real images from the API...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="day6-card">
        <div className="error">
          ❌ {error}
        </div>
      </section>
    );
  }

  return (
    <section className="day6-card">

      <div className="card-header">
        <div>
          <p className="eyebrow">API • REAL IMAGES</p>

          <h2>📸 Photo Gallery</h2>

          <p className="subtitle">
            Real photographs fetched from an external API
          </p>
        </div>

        <div className="user-count">
          {filteredPhotos.length}
          <span>Photos</span>
        </div>
      </div>

      <div className="search-box">
        🔍

        <input
          type="text"
          placeholder="Search by photographer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {search && (
          <button onClick={() => setSearch("")}>
            ✕
          </button>
        )}
      </div>

      {filteredPhotos.length === 0 ? (
        <div className="no-results">
          <span>😕</span>

          <h3>No photos found</h3>

          <p>
            Try searching for another photographer.
          </p>
        </div>
      ) : (
        <div className="photo-grid">

          {filteredPhotos.map((photo) => (
            <div className="photo-card" key={photo.id}>

              <img
                src={photo.download_url}
                alt={`Photo by ${photo.author}`}
              />

              <div className="photo-info">

                <h3>
                  📷 {photo.author}
                </h3>

                <span>
                  Photo #{photo.id}
                </span>

              </div>

            </div>
          ))}

        </div>
      )}

    </section>
  );
}

export default PhotoGallery;