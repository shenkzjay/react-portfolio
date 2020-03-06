import React from "react";
import Navigation from "../Header/Navigation";
import Form from "../form";
import facebook from "../../images/facebook.png"
import  gmail from  "../../images/gmail.png"
import instagram from "../../images/instagram.png"
import whatsapp from "../../images/whatsapp.png"
import {Link} from  "react-router-dom"


const Contact = () => (
    
    <div className="wholepage">
    <div className="sidebar">
    <Navigation />
   
    <p className="text">CONTACT</p>
    </div>

    <div className="fullside">
        <div>
            <br />
            <br />
       
        <h2 className="subtitle"></h2>

        </div>

           <Form />
           <br />
           <br />

          <Link to="https://www.facebook.com/shenkzjay" ><img src={facebook} className="footericon"/></Link>
           <Link to="mailto:senksjay@gmail.com" ><img src={gmail} className="footericon"/></Link>
           <Link to="https://www.instagram.com/shenkzjay_graphics" ><img src={instagram} className="footericon"/></Link>
           <Link to="https://wa.me/07060557664?text=Hello" ><img src={whatsapp} className="footericon"/></Link>


           


    </div>

    </div>
    
)

export default Contact;