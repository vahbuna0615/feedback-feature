import { FaRegCircleUser } from 'react-icons/fa6';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Navbar = () => {
  
  return (
    <div className="navbar">
      <div className='title'>
        <p className="comp-name">THE <span id="product">PRODUCT</span> PLATFORM</p>
      </div>
      <div className='nav-links'>
        <p>Learn <RiArrowDropDownLine/></p>
        <p>Practice <RiArrowDropDownLine/></p>
        <FaRegCircleUser size={30}/>
      </div>
    </div>
  )
}

export default Navbar;