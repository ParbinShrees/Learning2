import StudentList from "../StudentList/StudentList";

// Receives `school` from App
function SchoolCard({ school }) {
  return (
    <section>
      <h2>{school.name}</h2>
      {/* Level 1 ➜ Level 2: pass only the students array down */}
      <StudentList students={school.students} />
    </section>
  );
}

export default SchoolCard;