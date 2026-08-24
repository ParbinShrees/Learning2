import { useState } from "react";

function StudentForm({ schoolId, addStudent }) {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !grade) return;

    addStudent(schoolId, { name, grade });

    setName("");
    setGrade("");
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
      >
        <option value="">Grade</option>
        <option>A+</option>
        <option>A</option>
        <option>B+</option>
        <option>B</option>
        <option>C</option>
      </select>

      <button type="submit">Add</button>
    </form>
  );
}

export default StudentForm;