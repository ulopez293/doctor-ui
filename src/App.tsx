import { Doctors } from "./doctors/Doctors";
import { Footer } from "./footer/Footer";
import { Modal } from "./modal/Modal";
import { Navbar } from "./navbar/Navbar";
// Remove Footer import since the module is not found
export function App() {
  return (
    <div>
      <Navbar />
      <Doctors />
      <Footer />
    </div>
  )
}
