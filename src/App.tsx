import { Route, Routes, useNavigate } from "react-router-dom"
import { Doctors } from "./doctors/Doctors"
import ProtectedLayout from "./components/ProtectedLayout"
import { useAtom } from "jotai"
import { authAtom } from "./atoms/auth"
import { Appointments } from "./appointments/Appointments"


export function App() {
  const [isAuthenticated, setAuth] = useAtom(authAtom)
  const navigate = useNavigate()
  return (
    <div>
      <Routes>
        <Route path="/login" element={
          <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-4xl text-center mt-20">Login</h1>
            <button className="cursor-pointer text-4xl p-10 text-center mt-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
              setAuth(true)
              navigate('/')
            }}>Sign In</button>
          </div>
        }
        />
        <Route element={<ProtectedLayout isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<Doctors />} />
          <Route path="/appointment" element={<Appointments />} />
        </Route>
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </div>
  )
}
