import { useState } from "react";
import "./EditUsers.scss";
import User from "../Types";

const EditUsers = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      fullName: "Иван Иванов",
      department: "Маркетинг",
      country: "Украина",
      status: true,
    },
    {
      id: 2,
      fullName: "Светлана Петрова",
      department: "Продажи",
      country: "США",
      status: false,
    },
    {
      id: 3,
      fullName: "Алексей Смирнов",
      department: "Разработка",
      country: "Украина",
      status: true,
    },
    {
      id: 4,
      fullName: "Елена Кузнецова",
      department: "Дизайн",
      country: "США",
      status: true,
    },
    {
      id: 5,
      fullName: "Дмитрий Сидоров",
      department: "Поддержка",
      country: "Украина",
      status: false,
    },
    {
      id: 6,
      fullName: "Анна Васильева",
      department: "HR",
      country: "США",
      status: true,
    },
    {
      id: 7,
      fullName: "Михаил Федоров",
      department: "Управление",
      country: "Украина",
      status: false,
    },
    {
      id: 8,
      fullName: "Ольга Николаева",
      department: "Аналитика",
      country: "США",
      status: true,
    },
    {
      id: 9,
      fullName: "Сергей Павлов",
      department: "Логистика",
      country: "Украина",
      status: true,
    },
    {
      id: 10,
      fullName: "Татьяна Романова",
      department: "Финансы",
      country: "США",
      status: false,
    },
  ]);

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const getUserChoicedInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const userId = Number(e.target.value);
    const user = users.find((item) => item.id === userId) || null;
    setSelectedUser(user);
  };

  return (
    <div className="edit-users">
      <div className="edit-users-inner">
        <div className="edit-users-title">EDIT USER</div>
        <div className="edit-users-select">
          <p className="edit-users-select-label">User</p>
          <select
            className="edit-users-select-field"
            onChange={getUserChoicedInput}
          >
            <option value="">Выберите пользователя</option>
            {users.map((item) => (
              <option
                className="edit-users-option"
                key={item.id}
                value={item.id}
              >
                {item.fullName}
              </option>
            ))}
          </select>
        </div>

        <h1 className="edit-users-info-title">User Information</h1>
        <div className="edit-users-info">
          <div className="user-field-left">
            <div className="edit-users-info-field">
              <p className="edit-users-info-label">Full Name</p>
              <input
                className="edit-users-info-input"
                placeholder="Full Name"
              />
            </div>

            <div className="edit-users-info-field">
              <p className="edit-users-info-label">Country</p>
              <input className="edit-users-info-input" placeholder="Country" />
            </div>
          </div>

          <div className="user-field-right">
            <div className="edit-users-info-field">
              <p className="edit-users-info-label">Department</p>
              <input
                className="edit-users-info-input"
                placeholder="Department"
              />
            </div>

            <div className="edit-users-info-field">
              <p className="edit-users-info-label">Status</p>
              <input className="edit-users-info-input" placeholder="Status" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default EditUsers;
