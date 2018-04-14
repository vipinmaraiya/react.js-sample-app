import React, { Component } from "react";

export class User extends Component{
    delete(id){
        this.props.onDelete(id);
    }
    render(){
        return (
            <li className="Project">
               {this.props.user.name} - {this.props.user.city}
               - <a href="#" onClick={this.delete.bind(this, this.props.user.id)}>{this.props.user.name}</a>
            </li>
        )
    }
}