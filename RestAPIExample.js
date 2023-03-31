import React from "react";
export default class RestAPIExample extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {tdata:[]}
    }
    componentDidMount() {

        fetch('http://127.0.0.1:3001/posts')

        .then(res => res.json())

        .then((data) => {

          this.setState({ tdata: data })

          console.log(this.state.tdata)

        })

        .catch(console.log)

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
                <td>{person.adderss}</td>
                <td>Edit</td>
                <td>Delete</td>
            </tr>)}   
         </table>
        </div>)
    }
}