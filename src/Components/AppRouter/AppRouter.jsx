import { Route, Routes } from "react-router-dom"
import { Home } from "../../Pages/Home/Home"
import { Animals } from "../../Pages/Animals/Animals"
import { Celebrities } from "../../Pages/Celebrities/Celebrities"

export const AppRouter = () => {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="/animals" element={<Animals />}/>
        <Route path="/celebrities" element={<Celebrities />}/>
        {/* <Route path="/pokemon" element={}/> */}
        {/* <Route path="/digimon" element={}/> */}
        {/* <Route path="/" element={}/> */}
    </Routes>
  )
}
