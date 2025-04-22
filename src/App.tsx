import { Route, Routes } from "react-router-dom"
import { Doctors } from "./doctors/Doctors"
import ProtectedLayout from "./components/ProtectedLayout"
import { useAtom } from "jotai"
import { authAtom } from "./atoms/auth"
import { Appointments } from "./appointments/Appointments"


export function App() {
  const [isAuthenticated] = useAtom(authAtom)
  return (
    <div>
      <Routes>
        <Route path="/login" element={<h1 className="text-9xl text-center mt-20">Login</h1>} />
        <Route element={<ProtectedLayout isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<Doctors />} />
          <Route path="/appointment" element={<Appointments />} />
        </Route>
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </div>
  )
}
