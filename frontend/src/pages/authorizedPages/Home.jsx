import React, { useState, useEffect } from "react";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;

  const [tasks, setTasks] = useState([
    {
      "title": "Complete project documentation",
      "description": "Write the complete documentation for the project including API details.",
      "status": "In Progress",
      "priority": true,
      "dueDate": "2025-01-15T00:00:00.000Z",
      "assignedTo": "64b5eaf3b8a9f0a2c4d7c123"
    },
    {
      "title": "Fix login issue",
      "description": "Debug and fix the login issue for new users.",
      "status": "Open",
      "priority": false,
      "dueDate": "2025-01-12T00:00:00.000Z",
      "assignedTo": "64b5eaf3b8a9f0a2c4d7c456"
    },
    {
      "title": "Implement dark mode",
      "description": "Add dark mode feature to the web app with user preferences.",
      "status": "Completed",
      "priority": true,
      "dueDate": "2025-01-10T00:00:00.000Z",
      "assignedTo": "64b5eaf3b8a9f0a2c4d7c789"
    },
    {
      "title": "Test payment gateway integration",
      "description": "Perform end-to-end testing for the payment gateway integration.",
      "status": "In Progress",
      "priority": false,
      "dueDate": "2025-01-20T00:00:00.000Z",
      "assignedTo": "64b5eaf3b8a9f0a2c4d7c012"
    },
    {
      "title": "Optimize database queries",
      "description": "Improve performance by optimizing slow database queries.",
      "status": "Open",
      "priority": true,
      "dueDate": "2025-01-18T00:00:00.000Z",
      "assignedTo": "64b5eaf3b8a9f0a2c4d7c345"
    },
    {
      "title": "Complete project documentation",
      "description": "Write the complete documentation for the project including API details.",
      "status": "In Progress",
      "priority": true,
      "dueDate": "2025-01-15T00:00:00.000Z",
      "assignedTo": "64b5eaf3b8a9f0a2c4d7c123"
    },
    {
      "title": "Fix login issue",
      "description": "Debug and fix the login issue for new users.",
      "status": "Open",
      "priority": false,
      "dueDate": "2025-01-12T00:00:00.000Z",
      "assignedTo": "64b5eaf3b8a9f0a2c4d7c456"
    },
    {
      "title": "Implement dark mode",
      "description": "Add dark mode feature to the web app with user preferences.",
      "status": "Completed",
      "priority": true,
      "dueDate": "2025-01-10T00:00:00.000Z",
      "assignedTo": "64b5eaf3b8a9f0a2c4d7c789"
    },
    {
      "title": "Test payment gateway integration",
      "description": "Perform end-to-end testing for the payment gateway integration.",
      "status": "In Progress",
      "priority": false,
      "dueDate": "2025-01-20T00:00:00.000Z",
      "assignedTo": "64b5eaf3b8a9f0a2c4d7c012"
    },
    {
      "title": "Optimize database queries",
      "description": "Improve performance by optimizing slow database queries.",
      "status": "Open",
      "priority": true,
      "dueDate": "2025-01-18T00:00:00.000Z",
      "assignedTo": "64b5eaf3b8a9f0a2c4d7c345"
    },
    {
      "title": "Test paymesdfsdfsdnt gateway integration",
      "description": "Perform end-to-end testing for the payment gateway integration.",
      "status": "In Progress",
      "priority": false,
      "dueDate": "2025-01-20T00:00:00.000Z",
      "assignedTo": "64b5eaf3b8a9f0a2c4d7c012"
    },
    {
      "title": "sdfsfsfs database queries",
      "description": "Improve performance by optimizing slow database queries.",
      "status": "Open",
      "priority": true,
      "dueDate": "2025-01-18T00:00:00.000Z",
      "assignedTo": "64b5eaf3b8a9f0a2c4d7c345"
    },
  ]);

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(tasks.length / tasksPerPage);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Task List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Priority</th>
              <th className="px-4 py-2 border">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {currentTasks.map((task, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-4 py-2 border">{task.title}</td>
                <td className="px-4 py-2 border">{task.description}</td>
                <td className="px-4 py-2 border">{task.status}</td>
                <td className="px-4 py-2 border">
                  {task.priority ? "High" : "Normal"}
                </td>
                <td className="px-4 py-2 border">
                  {new Date(task.dueDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 border rounded ${currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-500 border-blue-500"
              } transition hover:bg-blue-500 hover:text-white`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home