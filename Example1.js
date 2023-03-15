import React from "react"
export class Example1 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {a: 1000};
    }
   
    componentDidMount() {
        setTimeout(() => {
          this.setState({a:20})
        }, 1000)
      }
    render() {
      return (
        <h1>{this.state.a}</h1>
      );
    }
  }
  