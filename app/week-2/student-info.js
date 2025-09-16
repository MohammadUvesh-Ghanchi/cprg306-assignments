import React from "react";

const StudentInfo = () => {
  const student = {
    name: "John Doe",
    studentId: "S123456",
    program: "Software Development Diploma",
    semester: "Fall 2025",
    email: "johndoe@example.com",
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 border">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Student Information</h2>
      <ul className="space-y-2 text-gray-700">
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