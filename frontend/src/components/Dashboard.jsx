import React from "react";

const Dashboard = ({ user }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4">Welcome, {user.name}!</h2>
        <p>ID: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Password: {user.password}</p>
      </div>
    </div>
  );
};

export default Dashboard;
