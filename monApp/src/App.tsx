import './style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home.tsx";
import {Users} from "./pages/Users.tsx";

function App() {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/users" element={<Users/>}></Route>
            </Routes>
        </BrowserRouter>
  )
}

export default App
