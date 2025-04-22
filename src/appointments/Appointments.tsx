import { useEffect, useState } from 'react' // importa desde donde tengas tu lista de doctores
import { doctorsList } from '../data/doctors'

interface Appointment {
  doctorId: string
  day: string
  time: string
}

export const Appointments = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([])

  useEffect(() => {
    const fetchAppointments = async () => {
      const db = await openDB()
      const tx = db.transaction('appointments', 'readonly')
      const store = tx.objectStore('appointments')
      const request = store.getAll()
      request.onsuccess = () => {
        setAppointments(request.result as Appointment[])
      }
      request.onerror = () => {
        console.error('Failed to fetch appointments:', request.error)
      }
    }

    fetchAppointments()
  }, [])

  const openDB = async () => {
    return new Promise<IDBDatabase>((resolve, reject) => {
      const request = indexedDB.open('appointments-db', 1)

      request.onupgradeneeded = () => {
        const db = request.result
        if (!db.objectStoreNames.contains('appointments')) {
          db.createObjectStore('appointments', { keyPath: 'id', autoIncrement: true })
        }
      }

      request.onsuccess = () => resolve(request.result)
      request.onerror = () => reject(request.error)
    })
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mb-70 mt-10">
      {appointments.length === 0 && (
        <p className="text-center col-span-full text-gray-500">No appointments scheduled.</p>
      )}

      {appointments.map((appt, index) => {
        const doctor = doctorsList.find(d => d.id === appt.doctorId)
        if (!doctor) return null

        return (
          <div key={index} className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center">
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
          </div>
        )
      })}
    </div>
  )
}
