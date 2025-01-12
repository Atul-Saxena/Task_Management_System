import React, { useState, useEffect } from "react";
import axios from 'axios';
import TaskCard from "../../components/TaskCard";


const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;

  const [tasks, setTasks] = useState([]);

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/task/allTasks`)
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => console.log(err));

  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(tasks.length / tasksPerPage);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Task List</h1>
      <div className="flex justify-center m-5">
        <p>priority tasks colour theme:</p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-4 space-y-2 sm:space-y-0">
          <span className="bg-green-100 px-2 py-1 rounded">High</span>
          <span className="bg-yellow-100 px-2 py-1 rounded">Low</span>
        </div>
      </div>
      {currentTasks.length > 0 ? (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 overflow-hidden">
          {currentTasks.map((task, index) => (
            <TaskCard key={index} task={task} />
          ))}
        </div>
      ) : (
        <div className="h-screen pb-64 flex items-center justify-center bg-white px-4">
          <div className="text-center mb-9">
            <h1 className="uppercase tracking-widest text-gray-500 mb-5">No Task Created</h1>
          </div>
        </div>
      )}

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