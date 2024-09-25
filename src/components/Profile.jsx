import React from "react";

function Profile({logo}) {
  return (
    <div>
        <img src="https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="topImg" />
      <div className="flexer">
      <img src={logo} alt="" className="smIcon" />
      <h1>Profile</h1>
      </div>
    
      
    </div>
  );
}

export default Profile;