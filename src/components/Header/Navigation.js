import React from "react";
import {Link} from "react-router-dom";
import * as ROUTES from '../../contants/route';
import MenuButton from "./MenuBotton";
import Menu from "./Menu";




class Navigation extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            visible : false,
        }

        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
    }

toggleMenu(){
    this.setState({
        visible : !this.state.visible
    });
}

handleMouseDown(e){
    this.toggleMenu();
    console.log("clicked");
    e.stopPropagation();
}

                render(){
                    return(
                       
                        <div  id="mySidenav" className="Navbar">
                         <MenuButton handleMouseDown={this.handleMouseDown} />
                         <Menu handleMouseDown={this.handleMouseDown} menuVisibility ={this.state.visible} />

                        </div>
                    )
                }
                
}
               

export default Navigation;