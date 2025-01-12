# Task management system (MERN Stack Project)

## Overview
This is a full-stack MERN (MongoDB, Express, React, Node.js) project designed for Task management system. The backend handles API requests and database interactions, while the frontend provides a user-friendly interface for interaction.

---

## Features
- **Backend**: Powered by Express.js with MongoDB as the database.
- **Frontend**: Built with VITE + React.js for dynamic and responsive UI.
- RESTful APIs for seamless communication between the frontend and backend.
- Scalable folder structure for both frontend and backend.

---

## Prerequisites
To run this project, ensure the following are installed:
- [Node.js](https://nodejs.org/) (version 14+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A running [MongoDB](https://www.mongodb.com/) instance (local or cloud)

---

## Installation and Setup

### Backend Setup
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Atul-Saxena/Task_Management_System.git
   cd your-repo-name
    ```

2. **Add MongoDB Connection URL:**
    ```js
    await mongoose.connect("mongodb://127.0.0.1/TaskMagnetBrains");
    ```

3. **Install Dependencies:**
    ```bash
   cd backend
   npm install
   npm run dev
    ```

### Frontend Setup
1. **Navigate to the Frontend Directory:**
   ```bash
   cd frontend
    ```

2. **Install Dependencies:**
   ```bash
   npm install
    ```

3. **Run the Frontend Server:**
   ```bash
   npm run dev
    ```
