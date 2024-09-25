import React from "react";

function About({ logo }) {
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1674230316788-d9c8b92f0d63?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="topImg"
      />
      <div className="flexer">
        <img src={logo} alt="" className="smIcon" />
        <h1>About</h1>
      </div>
      
    </div>
  );
}

export default About;