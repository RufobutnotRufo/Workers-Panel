import { useContext, useState, useEffect } from "react";
import "./Users.scss";
import busketSvg from "../users/ri_delete-bin-3-line.svg";
import { MyContext } from "../useContext/Context";
import AddUser from "../addUser/addUser";

interface User {
  id?: number;
  fullName?: string;
  department?: string;
  country?: string;
  status?: string;
}

const Users: React.FC = () => {
  const { users, setUsers, modalWindowToggle, setModalWindowToggle } =
    useContext(MyContext);

  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
  const [selectedCountry, setSelectedCountry] = useState<string>("ALL");
  const [selectedStatus, setSelectedStatus] = useState<string>("ALL");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("ALL");

  const getUniqueOptions = (key: keyof User) => {
    const uniqueValues = Array.from(
      new Set(users.map((user: any) => user[key]))
    );
    return uniqueValues.map((value) => ({ value, name: value }));
  };

  const countries = getUniqueOptions("country");
  const departments = getUniqueOptions("department");
  const statuses = getUniqueOptions("status");

  const filterUsers = () => {
    let filtered = users;

    if (selectedCountry !== "ALL") {
      filtered = filtered.filter(
        (user: any) => user.country === selectedCountry
      );
    }

    if (selectedDepartment !== "ALL") {
      filtered = filtered.filter(
        (user: any) => user.department === selectedDepartment
      );
    }

    if (selectedStatus !== "ALL") {
      filtered = filtered.filter((user: any) => user.status === selectedStatus);
    }

    setFilteredUsers(filtered);
  };

  useEffect(() => {
    filterUsers();
  }, [selectedCountry, selectedDepartment, selectedStatus, users]);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  const handleDepartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDepartment(e.target.value);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(e.target.value);
  };

  const resetFilters = () => {
    setFilteredUsers(users);
    setSelectedCountry("ALL");
    setSelectedStatus("ALL");
    setSelectedDepartment("ALL");
  };

  const deleteUser = (id: number) => {
    const updatedUsers = filteredUsers.filter((user) => user.id !== id);
    setFilteredUsers(updatedUsers);
    setUsers(updatedUsers);
  };

  const toggleModalWindow = () => {
    setModalWindowToggle(!modalWindowToggle);
  };

  return (
    <>
    <div className={`users-add ${modalWindowToggle ? 'dimmed' : ''}`}>
      <div className="users-inner">
        <h1 className="users-title-text">USERS</h1>
        <p className="warning-text">
          Please add at least 3 departments to be able to proceed to the next steps.
        </p>

        <div className="filter-choice">
          <select className="select-field" onChange={handleCountryChange}>
            <option value="ALL">All Countries</option>
            {countries.map((item: any) => (
              <option key={item.id} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>

          <select className="select-field" onChange={handleDepartmentChange}>
            <option value="ALL">All Departments</option>
            {departments.map((item: any) => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>

          <select className="select-field" onChange={handleStatusChange}>
            <option value="ALL">All Statuses</option>
            {statuses.map((item: any) => (
              <option key={item.id} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>

          <button className="reset-changes-btn" onClick={resetFilters}>
            <img src={busketSvg} alt="reset" />
          </button>

          <button className="add-user-btn" onClick={toggleModalWindow}>
            Add User
          </button>
        </div>

        <table className="user-table">
          <thead className="users">
            <tr className="users-items">
              <th className="users-item">Full Name</th>
              <th className="users-item">Department</th>
              <th className="users-item">Country</th>
              <th className="users-item">Status</th>
              <th className="users-item">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((item: any) => (
              <tr key={item.id}>
                <td className="user-field">{item.fullName}</td>
                <td className="user-field-item">{item.department}</td>
                <td className="user-field-item">{item.country}</td>
                <td className="user-field-item">{item.status}</td>
                <td className="user-field-item-btn">
                  <button
                    className="user-field-item-btn-delete"
                    onClick={() => deleteUser(item.id)}
                  >
                    <img src={busketSvg} alt="delete" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
     {modalWindowToggle && <AddUser />}
    </>
  );
};

export default Users;
