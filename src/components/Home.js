import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import {Zoom, Bounce} from 'react-reveal'
import "./styles/Home.css";


const Home = () => {
  return (
    
    <div className="space-top">
      <h1 className="head1">
      <Zoom left cascade triggerOnce={true} duration={900}> 
        Aspiring Dev full time  
        </Zoom>
         
      </h1>
      

      <h3 className="head3">
        
        
          Welcome there!
        
      </h3>

      <p className="para1">
        
        
          My name is Abhishek and im your guest!
        
      </p>

      <div className="link-wrap">
        <a className="Links" href="https://github.com/Abhishekcs96">
          
            <FaGithubSquare />
          
        </a>

        <a
          className="Links"
          href="https://www.linkedin.com/in/abhishek-chandra-sekar-4018a8137/"
        >
          
            <FaLinkedin />
          
        </a>
      </div>
      
    </div>
    
  );
};

export default Home;
