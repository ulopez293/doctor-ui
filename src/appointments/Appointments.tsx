import { useEffect, useState } from 'react' // importa desde donde tengas tu lista de doctores
import { doctorsList } from '../data/doctors'
import { getDB } from '../db/db'

interface Appointment {
  id: string
  doctorId: string
  day: string
  time: string
}

export const Appointments = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([])

  useEffect(() => {
    const fetchAppointments = async () => {
        const db = await getDB()
        const all = await db.getAll('appointments')
        setAppointments(all)
    }

    fetchAppointments()
  }, [])

  const deleteAppointment = async (id: string) => {
    const db = await getDB()
    const tx = db.transaction('appointments', 'readwrite')
    const store = tx.objectStore('appointments')
    await store.delete(id)
    setAppointments(prev => prev.filter(appt => appt.id !== id))
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mb-70 mt-10">
      {appointments.length === 0 && (
        <p className="text-center col-span-full text-gray-500">No appointments scheduled.</p>
      )}

      {appointments.map((appt) => {
        const doctor = doctorsList.find(d => d.id === appt.doctorId)
        if (!doctor) return null

        return (
          <div key={appt.id} className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center">
            <img
              src={doctor.imageUrl}
              alt={doctor.name}
              className="w-20 h-20 rounded-full mb-3 object-cover"
            />
            <h3 className="text-lg font-semibold">{doctor.name}</h3>
            <p className="text-sm text-gray-500">{doctor.specialty}</p>
            <p className="text-sm text-gray-400">{doctor.location}</p>
            <div className="mt-2 text-sm text-blue-600 font-medium">
              {appt.day}, {appt.time}
            </div>
            <div className="mt-1 text-yellow-400">
              {'★'.repeat(doctor.stars) + '☆'.repeat(5 - doctor.stars)}
            </div>
            <button
              onClick={() => deleteAppointment(appt.id)}
              className="cursor-pointer mt-4 px-4 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
            >
              Eliminar
            </button>
          </div>
        )
      })}
    </div>
  )
}
