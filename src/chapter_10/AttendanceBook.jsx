import React from "react";

const students = [
  {
    id: 1,
    name: "sang hun",
  },
  {
    id: 1,
    name: "ha young",
  },
  {
    id: 1,
    name: "won woo",
  },
  {
    id: 1,
    name: "Kyung",
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
