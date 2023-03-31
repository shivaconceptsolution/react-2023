import React, { useState }   from 'react';
import { useLocation } from "react-router";
import axios from 'axios'
function Editstudent()

{

 let data = useLocation();

 console.log(data.state);

 const baseURL = "http://127.0.0.1:3001/posts/"+data.state;

 const [post, setPost] = useState("");
 const [id,setId]= useState(undefined)
 const [name,setName]= useState(undefined)
 const [email,setEmail]= useState(undefined)
 const [add,setAdd]= useState(undefined)
React.useEffect(() => {

    axios.get(baseURL).then((response) => {

      setPost(response.data);
      //console.log("Data is ",response.data[0].name);
      //console.log("Post data is ",post);
       
    });

  }, []);



  const handelName =(e)=>{
   
    setName(e.target.value)

}
const handelEmail =(e)=>{
   
    setEmail(e.target.value)

}
const handelId =(e)=>{
   
    setId(e.target.value)

}
const handelAdd =(e)=>{
   
    setAdd(e.target.value)

}

const changeSubmit =(e)=>{

   if(name==undefined)
   {
    setName(post.name)
   }
   if(email==undefined)
   {
    setEmail(post.email)
   }
   if(id==undefined)
   {
   setId(post.mobileno)
   }
   if(add==undefined)
   {
    setAdd(post.address)
   }

    axios.put(baseURL, {
      id:id,
      name: name,
      email: email,
      address:add

    })

    .then((response) => {

     // setPost(response.data);

     window.location.href="/viewstu";

    });

     

    e.preventDefault();   

}

  if (!post) return null;

   return(

       <div id="middle">
            <form onSubmit={changeSubmit}>
              <table>
              <tr>ID<td></td> <input type="text"  id='id' defaultValue={post.id}  onChange={handelId}       /> <td></td></tr>
              <tr>Name <td></td><td>  <input type="text"  id='name' defaultValue={post.name}  onChange={handelName}   />   </td></tr>
            
              <tr>Email <td></td><td>  <input type="text"  id='email' defaultValue={post.email}   onChange={handelEmail} /></td></tr>
              <tr>Address<td></td><td><input type="text"  id='add' defaultValue={post.address} onChange={handelAdd}/></td></tr>
              <tr><td colSpan={2} align={'left'}><button type="submit" value="Submit">Submit</button></td></tr>
              </table>
              </form>
              </div>

   );

}
export default Editstudent;