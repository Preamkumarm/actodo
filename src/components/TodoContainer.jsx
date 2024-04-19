import Addtodoform from "./AddTodoForm"
import Todolist from "./TodoList"
import { useState } from "react";
function Todocontainer(){

    const [activityArr, setactivityArr] = useState([
        {
          id: 1,
          activity: "Go for a Walk",
        },
        {
          id: 2,
          activity: "Take a Breakfast",
        },
        {
          id: 3,
          activity: "Take a shower",
        },
      ]);
    return(<div>

        <div className="flex gap-5 flex-wrap">
        
       <Addtodoform activityArr={activityArr} setactivityArr={setactivityArr}/>

       <Todolist activityArr={activityArr} setactivityArr={setactivityArr}/>
        

        </div>
    </div>)
}

export default Todocontainer