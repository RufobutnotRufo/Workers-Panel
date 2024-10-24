import React, { useContext, useState } from "react";
import "./addUser.scss";
import { MyContext } from "../useContext/Context";

const AddUser: React.FC = () => {
  const { users, setUsers, modalWindowToggle, setModalWindowToggle } =
    useContext(MyContext);

  const [userName, setUserName] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [userDepartment, setUserDepartment] = useState("");
  const [userStatus, setUserStatus] = useState("");

  const createNewUser = () => {
    if (userName && userDepartment && userStatus && userCountry) {
      const newUser = {
        fullName: userName,
        department: userDepartment,
        country: userCountry,
        status: userStatus,
      };
      setUsers([...users, newUser]);
      setUserName("");
      setUserCountry("");
      setUserDepartment("");
      setUserStatus("");
    }
  };

  const toggleWindow = () => {
    setModalWindowToggle(!modalWindowToggle);
  };

  return (
    <div className="add-userField">
      <h1 className="add-user-text">ADD USER</h1>
      <div className="add-user-field-item">
        <div className="left-inputs">
          <div className="add-user-item-field">
            <p className="add-user-item-field-text">Full Name</p>
            <input
              className="add-user-inp"
              placeholder="Enter full name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="add-user-item-field">
            <p className="add-user-item-field-text">Country</p>
            <input
              className="add-user-inp"
              placeholder="Select country"
              value={userCountry}
              onChange={(e) => setUserCountry(e.target.value)}
            />
          </div>
        </div>

        <div className="left-inputs">
          <div className="add-user-item-field">
            <p className="add-user-item-field-text">Department</p>
            <input
              className="add-user-inp"
              placeholder="Select department"
              value={userDepartment}
              onChange={(e) => setUserDepartment(e.target.value)}
            />
          </div>

          <div className="add-user-item-field">
            <p className="add-user-item-field-text">Status</p>
            <input
              className="add-user-inp"
              placeholder="Select status"
              value={userStatus}
              onChange={(e) => setUserStatus(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="btns-add-save">
        <button className="add-save-btn" onClick={toggleWindow}>
          Cancel
        </button>
        <button className="add-save-btn btn-add" onClick={createNewUser}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddUser;
