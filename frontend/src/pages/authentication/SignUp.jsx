import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const SignUp = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const [admin, setAdmin] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password === confirmPassword && name.length > 0 && password.length > 0 && name !== '' && password !== '') {
            await axios.post('http://localhost:5000/api/users/signup', { username: name, password, admin })
                .then((res) => console.log(res.data))
                .catch((err) => alert(err.response.data.error));

            navigate('/login');
            setName('');
            setPassword('');
            setConfirmPassword('');
        }
        else {
            alert('credentials are not valid');
        }
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Create an Account</h2>
                <form onSubmit={handleSubmit} method='POST'>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-600 font-medium mb-2">Username</label>
                        <input
                            type="text"
                            id="name"
                            autoComplete="on"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your unique username"
                            
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
                    <div className="mb-6">
                        <label htmlFor="confirm-password" className="block text-gray-600 font-medium mb-2">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Confirm your password"
                        />
                    </div>
                    <div className="mb-6 flex items-center">
                        <input
                            type="checkbox"
                            id="admin"
                            checked={admin}
                            onChange={() => setAdmin(!admin)}
                            className="mr-2"
                        />
                        <label htmlFor="admin" className="text-black font-bold ">Sign up as Manager </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-sm text-center text-gray-600 mt-4">
                    Already have an account?
                    <Link to={'/login'} className="text-blue-500 hover:underline">Log in</Link>
                </p>
            </div>
        </div>
    )
}

export default SignUp