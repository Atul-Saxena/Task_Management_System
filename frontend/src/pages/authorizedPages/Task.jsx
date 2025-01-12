import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'
import { useTaskContext } from '../../context/TaskContext';

const Task = () => {
  const { id } = useParams();
  const [task, setTask] = useState({ data: { title: '', description: '', status: '', priority: false, dueDate: '', assignedTo: '' }, assignedTo: '' });

  const navigate = useNavigate();
  const editTaskValuse = useTaskContext();

  const fetchTask = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/task/getonetask/${id}`);
      const data = response.data;
      setTask(data);
    } catch (error) {
      console.log(error);
    }
  }

  const markComplete = async () => {
    const confirmComplete = window.confirm('Are you sure you want to mark this task as complete?');
    if (!confirmComplete) return;

    try {
      const { _id, title, description, status, priority, dueDate, assignedTo } = editTaskValuse.task;
      await axios.put(`http://localhost:5000/api/task/update/${id}`, { title, description, status: 'Completed', priority, dueDate, assignedTo });
      console.log(title, description, status, priority, dueDate, assignedTo);
      
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  const handleEdit = () => {
    navigate(`/updatetask`);
  }

  const deleteTask = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this task?');
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:5000/api/task/delete/${id}`)
        .then((res) => alert(res.data.message));
        navigate('/');
      } catch (error) {
        console.log(error);
      }
    }
  }


  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pb-72">
      <div className="max-w-lg w-full bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="p-6">
          {/* Title */}
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            {task.data.title}
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            {task.data.description}
          </p>

          {/* Metadata */}
          <div className="mb-6">
            <p className="flex items-center text-gray-600 text-sm mb-3">
              <span className="mr-2 text-blue-500">
                <i className="fas fa-calendar-alt"></i>
              </span>
              <strong className="mr-2">Due Date:</strong> {new Date(task.data.dueDate).toLocaleDateString()}
            </p>
            <p className="flex items-center text-gray-600 text-sm mb-3">
              <span className="mr-2 text-green-500">
                <i className="fas fa-tasks"></i>
              </span>
              <strong className="mr-2">Status:</strong> {task.data.status}
            </p>
            <p className="flex items-center text-gray-600 text-sm mb-3">
              <span className="mr-2 text-yellow-500">
                <i className="fas fa-star"></i>
              </span>
              <strong className="mr-2">Priority:</strong> {task.data.priority ? 'High' : 'Low'}
            </p>
            <p className="flex items-center text-gray-600 text-sm">
              <span className="mr-2 text-purple-500">
                <i className="fas fa-user"></i>
              </span>
              <strong className="mr-2">Assigned To:</strong> {task.assignedTo}
            </p>
          </div>

          {/* Action Button */}
          <div className="mt-6">
            <button onClick={markComplete} className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
              Mark as Complete
            </button>
            <button onClick={handleEdit} className="w-full py-3 mt-5 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
              Edit
            </button>
            <button onClick={deleteTask} className="w-full py-3 mt-5 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Task;
