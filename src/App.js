import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from "./pages/Signup";
import Login from './pages/Login';
import Landing from "./pages/Landing";

function App()
{
  const [users,setusers] = useState([
    {
        username :"priya",
        password:"1221"
    }
  ]
  )
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login users={users} setusers={setusers} />} />
      <Route path='/signup' element={<Signup users={users} setusers={setusers}/>} />
      <Route path='/landing' element={<Landing/>} />
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
