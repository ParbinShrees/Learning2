import TaskForm from "../components/TaskForm";
import FilterButtons from "../components/FilterButtons";
import TaskList from "../components/TaskList";

export default function Home() {
  return (
    <>
      <TaskForm />
      <FilterButtons />
      <TaskList />
    </>
  );
}