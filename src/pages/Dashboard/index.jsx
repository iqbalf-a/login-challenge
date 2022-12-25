import { useState } from "react";
import Logo from "../../assets/logo.png"

const Dashboard = ({ onLogout, data }) => {
  const [isLogout, setIslogout] = useState(false);
  const onLogoutHandler = () => {
    setIslogout(true);
    setTimeout(() => {
      return onLogout(false);
    }, 2000);
  };
  return (
    <nav className="navbar navbar-expand-lg bg-primary px-5 py-3 justify-content-between">
      <a className="navbar-brand text-white font-weight-bold" href="#">
        <img src={Logo} width="50" alt="Brand" className="d-inline-block align-middle mr-2"/>
        Enigma Camp
      </a>
      <div className="text-white text-right">
        <h6>Welcome, {data.username}</h6>
        <h6 style={{ cursor: isLogout ? "not-allowed" : "pointer" }} onClick={onLogoutHandler}>
          Logout
        </h6>
      </div>
    </nav>
  );
};

export default Dashboard;
