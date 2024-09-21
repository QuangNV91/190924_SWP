import React from 'react';
import { useNavigate } from 'react-router-dom';

const Manager = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: Implement logout logic here
    // For example, clear user session, remove tokens, etc.
    navigate('/login');
  };

  return (
    <div>
      <h1>Manager Dashboard</h1>
      <p>Welcome, Manager! Here you can manage your tasks and team.</p>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>TAO LA TEO</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Manager;
