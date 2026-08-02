function StudentItem({ name, grade }) {
  return (
    <li>
      {name} — Grade: <strong>{grade}</strong>
    </li>
  );
}

export default StudentItem;