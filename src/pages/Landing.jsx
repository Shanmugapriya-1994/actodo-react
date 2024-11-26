import Header from "../components/header"
import Card from "../components/card";
import ToDoContainer from "../components/ToDoContainer";
import { useLocation } from "react-router-dom"


function Landing() {
    const newuser = useLocation()

  return (
   <div className="bg-black p-16">
     <div className="bg-[#EFEFEF] p-10 border rounded-md">
       <Header name={newuser.state.user}/>
       <div className="flex justify-between my-5 gap-7 flex-wrap">
         <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}/>
         <Card bgcolor={"#FD6663"} title={"20 December"} subtitle={"14:02:34"}/>
         <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"}/>
       </div>
    <ToDoContainer/>

     </div>
   </div>
  );
}

export default Landing;
