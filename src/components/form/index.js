import React from "react";
import  axios from "axios";

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            email:"",
            message:"",
        }

        this.handleSubmit = this.handleSubmit.bind(this)
       this.onNameChange = this.onNameChange.bind(this)
       this.onEmailChange = this.onEmailChange.bind(this)
       this.onMessageChange = this.onMessageChange.bind(this)
    }

    onNameChange(e){
        this.setState({
            name: e.target.value
        })

    }

    onEmailChange(e){
        this.setState({
            email: e.target.value
        })

    }

    onMessageChange(e){
        this.setState({
            message: e.target.value
        })


    }

    handleSubmit(e){
        e.preventDefault();
        axios({
            method: "POST",
            url: "http://localhost:3000/send",
            data: this.state
        })
        .then(
            (response) => {
                if(response.data.status === "success"){
                    alert("Message Sent");
                    this.resetForm()
                }else if(response.data.status === "fail"){
                    alert("Message failed to send.")
                }
            })
    }

    resetForm(){
        this.setState({
            name: "",
            email: "",
            message:"",
        })
    }


    render(){
        return(
             <div  className="App">
                <p class="tiles"> FOR YOUR WEB DESIGN, GRAPHIC DESIGN, UI/UX DESIGN</p>
                <p class="tiles">CONTACT ME!</p>
         <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
            <div className="form-group">
                <label htmlFor="name">  </label> <br />
                <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange} placeholder="name" />
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputEmail"> </label><br />
                <input type="text" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange} placeholder="email"/>
            </div>

            <div className="form-group">
                <label htmlFor="message">  </label><br />
                <textarea className="form-control" row="10" value={this.state.message} onChange={this.onMessageChange} placeholder="message"></textarea>
            </div>
            <button type="submit" className="btn">send</button>

            </form>
    </div>
        )
    }

   

}

    



export default Form;