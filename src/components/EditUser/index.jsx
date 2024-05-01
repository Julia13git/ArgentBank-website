import React, { useRef, useState } from "react";
import "./form.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../actions/profile.action";

function EditUser() {
  // Donnees du user connecté
  const form = useRef();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer);
  const [displayEdit, setDisplayEdit] = useState(false);

  const handleCancel = (e) => {
    setDisplayEdit(false);
  };

  const handlerEdit = (e) => {
    setDisplayEdit(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const userProfile = {
      userName: form.current[0].value,
    };

    dispatch(updateProfile(userProfile));
    setDisplayEdit(false);
  };

  return (
    <>
      {!displayEdit ? (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {user.userName}
          </h1>
          <button className="edit-button" onClick={(e) => handlerEdit()}>
            Edit Name
          </button>
        </div>
      ) : (
        <div className="header">
          <h1>Edit {user.userName} info</h1>
          <div className="form-block">
            <form ref={form}>
              <div className="input-wrapper-inline">
                <label htmlFor="username">User name: </label>
                <input type="text" id="username" defaultValue={user.userName} />
              </div>
              <div className="input-wrapper-inline">
                <label htmlFor="firstname">First name:</label>
                <input
                  type="firstname"
                  id="firstname"
                  defaultValue={user.firstName}
                  disabled
                />
              </div>
              <div className="input-wrapper-inline">
                <label htmlFor="lastname">Last name:</label>
                <input
                  type="lastname"
                  id="lastname"
                  defaultValue={user.lastName}
                  disabled
                />
              </div>
              <div className="button-block">
                <button className="save-cancel" onClick={(e) => handleSave(e)}>
                  Save
                </button>
                <button
                  className="save-cancel"
                  onClick={(e) => handleCancel(e)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default EditUser;
