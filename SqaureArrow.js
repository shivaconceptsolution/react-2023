import { useState } from "react";

var SquareArrow = () =>
{
    const[num,setNum] = useState(0)
    const[sq,setSq] = useState(0)
    var acceptNumber=(e)=>
    {
         setNum(e.target.value)
    }
    var calcSquare = (e) =>
    {
        setSq(num*num)
    }
    return(<div>
        <input type="text" placeholder="Enter Number" onChange={acceptNumber} />
        <br />
        <input type="button" value="Calculate" onClick={calcSquare} />
        <br />
        {sq}
    </div>)
}
export default SquareArrow;