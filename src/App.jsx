import Home from "./Routes/home"
import { Routes, Route } from "react-router-dom"
import NavBar from "./Routes/NavBar"
import Shop from "./Routes/Shop"
import Authentication from "./Routes/Authentication"
import './App.css';
import Checkout from "./Components/Checkout"


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="auth" element={<Authentication />}></Route>
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App;