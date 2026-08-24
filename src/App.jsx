import { useState } from "react";
import SchoolCard from "./components/SchoolCard/SchoolCard";
import "./App.css";

function App() {
  const [schools, setSchools] = useState([
    {
      id: 1,
      name: "Pokhara Secondary School",
      students: [
        { id: 1, name: "Parbin", grade: "A+" },
        { id: 2, name: "Sujan", grade: "B+" },
      ],
    },
    {
      id: 2,
      name: "Everest Academy",
      students: [
        { id: 3, name: "Aayush", grade: "A" },
        { id: 4, name: "Nisha", grade: "A+" },
      ],
    },
  ]);

  const addStudent = (schoolId, student) => {
    setSchools((prev) =>
      prev.map((school) =>
        school.id === schoolId
          ? {
              ...school,
              students: [
                ...school.students,
                {
                  id: Date.now(),
                  ...student,
                },
              ],
            }
          : school
      )
    );
  };

  return (
    <div className="app">
      <h1>🏫 School Student Manager</h1>
      <p>Manage students from different schools</p>

      <div className="school-grid">
        {schools.map((school) => (
          <SchoolCard
            key={school.id}
            school={school}
            addStudent={addStudent}
          />
        ))}
      </div>
    </div>
  );
}

export default App;