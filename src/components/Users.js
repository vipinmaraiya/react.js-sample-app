import React, {Component} from "react";
import { User } from "./User";

export class Users extends Component{

    onDelete(id){
        this.props.onDelete(id);
    }
    render(){
        let users;
        if(this.props.users){
            users = this.props.users.map(item=>{
                return (
                    <User key={item.id} user={item}
                    onDelete={this.onDelete.bind(this)}
                    />
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
