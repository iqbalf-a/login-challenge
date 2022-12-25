import "./App.css";
import "./styles/style.css";
import Auth from "./pages/Login/index.jsx";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";

function App() {
  const [user, setUser] = useState(false);
  return (
    <>
      {user ? (
        <Dashboard
          onLogout={(data) => {
            setUser(data);
          }}
          data={user}
        />
      ) : (
        <Auth
          onLogin={(data) => {
            setUser(data);
          }}
        />
      )}
    </>
  );
}

export default App;
