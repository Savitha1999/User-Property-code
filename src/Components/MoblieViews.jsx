



import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Main from "./Main";
import { useLocation } from "react-router-dom";
import EditForm from "./EditForm";

const MoblieView = () => {
  const location = useLocation();
  const { phoneNumber, countryCode } = location.state || {}; // Retrieve passed data

  return (
    <>
<div className="d-flex justify-content-center align-items-center vh-100" style={{ minHeight: "100vh", background: '#E5E5E5' }}>
  <div style={{ maxWidth: '470px', width: "100%", background: 'white', display: "flex", flexDirection: "column", overflow: "hidden" , height: "100%"}}>
    <Main />
  </div>
</div>
    </>
  );
};

export default MoblieView;



