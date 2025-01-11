import React, { useEffect, useState } from 'react'
import axios from 'axios';

const MyTasks = () => {
  const [mytasks, setMytasks] = useState([]);
  const myID = localStorage.getItem('userID');
  const ID = JSON.parse(myID);

  const [currentPage, setCurrentPage] = useState(1);
    const tasksPerPage = 5;

    const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = mytasks.slice(indexOfFirstTask, indexOfLastTask);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(mytasks.length / tasksPerPage);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/task/getmytasks/${ID}`)
      .then((res) => {
        setMytasks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">My Task List</h1>
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
            {currentTasks.length > 0 ? currentTasks.map((task, index) => (
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
            )): (
              <tr>
                <td colSpan="5" className="px-4 py-2 border text-center">
                  No tasks assigned to you now
                </td>
              </tr>
            )}
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

export default MyTasks