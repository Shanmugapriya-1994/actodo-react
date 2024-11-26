import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"

function Login(props)
{

   const Navigate = useNavigate()
    const [eusers,seteusers] = useState()
    const [epass,setepass] = useState()
    const [ruser,setruser] = useState(true)

  const users = props.users
   
  function handleUsers(evt){
    seteusers(evt.target.value)
  }
  function handlepass(evt){
    setepass(evt.target.value)
  }
   function addLogin(){
      var userfound = false
        users.forEach(function(item)
        {
          if(item.username === eusers && item.password === epass){
            console.log("Login successfull")
            userfound = true
            //console.log(users)
            Navigate("/landing",{state:{user:eusers}})
          }
          if(userfound == false)
            {
            console.log("Login Failed")
            setruser(false)
          }
        })
     }
    return(
        <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
           <h1 className="text-3xl font-medium">Hey Hi</h1>
           {ruser? <p>I Help you manage your activities after you login :)</p> : 
           <p className="text-red-500">Please Sign Up before you Login</p>}
           

           <div className="flex flex-col gap-2 my-2">
            <input value={eusers} onChange={handleUsers}
            type="text"
            placeholder="Username"
             className="w-52 border bg-transparent rounded-md border-black p-1"></input>

<input 
            type="text" value={epass} onChange={handlepass}
            placeholder="Password"
             className="w-52 border bg-transparent rounded-md border-black p-1"></input>

         <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={addLogin}>Login</button>
           <p>Don't Have an Account? <Link to={"/signup"} className="underline" >Sign Up</Link></p>
           </div>

        </div>

    </div>
    )
}

export default Login