import React from "react";

const StudentInfo = () => {
  const student = {
    name: "Uvesh Ghanchi",
    studentId: "000951957",
    program: "Software Development Diploma",
    semester: "Fall 2025",
    email: "ghanchiuvesh898@gmail.com",
  };

  return (
    <div >
      <h2 >Student Information</h2>
      <ul >
        <li><strong>Name:</strong> {student.name}</li>
        <li><strong>Student ID:</strong> {student.studentId}</li>
        <li><strong>Program:</strong> {student.program}</li>
        <li><strong>Semester:</strong> {student.semester}</li>
        <li><strong>Email:</strong> {student.email}</li>
      </ul>
    </div>
  );
};

export default StudentInfo;