import React, { Component } from "react";

export class User extends Component{
    render(){
        return (
            <li className="Project">
               {this.props.user.name} - {this.props.user.city}
            </li>
        )
    }
}