import React from "react";

const students = [
  {
    id: 1,
    name: "rus0",
  },
  {
    id: 2,
    name: "rus7",
  },
  {
    id: 3,
    name: "rus8",
  },
  {
    id: 4,
    name: "rus9",
  },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student) => {
        return <li key={student.id}>{student.name}</li>;
      })}
    </ul>
  );
}

export default AttendanceBook;
