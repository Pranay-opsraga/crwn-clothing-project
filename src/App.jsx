import Home from "./Routes/home"
import { Routes, Route } from "react-router-dom"
import NavBar from "./Routes/NavBar"
import Shop from "./Routes/Shop"
import './App.css';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
      </Route>
    </Routes>
  )
}

export default App;