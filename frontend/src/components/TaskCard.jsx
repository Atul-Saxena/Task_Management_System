import React from 'react'
import { Link } from 'react-router-dom'

const TaskCard = ({task}) => {
    return (
        <div className="flex flex-col items-center justify-evenly bg-white md:max-w-1/3 rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2">{task.title}</h2>
            {/* <p className="text-gray-700 text-sm line-clamp-6">description: {task.description}</p> */}
            <p className="text-gray-700 font-semibold text-sm line-clamp-6">Due Date: {task.dueDate}</p>
            <p className="text-gray-700 font-semibold text-sm line-clamp-6">Current Status: {task.status}</p>
          </div>
          <Link to={`/task/${task._id}`} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md block w-full text-center">Detail</Link>
        </div>
      )
}

export default TaskCard