import AddToDoForm from "./AddToDoForm"
import ToDoList from "./ToDoList"
import { useState } from "react"

function ToDoContainer()
{
    const [activityArr,setactivityArr] = useState([
        {
          id:1,
          activity:"Go for a Walk"
    
        },
        {
          id:2,
          activity:"Have Breakfast"
        },
        {
          id:3,
          activity:"Take Shower"
        }
      ]
    )

    return(
        <div>
            <div className="flex gap-3 flex-wrap">
                <AddToDoForm activityArr={activityArr} setactivityArr={setactivityArr}/>
                <ToDoList activityArr={activityArr} setactivityArr={setactivityArr}/>
            </div>
      </div>
    )
}
export default ToDoContainer