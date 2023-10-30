import { useState } from 'react';
import { FaRegCircleUser } from 'react-icons/fa6';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Navbar = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openLogDrop, setOpenLogDrop] = useState(false);

  return (
    <div className="navbar">
      <div className='title'>
        <p className="comp-name">THE <span id="product">PRODUCT</span> PLATFORM</p>
      </div>
      <div className='nav-links'>
        <p>Learn <RiArrowDropDownLine/></p>
        <p>Practice <RiArrowDropDownLine/></p>
        <div className='user' onClick={() => setOpenLogDrop(!openLogDrop)}>
          <FaRegCircleUser size={30}/>
        </div>
        <div className={`login-dropdown ${openLogDrop? 'active':'inactive'}`}>
          <ul>
            <li className='dropdown-item' onClick={() => setIsLoggedIn(!isLoggedIn)}>
              {isLoggedIn ? 'Logout': 'Login'}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;