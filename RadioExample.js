import { useState } from "react";

function RadioExample()
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
         <input type="radio" value="C" name="course" onChange={selectcourse} /> C
         <br />
         <input type="radio" value="CPP" name="course" onChange={selectcourse}  /> CPP
         <br />
         <input type="radio" value="DS" name="course" onChange={selectcourse}  /> DS
         <br />
         <input type="button" value="Click" onClick={showcourse} />
         <p>{res}</p>
    </div>)
}
export default RadioExample;