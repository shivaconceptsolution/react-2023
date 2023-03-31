import React from "react";
export default class RestAPIDelete extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {tdata:'',sid:''}
        this.deleteData = this.deleteData.bind(this)

    }
    acceptSid = (e)=>{
       this.setState({sid:e.target.value})
    }
   
    deleteData(e){
        fetch('http://127.0.0.1:3001/posts/'+this.state.sid,{
            method: 'Delete' 
        }).then(res => res.json()).then((data) => {
          this.setState({ tdata: data })}).catch(console.log);
          e.preventDefault();

    }
    
      render(){
        return(<div>
            <h1>Delete Record Here</h1>
                <form onSubmit={(e)=>this.deleteData(e)}>
                <input type="text" onChange={this.acceptSid} placeholder="Enter ID" />
                <br />
               
                <input type="submit" value="Delete"  />
               </form>
               {this.state.tdata.id}
         
        </div>)
    }
}