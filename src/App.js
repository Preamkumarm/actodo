import { useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
function App(){
  const[users,setusers]=useState([
    {
      username:"Pream",
      password:"123456"
    },
    {
      username:"abc",
      password:"1234567"
    }
   ])
  return(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login users={users} setusers={setusers}/>}></Route>
    <Route path="/signup" element={<Signup users={users} setusers={setusers}/>}></Route>
    <Route path="/landing" element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}


export default App;
