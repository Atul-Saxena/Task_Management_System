import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (username.length > 0 && password.length > 0 && username !== '' && password !== '') {
            await axios.post('http://localhost:5000/api/users/login', { username, password })
                .then((res) => {
                    console.log(res.data);
                    
                    localStorage.setItem("token", JSON.stringify(res.data.userToken));
                    localStorage.setItem("userID", JSON.stringify(res.data.user._id));
                    localStorage.setItem("admin", JSON.stringify(res.data.user.admin));
                    localStorage.setItem("authenticated", "true");
                    navigate('/');
                })
                .catch((err) => alert(err.response.data.error));

        }
        else {
            alert('credentials are not valid');
        }
    };
    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Login to Your Account</h2>
                <form onSubmit={handleSubmit} method='POST'>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 font-medium mb-2">Username</label>
                        <input
                            type="text"
                            id="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your text"
                            autoComplete="on"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600 font-medium mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Login
                    </button>
                </form>
                <p className="text-sm text-center text-gray-600 mt-4">
                    Don't have an account?
                    <Link to={'/signup'} className="text-blue-500 hover:underline">Create an account</Link>
                </p>
            </div>
        </div>
    )
}

export default Login