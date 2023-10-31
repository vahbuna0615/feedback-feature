import './Navbar.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaRegCircleUser } from 'react-icons/fa6';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Navbar = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openLogDrop, setOpenLogDrop] = useState(false);
  const [openLearnMenu, setOpenLearnMenu] = useState(false);
  const [openPracticeMenu, setOpenPracticeMenu] = useState(false);

  return (
    <div className="navbar">
      <div className='title'>
        <p className="comp-name">THE <span id="product">PRODUCT</span> PLATFORM</p>
      </div>
      <div className='nav-links'>
        <div style={{cursor:'pointer'}} onClick={() => setOpenLearnMenu(!openLearnMenu)}>
          <p>Learn <RiArrowDropDownLine/></p>
        </div>
        <div className={`learn-dropdown ${openLearnMenu ? 'active': 'inactive'}`}>
          <ul>
            <li className='dropdown-item'>
              <Link to={'/'}>InterviewQuestions</Link>
            </li>
            <li className='dropdown-item'>
              <Link to={'/concept-cards'}>Concept Cards</Link>
            </li>
          </ul>
        </div>
        <div style={{cursor:'pointer'}} onClick={() => setOpenPracticeMenu(!openPracticeMenu)}>
          <p>Practice <RiArrowDropDownLine/></p>
        </div>
        <div className={`prac-dropdown ${openPracticeMenu ? 'active': 'inactive'}`}>
          <ul>
            <li className='dropdown-item'>
              <Link to={'/practice-qs'}>Practice Questions</Link>
            </li>
            <li className='dropdown-item'>
              <Link to={'/quizzes'}>Quizzes</Link>
            </li>
          </ul>
        </div>
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