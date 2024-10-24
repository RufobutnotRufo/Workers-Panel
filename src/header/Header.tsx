import "./Header.scss";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const Header = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleEditUsersClick = () => {
    navigate("/edit-users"); // Navigate to the Edit Users page
  };

  const handleUsersClick = () => {
    navigate("/users"); // Navigate to the Users page
  };

  return (
    <div className="header">
      <div className="header-inner">
        <div className="edit-field">
          <button className="edit-users-btn" onClick={handleEditUsersClick}>
            Edit Users
          </button>
        </div>
        <div className="users">
          <button className="users-btn" onClick={handleUsersClick}>
            Users
          </button>
        </div>
      </div>
      <hr className="line" />
    </div>
  );
};

export default Header;