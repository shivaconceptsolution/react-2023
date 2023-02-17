import { useState } from "react";

function SelectExample()
{
      const[data,setData] = useState("")
      const[res,setRes] = useState("")
      function selectcourse(e)
      {
            setData(e.target.value)
      }
      function showcourse()
      {
           setRes(data)
      }
    return(<div>
          <p>Select Course</p>
          <select onChange={selectcourse}>
            <option value="">Select Course</option>
            <option value="101">C</option>
            <option value="102">CPP</option>
            <option value="103">DS</option>
            <option value="104">JAVA</option>
          </select>
         <input type="button" value="Click" onClick={showcourse} />
         <p>{res}</p>
    </div>)
}
export default SelectExample;