import React from "react";

function EditUser() {
  return (
    <form>
      <div className="input-wrapper">
        <label htmlFor="username">User name: </label>
        <input type="text" id="username" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="firstname">First name:</label>
        <input type="firstname" id="firstname" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="lastname">Last name:</label>
        <input type="lastname" id="lastname" />
      </div>
      <button className="">Save</button>
      <button className="">Cancel</button>
    </form>
  );
}

export default EditUser;
