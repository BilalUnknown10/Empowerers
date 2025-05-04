"use client";
import { useState } from "react";

const dummyQuizAttempts = [
  { id: 1, title: "JavaScript Basics", score: 85, total: 100, date: "March 20, 2025" },
  { id: 2, title: "React Fundamentals", score: 90, total: 100, date: "March 22, 2025" },
];

export default function QuizAttempts() {
  const [quizAttempts, setQuizAttempts] = useState(dummyQuizAttempts);

  return (
    <div className="w-full max-w-4xl mx-auto mt-6">
      <h2 className="text-2xl font-semibold text-gray-700 text-center">My Quiz Attempts</h2>

      {quizAttempts.length === 0 ? (
        <div className="text-center mt-6">
          <img src="/empty-mailbox.png" alt="No Quiz Attempts" className="mx-auto w-48" />
          <p className="text-gray-500 mt-2">No quiz attempts found</p>
        </div>
      ) : (
        <div className="space-y-4 mt-4">
          {quizAttempts.map((quiz) => (
            <div
              key={quiz.id}
              className="bg-white p-4 shadow-md rounded-md flex flex-col md:flex-row justify-between items-center"
            >
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-700">{quiz.title}</h3>
                <p className="text-gray-500 text-sm">Score: {quiz.score}/{quiz.total}</p>
                <p className="text-gray-500 text-sm">Attempted on: {quiz.date}</p>
              </div>
              <button
                className="mt-2 md:mt-0 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
