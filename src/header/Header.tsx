import { useState } from 'react';
import './Header.scss'

const Header = () => {

  const [stateBoll,setState] = useState(false)
  return (
    <div className="header">
      <div className="header-inner">
        <div className="edit-field">
          <button className="edit-users-btn">Edit Users </button>
        </div>
        <div className="users">
          <button className="users-btn">Users</button>
        </div>
      </div>
      <hr className='line'></hr>
    </div>
  );
};

export default Header;
