import React from "react";
export default class RestAPIPost extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {tdata:'',sid:'',name:'',email:'',address:''}
        this.insertData = this.insertData.bind(this)

    }
    acceptSid = (e)=>{
       this.setState({sid:e.target.value})
    }
    acceptName = (e)=>{
        this.setState({name:e.target.value})
    }
    acceptEmail = (e)=>{
        this.setState({email:e.target.value})
    }
    acceptAddress = (e)=>{
        this.setState({address:e.target.value})
    }
    insertData(e){
        fetch('http://127.0.0.1:3001/posts',{
            method: 'POST',
            body: JSON.stringify({
             id:this.state.sid,
             name:this.state.name,
             email:this.state.email,
             address:this.state.address
         }),headers:{"content-type":"application/json; charset=UTF-8"}  
        }).then(res => res.json()).then((data) => {
          this.setState({ tdata: data })}).catch(console.log);
          e.preventDefault();

    }
    
      render(){
        return(<div>
            <h1>Add Record Here</h1>
                <form onSubmit={(e)=>this.insertData(e)}>
                <input type="text" onChange={this.acceptSid} placeholder="Enter ID" />
                <br />
                <input type="text" onChange={this.acceptName} placeholder="Enter Name" />
                <br />
                <input type="text" onChange={this.acceptEmail} placeholder="Enter Email" />
                <br />
                <input type="text" onChange={this.acceptAddress} placeholder="Enter Address" />
                <br />
                <input type="submit" value="Insert"  />
               </form>
               {this.state.tdata.id}
         
        </div>)
    }
}