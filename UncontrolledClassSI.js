import React from "react";
export class UncontrolledClassSI extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {res:''}
        this.p = React.createRef()
        this.r = React.createRef()
        this.t = React.createRef()
        this.calc = this.calc.bind(this)
    }
    calc(e)
    {
        const r = (parseFloat(this.p.current.value) * parseFloat(this.r.current.value) * parseFloat(this.t.current.value))/100
        this.setState({res:r})
        e.preventDefault();
    }
    render()
    {
        return(<div>
            <form action="" onSubmit={this.calc}>
            <input type="text" ref={this.p}  placeholder="Enter P" />
            <br /> 
            <input type="text" ref={this.r}  placeholder="Enter R" />
            <br /> 
            <input type="text" ref={this.t}  placeholder="Enter T" />
            <br /> 
            <input type="submit" value="Calculate" />
            </form>
            {this.state.res}
          </div>)
    }
}