import StudentList from "../StudentList/StudentList";
import StudentForm from "../StudentForm/StudentForm";
import "./SchoolCard.css";

function SchoolCard({ school, addStudent }) {
  return (
    <section className="school-card">
      <div className="card-header">
        <h2>{school.name}</h2>

        <span className="student-count">
          {school.students.length} Students
        </span>
      </div>

      <StudentList students={school.students} />

      <StudentForm
        schoolId={school.id}
        addStudent={addStudent}
      />
    </section>
  );
}

export default SchoolCard;