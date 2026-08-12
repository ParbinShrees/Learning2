import TodoList from "./Component/TodoList";
import Countdown from "./Component/Countdown";
import UserSearch from "./Component/UserSearch";
import PhotoGallery from "./Component/PhotoGallery";

function App() {
  return (
    <div className="day6-page">

      <aside className="sidebar">
        <div className="logo">
          DAY<span>06</span>
        </div>

        <nav>
          <a href="#overview">Overview</a>
          <a href="#todos">Todo Collection</a>
          <a href="#timer">Focus Timer</a>
          <a href="#users">Users</a>
          <a href="#gallery">Gallery</a>
        </nav>

        <div className="sidebar-bottom">
          <span>React Practice</span>
          <span>useEffect / API</span>
        </div>
      </aside>

      <main className="main-content">

        <section className="hero" id="overview">
          <div className="hero-top">
            <span>REACT / DAY 06</span>
            <span>API COLLECTION — 2026</span>
          </div>

          <div className="hero-content">
            <div>
              <p className="hero-label">TODAY'S PRACTICE</p>

              <h1>
                Data,
                <br />
                effects &
                <br />
                interaction.
              </h1>
            </div>

            <div className="hero-description">
              <p>
                A collection of React exercises focused on
                useEffect, API requests, timers, filtering
                and asynchronous data.
              </p>

              <span>SCROLL TO EXPLORE</span>
            </div>
          </div>
        </section>

        <section className="section-block" id="todos">
          <div className="section-heading">
            <span>01 / TODO COLLECTION</span>
            <h2>Tasks from<br />the API.</h2>
          </div>

          <TodoList />
        </section>

        <section className="section-block timer-section" id="timer">
          <div className="section-heading">
            <span>02 / FOCUS TIMER</span>
            <h2>Time is<br />the resource.</h2>
          </div>

          <Countdown />
        </section>

        <section className="section-block" id="users">
          <div className="section-heading">
            <span>03 / USER DIRECTORY</span>
            <h2>Find people<br />in the data.</h2>
          </div>

          <UserSearch />
        </section>

        <section className="section-block gallery-section" id="gallery">
          <div className="section-heading">
            <span>04 / IMAGE COLLECTION</span>
            <h2>A visual<br />API archive.</h2>
          </div>

          <PhotoGallery />
        </section>

        <footer className="day6-footer">
          <div>REACT / DAY 06</div>
          <div>USEEFFECT + FETCH API</div>
          <div>2026</div>
        </footer>

      </main>
    </div>
  );
}

export default App;