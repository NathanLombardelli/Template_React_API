import './style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./pages/home/Home.tsx";
import {Users} from "./pages/users/Users.tsx";
import {Register} from "./pages/register/Register.tsx";
import {Login} from "./pages/login/Login.tsx";

function App() {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/users" element={<Users/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </BrowserRouter>
  )
}

export default App
