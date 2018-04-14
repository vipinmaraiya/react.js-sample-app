import React, {Component} from "react";
import { User } from "./User";

export class Users extends Component{

    render(){
        let users;
        if(this.props.users){
            users = this.props.users.map(item=>{
                return (
                    <User key={item.id} user={item}/>
                )
            });
        }
        return (
            <ul>
            {users}
            </ul>
            
        )
    }
}
