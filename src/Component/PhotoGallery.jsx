import { useState, useEffect } from "react";
import "./Day6.css";

function PhotoGallery() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const loadPhotos = async (currentPage = 1, replace = true) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${currentPage}&limit=6`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch photos");
      }

      const data = await response.json();

      if (replace) {
        setPhotos(data);
      } else {
        setPhotos((prev) => [...prev, ...data]);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPhotos();
  }, []);

  const filteredPhotos = photos.filter((photo) =>
    photo.author.toLowerCase().includes(search.toLowerCase())
  );

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadPhotos(nextPage, false);
  };

  const handleRefresh = () => {
    setPage(1);
    loadPhotos(1, true);
  };

  return (
    <section className="day6-card">
      <div className="card-header">
        <div>
          <p className="eyebrow">LIVE API</p>
          <h2>📸 Photo Gallery</h2>
          <p className="subtitle">
            Real photographs from the Picsum API
          </p>
        </div>

        <button className="refresh-btn" onClick={handleRefresh}>
          ↻ Refresh
        </button>
      </div>

      <div className="search-box">
        <span>🔍</span>

        <input
          type="text"
          placeholder="Search photographer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {search && (
          <button onClick={() => setSearch("")}>✕</button>
        )}
      </div>

      {loading && photos.length === 0 ? (
        <div className="skeleton-grid">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div className="skeleton-card" key={item}></div>
          ))}
        </div>
      ) : error ? (
        <div className="error">
          ❌ {error}
        </div>
      ) : (
        <>
          <div className="photo-grid">
            {filteredPhotos.map((photo) => (
              <div className="photo-card" key={photo.id}>
                <img
                  src={`https://picsum.photos/id/${photo.id}/500/500`}
                  alt={`Photo by ${photo.author}`}
                  loading="lazy"
                />

                <div className="photo-info">
                  <h3>{photo.author}</h3>

                  <span>Photo #{photo.id}</span>
                </div>
              </div>
            ))}
          </div>

          <button
            className="load-more-btn"
            onClick={handleLoadMore}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More Photos"}
          </button>
        </>
      )}
    </section>
  );
}

export default PhotoGallery;