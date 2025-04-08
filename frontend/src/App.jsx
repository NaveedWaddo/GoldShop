import { useState } from "react";
import AuthForm from "./components/AuthForm";
import Dashboard from "./components/Dashboard";

function App() {
  const [user, setUser] = useState(null);

  const handleAuth = (userData) => {
    setUser(userData);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {user ? <Dashboard user={user} /> : <AuthForm onAuth={handleAuth} />}
    </div>
  );
}

export default App;
