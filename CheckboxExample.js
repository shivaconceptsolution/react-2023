import { useState } from "react";

function CheckboxExample()
{
      const[data1,setData1] = useState("")
      const[data2,setData2] = useState("")
      const[data3,setData3] = useState("")
      const[res,setRes] = useState("")
      const selectcourse1=(e)=>
      {
           if(e.target.checked)
           {
            setData1(e.target.value)
           }
           else
           {
            setData1("")
           }
      }
      function selectcourse2(e)
      {
        if(e.target.checked)
        {
         setData2(e.target.value)
        }
        else
        {
         setData2("")
        }
      }
      function selectcourse3(e)
      {
        if(e.target.checked)
        {
         setData3(e.target.value)
        }
        else
        {
         setData3("")
        }
      }
      function showcourse(e)
      {
           setRes(data1 + " "+ data2 + " "+ data3)
      }
    return(<div>
          <p>Select Course</p>
         <input type="checkbox" value="C" name="course" onChange={selectcourse1} /> C
         <br />
         <input type="checkbox" value="CPP" name="course" onChange={selectcourse2}  /> CPP
         <br />
         <input type="checkbox" value="DS" name="course" onChange={selectcourse3}  /> DS
         <br />
         <input type="button" value="Click" onClick={showcourse} />
         <p>{res}</p>
    </div>)
}
export default CheckboxExample;