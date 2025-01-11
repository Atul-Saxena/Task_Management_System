import React, { useState, useEffect } from "react";
import axios from 'axios';

const CreateTask = () => {
  const [admin, setAdmin] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setAdmin(JSON.parse(localStorage.getItem("admin")));
    console.log(admin);
    
    axios.get("http://localhost:5000/api/users/allusers")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (admin) {
    return (
      <>hii</>
    )
  }
  else {
    return (
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Access Denied</h2>
          <p className="text-gray-600 text-center">You do not have permission to access this page.</p>
        </div>
      </div>
    );
  }


}

export default CreateTask