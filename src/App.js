import Home from "./pages/Home";
import Swipe from "./pages/Swipe";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { useCookies } from 'react-cookie'

const App =() => {

  const [cs, setC, removeC] = useCookies(['user'])

  const authToken = cs.AuthToken
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {authToken && <Route path="/swipe" element={<Swipe/>}/>}
        {authToken &&<Route path="/main" element={<Main/>}/>}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
