import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const TaskForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        status: "Pending",
        priority: false,
        dueDate: "",
        assignedTo: "",
    });

    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/users/allusers");

                setUsers(() => [...response.data]);

            } catch (error) {
                console.error("Error fetching users:", error);
            }
        }

        fetchUsers();

    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const { title, description, status, priority, dueDate, assignedTo } = formData;
        try {
            const response = await axios.post("http://localhost:5000/api/task/createTask", { title, description, status, priority, dueDate, assignedTo });
            alert(response.data.message);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
        setFormData({
            title: "",
            description: "",
            status: "Open",
            priority: false,
            dueDate: "",
            assignedTo: "",
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mt-9 mx-auto p-4 space-y-4 bg-white rounded-lg shadow-lg"
        >
            <div className="flex flex-col space-y-2">
                <label htmlFor="title" className="font-medium text-gray-700">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    placeholder="Enter task title"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="description" className="font-medium text-gray-700">
                    Description
                </label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    placeholder="Enter task description"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="status" className="font-medium text-gray-700">
                    Status
                </label>
                <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <div className="flex items-center space-x-2">
                <label htmlFor="priority" className="font-medium text-gray-700">
                    High Priority
                </label>
                <input
                    type="checkbox"
                    id="priority"
                    name="priority"
                    checked={formData.priority}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600"
                />
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="dueDate" className="font-medium text-gray-700">
                    Due Date
                </label>
                <input
                    type="date"
                    id="dueDate"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="assignedTo" className="font-medium text-gray-700">
                    Assign To
                </label>
                <select
                    id="assignedTo"
                    name="assignedTo"
                    value={formData.assignedTo}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="" disabled>
                        Select a user
                    </option>
                    {users.map((user) => (
                        <option key={user._id} value={user.username}>
                            {user.username}
                        </option>
                    ))}
                </select>
            </div>
            <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600"
            >
                Create Task
            </button>
        </form>
    );
};

export default TaskForm;
