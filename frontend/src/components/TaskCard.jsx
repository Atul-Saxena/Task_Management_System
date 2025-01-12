import React,{ useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTaskContext} from '../context/TaskContext';

const TaskCard = ({task}) => {
  const [priority, setPriority] = useState(false);
  const navigate = useNavigate();
  const editTaskValuse = useTaskContext();

  useEffect(() => {
      setPriority(task.priority);
      console.log(priority);
      
      
    }, []);

    const handleEdit = () => {
      editTaskValuse.setTask(task);
      navigate(`/updatetask`, { state: task });
    }
    const handleDetails = () => {
      editTaskValuse.setTask(task);
      navigate(`/task/${task._id}`);
    }

    return (
        <div className={`flex flex-col items-center justify-evenly ${priority ? 'bg-green-100' : 'bg-yellow-100'} md:max-w-1/3 rounded-lg shadow-md overflow-hidden`}>
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2">{task.title}</h2>
            <p className="text-gray-700 font-semibold text-sm line-clamp-6">Due Date: { new Date(task.dueDate).toLocaleDateString()}</p>
            <p className="text-gray-700 font-semibold text-sm line-clamp-6">Current Status: {task.status}</p>
          </div>

          <button onClick={handleDetails} className='bg-blue-500 mb-4 hover:bg-blue-600 text-white py-2 px-4 rounded-md block w-full text-center'>
            View Details
          </button>

          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md block w-full text-center" onClick={handleEdit}>Edit</button>
        </div>
      )
}

export default TaskCard
