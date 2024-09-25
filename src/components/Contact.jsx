import React from "react";

function Contact({ logo }) {
  return (
    <div>
      <img
        src="https://plus.unsplash.com/premium_photo-1682125235036-d1ab54136ff4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="topImg"
      />
      <div className="flexer">
        <img src={logo} alt="" className="smIcon" />
        <h1>Contact </h1>
      </div>
      
    </div>
  );
}

export default Contact;