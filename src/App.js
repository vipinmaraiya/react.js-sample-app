import React, { Component } from 'react';
import { Users } from "./components/Users";
import { AddUser } from "./components/AddUser";

class App extends Component {
  constructor(){
    super();
    this.state = {
      users:[]
  }
  }
  componentWillMount(){
    this.setState({users:[
      {
          name:"Vipin",
          city:"Pune",
          id: 1
      },
      {
          name:"Ashish",
          city:"Agra",
          id:2
      }
  ]});
  }
  handleAddUser(user){
    this.state.users.push({
      name: user.name,
      city: user.city,
      id: this.state.users.length +1
    });
    console.log(this.state);
    this.setState({
      users:this.state.users
    })
  }
  render() {
    return (
      <div>
        <AddUser addUser={this.handleAddUser.bind(this)}/>
        <Users users={this.state.users}/>
      </div>
    );
  }
}

export default App;
