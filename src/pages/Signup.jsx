import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"

function Signup(props)
{
    const Navigate = useNavigate()
    const [eusers,seteusers] = useState("")
    const [epass,setepass] = useState("")

    function handleEusers(evt)
    {
        seteusers(evt.target.value)
    }
    function handleEpass(evt)
    {
        setepass(evt.target.value)
    }

    const users = props.users
    const setusers = props.setusers

    function addUsers(){
       
        setusers([...users,{username:eusers,password:epass}])
        console.log(users)
        Navigate("/")

    }

    return(
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
               <h1 className="text-3xl font-medium">Hey Hi</h1>
               <p>You Can Signup here :)</p>

               <div className="flex flex-col gap-2 my-2">
                <input  value={eusers} onChange={handleEusers}
                type="text"
                placeholder="Username"
                 className="w-52 border bg-transparent rounded-md border-black p-1"></input>

<input  
value={epass} onChange={handleEpass}
                type="text"
                placeholder="Password"
                 className="w-52 border bg-transparent rounded-md border-black p-1"></input>

<input 
                type="text"
                placeholder="Confirm Password"
                 className="w-52 border bg-transparent rounded-md border-black p-1"></input>
               <button onClick={addUsers} className="bg-[#FCA201] w-24 p-1 rounded-md">Sign Up</button>
               <p>Alredy Have an Account? <Link to={"/"} className="underline" >Login</Link></p>
               </div>

            </div>

        </div>
    )
}

export default Signup