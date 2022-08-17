import React from "react";
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    // <footer>
    //   <div className='footer-container'>
    //     <div className='favicons'>
    //       <SocialIcon url="https://www.linkedin.com/in/shengzhi-luo/" target='_blank' bgColor="#414141" />
    //     </div>
    //     <div className='favicons'>
    //       <SocialIcon url="https://github.com/ShengzhiLuo" target='_blank' bgColor="#414141" />
    //     </div>
    //   </div>
    //   </footer>
      
<div className='footer'>
        <div className='footer-title'>
            <img src={window.logotitle} width="500px" height="500px" className='logo' />
        </div>

        <div className='footer-sections'>
            <div className='footer-explore'>
                <ul>
                    <li>Explore</li>
                    <li></li>
                    <li>Trails</li>
                </ul>
            </div>
            <div className='footer-community'>
                <ul className='flex-center'>
                    {/* <img className='prof-pic' src={window.profile_photo} height="140px" width="140px"/> */}
                    {/* <li>Community</li>
                    <li>Support</li>
                    <li>Members</li>
                    <li>Give Pro</li>
                    <li>AllTrails Gear</li> */}
                </ul>
            </div>
        </div>

        <div className='footer-icons'>
                <div className='foot-left'>
                    <p>An app for the outdoors</p>
                    <img src={window.app_store} width="105px" height="35px" />
                    <img src={window.google_store} width="118px" height="34px" />
                </div>
                <div className="foot-right">
                  <p>Connect with Shengzhi</p>
                <div className='footer-container'>
                        <div className='favicons'>
                        <SocialIcon url="https://www.linkedin.com/in/shengzhi-luo/" target='_blank' bgColor="#414141" />
                         </div>
                        <div className='favicons'>
                          <SocialIcon url="https://github.com/ShengzhiLuo" target='_blank' bgColor="#414141" />
                      </div>
                      <div className='favicons'>
                          <SocialIcon url="https://www.instagram.com/" target='_blank' bgColor="#414141" />
                    </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Footer



