import { IoPersonOutline } from "react-icons/io5";
import { GrDocumentText } from "react-icons/gr";
import { FiPlayCircle } from "react-icons/fi";
import { HiOutlineMicrophone } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="ta">
          <div className="imgs">
            <img src="./assets/img1.jpg" alt="" />
          </div>
          <div>
            <ul>
              <li>About Us</li>
              <li>Courses</li>
              <li>Events</li>
              <li>Blog</li>
              <li>Contacts</li>
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

      <div className="nnn">
        <div className="card">
          <img className="imgsss" src="./assets/img2.png" alt="" />
          <div className="card-content">
            <div className="card-info">
              <span>Marketing | 📅 September 4, 2020</span>
              <span>⏱ 36 min</span>
            </div>
            <h3>What is traffic arbitrage and does it really make money?</h3>
            <p>
              Pharetra, ullamcorper iaculis viverra parturient sed id sed.
              Convallis proin dignissim lacus, purus gravida...
            </p>
            <a href="#" className="listen-link">
              Listen →
            </a>
          </div>
        </div>

        <div className="card">
          <img className="imgsss" src="./assets/img3.png" alt="" />
          <div className="card-content">
            <div className="card-info">
              <span>Development | 📅 September 1, 2020</span>
            </div>
            <h3>How to choose the first programming language for a beginner</h3>
            <p>
              Turpis sed at magna laoreet gravida consequat tortor placerat.
              Gravida vitae aliquet enim egestas dui...
            </p>
            <a href="#" className="listen-link">
            Read →
            </a>
          </div>
        </div>

        <div className="card">
          <img className="imgsss" src="./assets/img4.png" alt="" />
          <div className="card-content">
            <div className="card-info">
              <span>Design | 📅 August 8, 2020</span>
              <span>⏱ 40 min</span>
            </div>
            <h3>What is traffic arbitrage and does it really make money?</h3>
            <p>
              Pharetra, ullamcorper iaculis viverra parturient sed id sed.
              Convallis proin dignissim lacus, purus gravida...
            </p>
            <a href="#" className="listen-link">
            Watch →
            </a>
          </div>
        </div>
      </div>
<div className="hhhg">
      <div className="err">
     <img className="sll" src="./assets/img5.png" alt="" />
     
     <div className="card-content">
            <div className="card-info">
              <span>HR & Recruting | 📅 August 3, 2020</span>
             
            </div>
            <h3>HR statistics: job search,  interviews, hiring and recruiting</h3>
            <p>
            Massa, lectus nibh consectetur aliquet nunc risus aenean. Leo hac netus bibendum diam adipiscing aenean nisl. Molestie nullam ante mattis ac sit vitae pellentesque mi etiam. Morbi commodo tempor, massa vivamus. A molestie id semper fermentum pretium...
            </p>
            <a href="#" className="listen-link">
              Read →
            </a>
          </div>
      </div>
      <div className="errs">
     <img className="sll" src="./assets/img6.png" alt="" />
     
     <div className="card-content">
            <div className="card-info">
              <span>Management | 📅 August 2, 2020 | </span>
              <span>⏱ 45 min</span>
            </div>
            <h3>What is traffic arbitrage and does it really make money?</h3>
            <p>
              Pharetra, ullamcorper iaculis viverra parturient sed id sed.
              Convallis proin dignissim lacus, purus gravida...
            </p>
            <a href="#" className="listen-link">
              Watch →
            </a>
          </div>
      </div>
      </div>

      <div className="nnns">
        <div className="card">
          <img className="imgsss" src="./assets/img7.png" alt="" />
          <div className="card-content">
            <div className="card-info">
              <span>Design | 📅 July 28, 2020</span>
              <span>⏱ 36 min</span>
            </div>
            <h3>What is traffic arbitrage and does it really make money?</h3>
            <p>
            Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...
            </p>
            <a href="#" className="listen-link">
              Listen →
            </a>
          </div>
        </div>

        <div className="card">
          <img className="imgsss" src="./assets/img8.png" alt="" />
          <div className="card-content">
            <div className="card-info">
              <span>Management | 📅 July 15, 2020</span>
              <span>⏱ 45 min</span>
            </div>
            <h3>Startup: how to build a team that will live longer than a year</h3>
            <p>
            Nisi, massa ut sit faucibus et diam. Faucibus at malesuada at justo scelerisque in nisi, urna...
            </p>
            <a href="#" className="listen-link">
            Watch →
            </a>
          </div>
        </div>

        <div className="card">
          <img className="imgsss" src="./assets/img9.png" alt="" />
          <div className="card-content">
            <div className="card-info">
              <span>Marketing | 📅 July 9, 2020</span>
              <span>⏱ 40 min</span>
            </div>
            <h3>How to get customers to love your business from the start</h3>
            <p>
            Malesuada in augue mi feugiat morbi a aliquet enim. Elementum lacus, pellentesque etiam arcu tristique ac...
            </p>
            <a href="#" className="listen-link">
            Read →
            </a>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default App;