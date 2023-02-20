import { useState,useRef } from "react"

function UncontrolledSI()
{
   const p = useRef("")
   const r = useRef("")
   const t = useRef("")
   const[si,setSI] = useState(0)
   function calc(e)
   {
      const res = (parseFloat(p.current.value) * parseFloat(r.current.value) * parseFloat(t.current.value))/100
      setSI(res)
      e.preventDefault();
   }
    return(<div>
      <form action="" onSubmit={calc}>
      <input type="text" ref={p}  placeholder="Enter P" />
      <br /> 
      <input type="text" ref={r}  placeholder="Enter R" />
      <br /> 
      <input type="text" ref={t}  placeholder="Enter T" />
      <br /> 
      <input type="submit" value="Calculate" />
      </form>
      {si}
    </div>)
}
export default UncontrolledSI;