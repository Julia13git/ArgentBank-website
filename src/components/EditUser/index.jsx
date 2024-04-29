import React, { useRef, useState } from "react";
import "./form.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../actions/profile.action";

function EditUser() {
  // Donnees du user connecté
  const form = useRef();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer?.user);
  const token = useSelector((state) => state.userReducer?.token);
  const [displayEdit, setDisplayEdit] = useState(false);

  const handleCancel = (e) => {
    setDisplayEdit(false);
  };

  const handlerEdit = (e) => {
    setDisplayEdit(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const userName = {
      userName: form.current[0].value,
      token: token,
    };

    dispatch(updateProfile(userName));
    setDisplayEdit(false);
  };

  return (
    <>
      {!displayEdit ? (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {user.firstName} {user.lastName}
          </h1>
          <button className="edit-button" onClick={(e) => handlerEdit()}>
            Edit Name
          </button>
        </div>
      ) : (
        <div className="header">
          <h1>Edit user info</h1>
          <br />
          {user.firstName} {user.lastName}
          <div className="form-block">
            <form ref={form}>
              <div className="input-wrapper">
                <label htmlFor="username">User name: </label>
                <input type="text" id="username" defaultValue={user.userName} />
              </div>
              <div className="input-wrapper">
                <label htmlFor="firstname">First name:</label>
                <input
                  type="firstname"
                  id="firstname"
                  defaultValue={user.firstName}
                  disabled
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="lastname">Last name:</label>
                <input
                  type="lastname"
                  id="lastname"
                  defaultValue={user.lastName}
                  disabled
                />
              </div>
              <div className="button-block">
                <button onClick={(e) => handleSave(e)}>Save</button>
                <button onClick={(e) => handleCancel(e)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default EditUser;
