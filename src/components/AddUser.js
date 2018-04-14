import React, {Component} from "react";

export class AddUser extends Component{
    static defaultOptions = [
        "Agra", "Pune"
    ];

    constructor(){
        super();
        this.state = {
            User: {}
        }
    }
    
    addUser(e){
        e.preventDefault();
        console.log(this.refs.name.value)
        this.setState({
            User:{
                name:this.refs.name.value,
                city:this.refs.city.value
            }
        }, ()=>{
            this.props.addUser(this.state.User);
        });
    }
    render(){
        let categoryOptions = AddUser.defaultOptions.map(city =>{
            return (
                <option key={city} value={city}>{city}</option>
            )
        });
        return (
            <form onSubmit={this.addUser.bind(this)}>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            User
                        </td>
                        <td>
                            <input type="text" ref="name" name="user"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            City
                        </td>
                        <td>
                           <select ref="city">
                               {categoryOptions}
                           </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            
                        </td>
                        <td>
                            <input type="submit" value="Add User"/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        )
    }
}