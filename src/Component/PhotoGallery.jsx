import { useEffect, useMemo, useState } from "react";

export default function PhotoGallery() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);

  const fetchPhotos = async (pageNum = 1, replace = true) => {
    replace ? setLoading(true) : setLoadingMore(true);
    setError("");

    try {
      const res = await fetch(
        `https://picsum.photos/v2/list?page=${pageNum}&limit=6`
      );

      if (!res.ok) throw new Error("Unable to load photos");

      const data = await res.json();

      setPhotos((prev) => (replace ? data : [...prev, ...data]));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  const filtered = useMemo(() => {
    return photos.filter((p) =>
      p.author.toLowerCase().includes(search.toLowerCase())
    );
  }, [photos, search]);

  const refresh = () => {
    setPage(1);
    fetchPhotos(1, true);
  };

  const loadMore = () => {
    const next = page + 1;
    setPage(next);
    fetchPhotos(next, false);
  };

  return (
    <>
      <style>{`
        *{box-sizing:border-box}
        .gallery{
          max-width:1200px;
          margin:auto;
          padding:24px;
          font-family:Inter,system-ui,sans-serif;
        }

        .header{
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:24px;
          flex-wrap:wrap;
          gap:16px;
        }

        .title{
          font-size:2rem;
          font-weight:800;
          margin:0;
          color:#111827;
        }

        .subtitle{
          color:#6b7280;
          margin-top:6px;
        }

        .refresh{
          border:none;
          background:#2563eb;
          color:#fff;
          padding:12px 18px;
          border-radius:12px;
          cursor:pointer;
          font-weight:600;
        }

        .refresh:hover{background:#1d4ed8}

        .stats{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
          gap:16px;
          margin-bottom:22px;
        }

        .stat{
          background:linear-gradient(135deg,#2563eb,#4f46e5);
          color:#fff;
          padding:18px;
          border-radius:18px;
        }

        .stat h2{
          margin:0;
          font-size:1.8rem;
        }

        .search{
          display:flex;
          align-items:center;
          background:#fff;
          border:1px solid #e5e7eb;
          border-radius:14px;
          padding:12px 16px;
          margin-bottom:24px;
        }

        .search input{
          flex:1;
          border:none;
          outline:none;
          font-size:1rem;
          margin-left:10px;
        }

        .grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
          gap:20px;
        }

        .card{
          background:#fff;
          border-radius:18px;
          overflow:hidden;
          box-shadow:0 10px 30px rgba(0,0,0,.08);
          transition:.25s;
          cursor:pointer;
        }

        .card:hover{
          transform:translateY(-6px);
        }

        .card img{
          width:100%;
          height:220px;
          object-fit:cover;
          display:block;
        }

        .info{
          padding:16px;
        }

        .info h3{
          margin:0 0 6px;
          font-size:1.05rem;
          color:#111827;
        }

        .info p{
          margin:0;
          color:#6b7280;
          font-size:.9rem;
        }

        .skeleton{
          height:300px;
          border-radius:18px;
          background:linear-gradient(90deg,#e5e7eb,#f3f4f6,#e5e7eb);
          background-size:200% 100%;
          animation:shine 1.2s infinite;
        }

        @keyframes shine{
          0%{background-position:200% 0}
          100%{background-position:-200% 0}
        }

        .load{
          display:block;
          margin:30px auto 0;
          padding:14px 24px;
          border:none;
          border-radius:12px;
          background:#111827;
          color:#fff;
          font-size:1rem;
          cursor:pointer;
        }

        .load:disabled{
          opacity:.6;
          cursor:not-allowed;
        }

        .error{
          background:#fee2e2;
          color:#b91c1c;
          padding:16px;
          border-radius:12px;
          text-align:center;
        }

        .empty{
          text-align:center;
          color:#6b7280;
          padding:50px;
        }

        .modal{
          position:fixed;
          inset:0;
          background:rgba(0,0,0,.75);
          display:flex;
          justify-content:center;
          align-items:center;
          padding:20px;
          z-index:1000;
        }

        .modal-box{
          background:#fff;
          border-radius:20px;
          max-width:800px;
          width:100%;
          overflow:hidden;
        }

        .modal img{
          width:100%;
          max-height:70vh;
          object-fit:cover;
        }

        .modal-info{
          padding:18px;
          display:flex;
          justify-content:space-between;
          align-items:center;
        }

        .close{
          background:#ef4444;
          color:#fff;
          border:none;
          width:42px;
          height:42px;
          border-radius:50%;
          cursor:pointer;
          font-size:18px;
        }
      `}</style>

      <div className="gallery">
        <div className="header">
          <div>
            <h1 className="title">📸 Photo Gallery</h1>
            <p className="subtitle">
              Beautiful images powered by the Picsum API
            </p>
          </div>

          <button className="refresh" onClick={refresh}>
            ↻ Refresh
          </button>
        </div>

        <div className="stats">
          <div className="stat">
            <h2>{photos.length}</h2>
            <span>Total Photos</span>
          </div>

          <div className="stat">
            <h2>{filtered.length}</h2>
            <span>Search Results</span>
          </div>

          <div className="stat">
            <h2>{page}</h2>
            <span>Current Page</span>
          </div>
        </div>

        <div className="search">
          🔍
          <input
            placeholder="Search photographer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
                fontSize: 18,
              }}
            >
              ✕
            </button>
          )}
        </div>

        {error ? (
          <div className="error">{error}</div>
        ) : loading ? (
          <div className="grid">
            {[...Array(6)].map((_, i) => (
              <div className="skeleton" key={i}></div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="empty">
            <h2>No photographer found</h2>
            <p>Try another search keyword.</p>
          </div>
        ) : (
          <>
            <div className="grid">
              {filtered.map((photo) => (
                <div
                  key={photo.id}
                  className="card"
                  onClick={() => setSelected(photo)}
                >
                  <img
                    src={`https://picsum.photos/id/${photo.id}/600/600`}
                    alt={photo.author}
                    loading="lazy"
                  />

                  <div className="info">
                    <h3>{photo.author}</h3>
                    <p>Photo ID #{photo.id}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="load"
              onClick={loadMore}
              disabled={loadingMore}
            >
              {loadingMore ? "Loading..." : "Load More"}
            </button>
          </>
        )}
      </div>

      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <img
              src={`https://picsum.photos/id/${selected.id}/1000/800`}
              alt={selected.author}
            />

            <div className="modal-info">
              <div>
                <h3>{selected.author}</h3>
                <p>Photo ID #{selected.id}</p>
              </div>

              <button className="close" onClick={() => setSelected(null)}>
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}