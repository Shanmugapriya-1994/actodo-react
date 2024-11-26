import { useState } from "react"

function AddToDoForm(props){
    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr
    
    const [newactivity,setnewactivity] = useState("")

    function handleChange(evt){
        setnewactivity(evt.target.value)
    }
function handleAddActivity(){
  setactivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
  setnewactivity("")
}

    return(
       <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-medium">Manage Activities</h1>
        <div>
            <input value={newactivity} type="text" onChange={handleChange} className=" border border-black bg-transparent p-1" placeholder="Next Activity?"/>
            <button onClick={handleAddActivity} className="bg-black text-white border p-1 border-black">Add</button>
        </div>
      </div>
    )
}

export default AddToDoForm