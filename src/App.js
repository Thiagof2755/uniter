import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Courses from './components/Courses';
import CourseHome from './components/CourseHome';
import Certificate from './components/Certificate';
import StudentCard from './components/StudentCard';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        {user && <Navbar user={user} setUser={setUser} />}
        <Routes>
          <Route 
            path="/" 
            element={user ? <Navigate to="/courses" /> : <Login setUser={setUser} />} 
          />
          <Route 
            path="/courses" 
            element={user ? <Courses user={user} setUser={setUser} /> : <Navigate to="/" />} 
          />
          <Route 
            path="/course-home" 
            element={user ? <CourseHome user={user} setUser={setUser} /> : <Navigate to="/" />} 
          />
          <Route 
            path="/certificate" 
            element={user ? <Certificate user={user} setUser={setUser} /> : <Navigate to="/" />} 
          />
          <Route 
            path="/student-card" 
            element={user ? <StudentCard user={user} setUser={setUser} /> : <Navigate to="/" />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
