import TodoList from "./Component/TodoList";
import Countdown from "./Component/Countdown";
import UserSearch from "./Component/UserSearch";

function App() {
  return (
    <div>
      <TodoList />

      <hr />

      <Countdown />

      <hr />

      <UserSearch />
    </div>
  );
}

export default App;