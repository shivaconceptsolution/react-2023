import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default class AxiosExample extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {tdata:[]}
    }
    componentDidMount() {

        
        axios.get('http://127.0.0.1:3001/posts').then((repos) => {
    
        this.setState({ tdata: repos.data })
  
       // console.log(this.state.tdata)
      });
      }
      render(){
        return(<div>
          <h1>User Information</h1>
         <table border='1'>
            <tr><th>UserId</th><th>Name</th><th>Email</th><th>Address</th></tr>
            {this.state.tdata.map((person,i)=>   
             <tr key={i}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>{person.address}</td>
                <td><Link to="/editstu" state={person.id}>Edit</Link></td>
                <td><Link to="/deletestu" state={person.id}>Delete</Link></td>
            </tr>)}   
         </table>
        </div>)
    }
}