import React from "react";
import { SocialIcon } from 'react-social-icons';
import { MDBIcon } from 'mdb-react-ui-kit';
import { FaLinkedin, FaGithub, FaAngellist } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <div className='footer'>
          <div className='footer-icons'>
                <div className='foot-left'>
                    {/* <p id = "foot-words">An app for the outdoors</p>
                    <img src={window.app_store} width="105px" height="35px" />
                    <img src={window.google_store} width="118px" height="34px" /> */}
                </div>
                <div className="foot-right">
                  <p>Connect with Shengzhi Luo</p>
                  <p>罗圣之</p>
                <div className='footer-container'>
                      <a href= 'https://www.linkedin.com/in/shengzhi-luo/'><FaLinkedin style={{ color: '#6b8e23',fontSize: "50px"}} /></a>
                      <a href= 'https://github.com/ShengzhiLuo'><FaGithub style={{ color: '#6b8e23' ,fontSize: "50px"}} /></a>
                      <a href= 'https://angel.co/u/shengzhi-luo'><FaAngellist style={{ color: '#6b8e23' ,fontSize: "50px"}} /></a>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Footer



