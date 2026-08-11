import TodoList from "./Component/TodoList";
import Countdown from "./Component/Countdown";
import UserSearch from "./Component/UserSearch";

function App() {
  return (
    <main>
      <header className="day6-header">
        <p>REACT • DAY 6</p>
        <h1>useEffect & API Practice</h1>
        <span>
          Fetching data • Timers • Searching
        </span>
      </header>

      <TodoList />

      <Countdown />

      <UserSearch />
    </main>
  );
}

export default App;