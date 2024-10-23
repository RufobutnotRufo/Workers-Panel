import { useState } from "react";
import "./Users.scss";
import busketSvg from "../users/ri_delete-bin-3-line.svg";
import User from "../Types";

const Users: React.FC = () => {
  const [selectCountry, setSelectCountry] = useState([
    {
      name: "Ukraine",
      value: "UA",
    },
    {
      name: "United States",
      value: "US",
    },
    {
      name: "Canada",
      value: "CA",
    },
    {
      name: "Germany",
      value: "DE",
    },
    {
      name: "France",
      value: "FR",
    },
    {
      name: "Australia",
      value: "AU",
    },
    {
      name: "Japan",
      value: "JP",
    },
    {
      name: "United Kingdom",
      value: "GB",
    },
    {
      name: "China",
      value: "CN",
    },
    {
      name: "India",
      value: "IN",
    },
  ]);

  const countrySelect = [
    {
      name: "Human Resources",
      value: "HR",
    },
    {
      name: "Finance",
      value: "FIN",
    },
    {
      name: "Information Technology",
      value: "IT",
    },
    {
      name: "Marketing",
      value: "MKT",
    },
    {
      name: "Sales",
      value: "SAL",
    },
    {
      name: "Customer Support",
      value: "CS",
    },
    {
      name: "Research and Development",
      value: "R&D",
    },
    {
      name: "Operations",
      value: "OPS",
    },
    {
      name: "Legal",
      value: "LEG",
    },
    {
      name: "Product Management",
      value: "PM",
    },
  ];

  const statuses = [
    {
      name: "All statuses",
      value: "ALL",
    },
    {
      name: "Active",
      value: "ACTIVE",
    },
    {
      name: "Disabled",
      value: "DISABLED",
    },
  ];

  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      fullName: "Иван Иванов",
      department: "Маркетинг",
      country: "Украина",
      status: "DISABLED",
    },
    {
      id: 2,
      fullName: "Светлана Петрова",
      department: "Продажи",
      country: "США",
      status: "ACTIVE",
    },
    {
      id: 3,
      fullName: "Алексей Смирнов",
      department: "Разработка",
      country: "Украина",
      status: "ACTIVE",
    },
    {
      id: 4,
      fullName: "Елена Кузнецова",
      department: "Дизайн",
      country: "США",
      status: "DISABLED",
    },
    {
      id: 5,
      fullName: "Дмитрий Сидоров",
      department: "Поддержка",
      country: "Украина",
      status: "DISABLED",
    },
    {
      id: 6,
      fullName: "Анна Васильева",
      department: "HR",
      country: "США",
      status: "DISABLED",
    },
    {
      id: 7,
      fullName: "Михаил Федоров",
      department: "Управление",
      country: "Украина",
      status: "ACTIVE",
    },
    {
      id: 8,
      fullName: "Ольга Николаева",
      department: "Аналитика",
      country: "США",
      status: "DISABLED",
    },
    {
      id: 9,
      fullName: "Сергей Павлов",
      department: "Логистика",
      country: "Украина",
      status: "ACTIVE",
    },
    {
      id: 10,
      fullName: "Татьяна Романова",
      department: "Финансы",
      country: "США",
      status: "DISABLED",
    },
  ]);

  return (
    <>
      <div className="users-add">
        <div className="users-inner">
          <div className="users-title">
            <h1 className="users-title-text">USERS</h1>
          </div>
          <div className="warning-about-steps">
            <p className="warning-text">
              Please add at least 3 departmetns to be able to proceed next
              steps.
            </p>
          </div>

          <div className="filter-choice">
            <div className="selection-field">
              <select className="select-field">
                {selectCountry.map((item) => (
                  <option className="option-item">{item.name}</option>
                ))}
              </select>
            </div>

            <div className="selection-field">
              <select className="select-field">
                {countrySelect.map((item) => (
                  <option className="option-item">{item.name}</option>
                ))}
              </select>
            </div>

            <div className="selection-field">
              <select className="select-field">
                {statuses.map((item) => (
                  <option className="option-item">{item.name}</option>
                ))}
              </select>
            </div>

            <div className="reset-changes">
              <button className="reset-changes-btn">
                <img src={busketSvg} />
              </button>
            </div>

            <div className="add-user">
              <button className="add-user-btn">Add User</button>
            </div>
          </div>

          <div className="filter-window">
            <div className="filter-field">
              <div className="full-name">
                <p className="filter-title">Full Name</p>
              </div>
              <div className="filter-field">
                <p className="filter-title">Departament</p>
              </div>
            </div>

            <div className="filter-field">
              <div className="filter-field">
                <p className="filter-title">Country</p>
              </div>
              <div>
                <p className="filter-title">Status</p>
              </div>
            </div>
          </div>





          

          
        </div>
      </div>
    </> 
  );
};

export default Users;
