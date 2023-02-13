import { useState } from "react";

var TableExample = () =>
{
    const[num,setNum] = useState(0)
    const[res,setRes] = useState(0)
    var acceptNumber=(e)=>
    {
         setNum(e.target.value)
    }
    var calcTable = (e) =>
    {
        var c=0;
        var data = ""
        for(var i=1;i<=10;i++)
        {
          c = num * i
          data = data + c + ","
        }
       
            setRes(data)

      
    }
    return(<div>
        <input type="text" placeholder="Enter Number" onChange={acceptNumber} />
        <br />
        <input type="button" value="Calculate" onClick={calcTable} />
        <br />
        {res}
    </div>)
}
export default TableExample;