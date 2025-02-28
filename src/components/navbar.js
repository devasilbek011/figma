   import { IoPersonOutline } from 'react-icons/io5';
   import { FaBeer } from 'react-icons/fa';
   
import './navbar.css';



function Navbar() {
  return (
    <div>
           <div className="header">
        <div className="ta">
          <div className="imgs">
            <img src="./assets/img1.jpg" alt="" />
          </div>
          <div>
            <ul className='l898'>
              <li className='l0'>About Us</li>
              <li className='l0'>Courses</li>
              <li className='l0'>Events</li>
              <li className='l0'>Blog</li>
              <li className='l0'>Contacts</li>
            </ul>
          </div>
        </div>
        <div className="btn">
          <button className="bts">Get consultation</button>
          <div className="ccc">
            <IoPersonOutline className="tepa" />
            <h4>Log in / Register</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar