import React, { useState } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
const Main = () => {

  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="User"/>
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Sam.</span></p>
                <p>How can i help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to see on upcoming road trip</p>
                    <img src={assets.compass_icon} alt=""/>
                </div>
                <div className="card">
                    <p>Help explain in a kid-friendly way: why do rainbows appear?</p>
                    <img src={assets.bulb_icon} alt=""/>
                </div>
                <div className="card">
                    <p>Help me draft a response to a friend</p>
                    <img src={assets.message_icon} alt=""/>
                </div>
                <div className="card">
                    <p>Settle a debate: how should you store bread?</p>
                    <img src={assets.code_icon} alt=""/>
                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder="Enter a promp here" />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                Gemini may display inaccurate info, including about people, so double-check its responses.<a href="http://sammuhoza.pro/"> Your privacy & Gemini Apps</a> 
                </p>

            </div>
        </div>
        
    </div>
    
  );
};
export default Main;
