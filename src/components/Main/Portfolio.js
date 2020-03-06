import React from "react";

import Navigation from "../Header/Navigation";
import MyGallery from "../Main/image";

const portfolio = () => (
        <div className="wholepage">
            <div className="sidebar">
            <Navigation />
            
            <p className="text">PORTFOLIO</p>
            
            </div>

            <div className="fullside">
            <MyGallery  />
               
            
             </div>
        </div>
)
                        
                        

export default portfolio;