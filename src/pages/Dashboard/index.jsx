import { useState } from "react";

const Dashboard = ({ onLogout, data }) => {
  const [isLogout, setIslogout] = useState(false);
  const onLogoutHandler = () => {
    setIslogout(true);
    setTimeout(() => {
      return onLogout(false);
    }, 2000);
  };
  return (
    <div className="bg-primary">
      <div className="d-flex justify-content-between px-5 py-3">
        <div className="text-white d-flex flex-column">
          <h3 className="justify-content-center">Enigma Camp</h3>
        </div>
        <div className="text-white ">
          <h6 className="text-right">Selamat datang, {data.username}</h6>
          <h6 style={{ cursor: isLogout ? "not-allowed" : "pointer" }} onClick={onLogoutHandler}>
            Logout
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
