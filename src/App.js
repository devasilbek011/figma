import { FaInstagram } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { FiPlayCircle } from "react-icons/fi";
import { HiOutlineMicrophone } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";
import { GrFormNextLink } from "react-icons/gr";
import { IoCheckbox } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import Navbar from './components/navbar';
import { FaTelegramPlane } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

import Card from './card';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
  

      <h4 className="h4">Our blog</h4>
      <h1 className="ttt">Createx School Journal</h1>

      <div className="hs">
        <div className="brr">
          <button className="ggw">All</button>
          <button className="gge">
            <GrDocumentText /> Articles
          </button>
          <button className="ggr">
            <FiPlayCircle /> Videos
          </button>
          <button className="ggt">
            <HiOutlineMicrophone /> Podcasts
          </button>
        </div>

        <div className="ll">
          <h4 className="ttsy">Blog category</h4>
          <button className="fss">
            <div className="mm">
              all themes
              <FaChevronDown className="icon" />
            </div>
          </button>
          <input type="text" placeholder="Search blog..." />
        </div>
      </div>

     <Card/>

<div className="foos">

<div>
  <img src="./assets/img10.jpg" alt="" />
</div>

<div>
  <h2 className="hsil">Want to get the best articles weekly? <br /> Subscribe to our newsletter!</h2>

  <div className="class">
    <input className="inputs" type="text" placeholder="     Your working email" />
    <button className="lsa">Subscribe</button>
  </div>

<div className="isl">
  <IoCheckbox className="name" />
  <p className="ulsi">I agree to receive communications from Createx Online School</p>
  </div>
</div>


</div>

<div className="footer">

<div>
  <img src="./assets/img11.png" alt="" />
  <p className="ails">Createx Online School is a leader in online studying. <br /> We have lots of courses and programs from the main <br /> market experts. We provide relevant approaches <br /> to online learning, internships and employment in the <br /> largest companies in the country.</p>

<div className="div">
<FaFacebookF className="iconi1" />
<FaTwitter className="iconi2" />
<BsYoutube className="iconi3" />
<FaTelegramPlane className="iconi4" />
<FaInstagram className="iconi5" />
<FaLinkedinIn className="iconi6" />


</div>


</div>

<div className="display">


  <ul className="yyu">
    <li className="uty">SITE MAP</li>
    <li className="uuy">About Us</li>
    <li className="uuy">Courses</li>
    <li className="uuy">Events</li>
    <li className="uuy">Blog</li>
    <li className="uuy">Contacts</li>
  </ul>


</div>

<div className="display">


  <ul className="yyu">
    <li className="uty">COURSES</li>
    <li className="uuy">Marketing</li>
    <li className="uuy">Management</li>
    <li className="uuy">HR & Recruting</li>
    <li className="uuy">Design</li>
    <li className="uuy">Development</li>
  </ul>


</div>

<div className="display">


  <ul className="yyu">
    <li className="uty">CONTACT US</li>
    <li className="uuy"><IoPhonePortraitOutline /> (405) 555-0128</li>
    <li className="uuy"><MdMailOutline className="br"/> hello@createx.com</li>
 <br />
 <br />
 <br />
 <br />
 <br />
 <br />
 <br />

  </ul>


</div>

<div>
  <h6 className="namesa">SIGN UP TO OUR NEWSLETTER</h6>
  <br />
  <input className="clasis" type="text" placeholder="  Email address" />
  <p className="lcolor">*Subscribe to our newsletter to receive <br /> communications and early updates from <br /> Createx SEO Agency.</p>
  <br />
<br />
<br />
<br />
<br />
</div>



</div> 


      
    </div>
  );
}

export default App;