import { useState } from "react"
import ToDoItem from "./ToDoItem"
function ToDoList(props)
{

   const activityArr = props.activityArr
   const setactivityArr = props.setactivityArr
    return(
        <div className="bg-[#BDB4EA] p-2 border rounded-md flex-grow">
        <h1 className="text-2xl font-medium">Today's Activity</h1> 
        {activityArr.length==0? <p>You haven't added anything yet</p> :""}
           
          {
            activityArr.map(function(item,index)
          {
            return<ToDoItem index={index} activity={item.activity} id={item.id} activityArr={activityArr} setactivityArr={setactivityArr} />
          })
          }      
      </div>
    )
}

export default ToDoList