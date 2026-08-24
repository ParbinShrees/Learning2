import StudentItem from "../StudentItem/StudentItem";

function StudentList({ students }) {
  return (
    <ul className="student-list">
      {students.map((student) => (
        <StudentItem
          key={student.id}
          name={student.name}
          grade={student.grade}
        />
      ))}
    </ul>
  );
}

export default StudentList;