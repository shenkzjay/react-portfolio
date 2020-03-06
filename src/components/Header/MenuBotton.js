

import React from "react";

class MenuButton extends React.Component{
    render(){
        return(
            <div>
            <button id = "roundButton" onMouseDown={this.props.handleMouseDown} ><p className="buttonname">MENU</p> </button>
            </div>
        )
    }
}


export default MenuButton;