import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import "./index.css";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;