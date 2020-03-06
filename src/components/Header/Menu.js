import React from "react";
import * as ROUTES from '../../contants/route';
import {Link} from "react-router-dom";
import pics from "../../images/pics.jpg";


class Menu extends React.Component{
    render(){
        let visibility = "hide";

        if (this.props.menuVisibility){
            visibility = "show";
        }
        
        return (
        <div id="flyoutMenu" onMouseUp={this.props.handleMouseDown} className={visibility}>
               
                    <ul>
                    <li> <img src={pics}  className="pics" /></li>
        
                        <li>
                            <Link to={ROUTES.HOME}>HOME</Link>
                        </li>
                        <li>
                            <Link to={ROUTES.ABOUT}>ABOUT</Link>
                        </li>
                        <li>
                            <Link to={ROUTES.PORTFOLIO}>PORTFOLIO</Link>
                        </li>
                        <li>
                            <Link to={ROUTES.CONTACT}>CONTACT</Link>
                        </li>
                    </ul>
            
        
        </div>
    )
}
}

export default Menu;
    

    