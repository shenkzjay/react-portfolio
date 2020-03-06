import React from "react";
import Navigation from "../Header/Navigation";
import {useSpring, animated}  from "react-spring";


function Home () {

    const props = useSpring({config: {duration:2000}, opacity: 1, from: {opacity: 0}})
    return (
    <div className="wrapper">
    

        <Navigation  />
      

    <div className="heading">
                    <div>
                    <animated.div style={props} >
                    <div className="name">OLAJIDE SEUN</div>
                    <hr/>
                   <div className="skills">UI/UX | GRAPHIC DESIGN | WEB DESIGN</div>
                    </animated.div>
                    </div>
                    
    </div>
    </div>
    )
                }

export default Home;