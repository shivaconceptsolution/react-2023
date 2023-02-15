import React from "react"
export class Student extends React.Component
{
       constructor(props)
       {
        super(props)
        this.state ={rno:"",name:"",res:""}
        this.enterRno =  this.enterRno.bind(this)
        this.enterName=  this.enterName.bind(this)
        this.displayResult=this.displayResult.bind(this)
       }
       enterRno(e)
       {
          this.setState({"rno":e.target.value})
       }
       enterName(e)
       {
           this.setState({"name":e.target.value})
       }
       displayResult(e)
       {
        var r = this.state.name + "," + this.state.rno
         this.setState({"res":r})
         e.preventDefault()
       }
       render()
       {
          return(<div>
             <form>
               <input type="text" placeholder="Enter rno" onChange={this.enterRno}   /> 
               <br/>
               <input type="text" placeholder="Enter name" onChange={this.enterName}  />
               <br/>
               <input type="submit" value="Submit" onClick={this.displayResult} />
             </form>
             <p>{this.state.res}</p>
          </div>)
       }
}
