import { useState } from "react";

function SquareExample()
{
    const[num,setNum] = useState(0)
    const[sq,setSq] = useState(0)
    function acceptNumber(e)
    {
         setNum(e.target.value)
    }
    function calcSquare(e)
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
export default SquareExample;