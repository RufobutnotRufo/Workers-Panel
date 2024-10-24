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

  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const getUserChoicedInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const userId = Number(e.target.value);
    const user = users.find((item) => item.id === userId) || null;
    setSelectedUser(user);
    setIsDisabled(user === null);
  };

  const changeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedUser) {
      setSelectedUser({ ...selectedUser, fullName: e.target.value });
      setIsDisabled(false);
    }
  };

  const changeUserCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedUser) {
      setSelectedUser({ ...selectedUser, country: e.target.value });
      setIsDisabled(false);
    }
  };

  const changeUserDepartment = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedUser) {
      setSelectedUser({ ...selectedUser, department: e.target.value });
      setIsDisabled(false);
    }
  };

  const changeUserStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedUser) {
      setSelectedUser({ ...selectedUser, status: e.target.value });
      setIsDisabled(false);
    }
  };

  const saveChanges = () => {
    const arr = users.map((item) => {
      if (selectedUser?.id === item.id) {
        return { ...item, ...selectedUser };
      }
      return item;
    });
    setUsers(arr);
  };

  const resetChanges = () => {
    setSelectedUser(null); 
    setIsDisabled(true);
  };

  return (
    <>
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
                  onChange={changeUserName}
                  className="edit-users-info-input"
                  value={selectedUser?.fullName || ""}
                />
              </div>

              <div className="edit-users-info-field">
                <p className="edit-users-info-label">Country</p>
                <input
                  onChange={changeUserCountry}
                  className="edit-users-info-input"
                  value={selectedUser?.country || ""}
                />
              </div>
            </div>

            <div className="user-field-right">
              <div className="edit-users-info-field">
                <p className="edit-users-info-label">Department</p>
                <input
                  onChange={changeUserDepartment}
                  className="edit-users-info-input"
                  value={selectedUser?.department || ""}
                />
              </div>

              <div className="edit-users-info-field">
                <p className="edit-users-info-label">Status</p>
                <input
                  onChange={changeUserStatus}
                  className="edit-users-info-input"
                  value={selectedUser?.status || ""}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="set-changes-field">
          <div className="undo">
            <button className="clear-inputs-btn" onClick={resetChanges}>
              Undo
            </button>
          </div>
          <div className="save">
            <button
              className="save-changes-btn"
              disabled={isDisabled}
              onClick={saveChanges}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUsers;
