import { useMemo, useState } from "react";
import StudentList from "../StudentList/StudentList";
import StudentForm from "../StudentForm/StudentForm";
import "./SchoolCard.css";

function SchoolCard({ school, addStudent, deleteStudent, updateStudent }) {
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");

  // Calculate student statistics
  const statistics = useMemo(() => {
    const students = school.students || [];

    const total = students.length;

    const gradePoints = {
      "A+": 4,
      A: 3.7,
      "B+": 3.3,
      B: 3,
      "C+": 2.7,
      C: 2.3,
      D: 2,
    };

    const totalPoints = students.reduce(
      (sum, student) => sum + (gradePoints[student.grade] || 0),
      0
    );

    const average = total > 0 ? totalPoints / total : 0;

    return {
      total,
      average: average.toFixed(2),
    };
  }, [school.students]);

  // Search students
  const filteredStudents = useMemo(() => {
    return school.students.filter((student) =>
      student.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [school.students, search]);

  const handleStudentAdded = (student) => {
    addStudent(school.id, student);
    setShowForm(false);
  };

  return (
    <section className="school-card">
      {/* School Header */}
      <div className="school-header">
        <div className="school-icon">
          🏫
        </div>

        <div className="school-info">
          <h2>{school.name}</h2>

          <p>
            Student Management
          </p>
        </div>

        <div className="school-status">
          <span className="status-dot"></span>
          Active
        </div>
      </div>

      {/* Statistics */}
      <div className="school-stats">
        <div className="stat-box">
          <span className="stat-icon">👨‍🎓</span>

          <div>
            <strong>{statistics.total}</strong>
            <small>Total Students</small>
          </div>
        </div>

        <div className="stat-box">
          <span className="stat-icon">📊</span>

          <div>
            <strong>{statistics.average}</strong>
            <small>Average Grade</small>
          </div>
        </div>
      </div>

      {/* Student Section Header */}
      <div className="student-section-header">
        <div>
          <h3>Students</h3>
          <p>Manage students in this school</p>
        </div>

        <button
          className="add-student-btn"
          onClick={() => setShowForm((prev) => !prev)}
        >
          {showForm ? "✕ Close" : "+ Add Student"}
        </button>
      </div>

      {/* Search */}
      {school.students.length > 0 && (
        <div className="student-search">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search student..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <button onClick={() => setSearch("")}>
              ✕
            </button>
          )}
        </div>
      )}

      {/* Add Student Form */}
      {showForm && (
        <div className="form-wrapper"> ,./-==/
          <StudentForm
            schoolId={school.id}
            addStudent={handleStudentAdded}
          />
        </div>
      )}

      {/* Student List */}
      <StudentList
        students={filteredStudents}
        deleteStudent={deleteStudent}
        updateStudent={updateStudent}
      />

      {/* Search Empty State */}
      {school.students.length > 0 &&
        filteredStudents.length === 0 && (
          <div className="empty-search">
            <span>🔎</span>
            <h4>No students found</h4>
            <p>
              Try searching with a different student name.
            </p>
          </div>
        )}
    </section>
  );
}

export default SchoolCard;