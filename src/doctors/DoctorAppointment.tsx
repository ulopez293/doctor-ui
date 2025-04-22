import { useAtom } from 'jotai'
import type { Doctor } from '../data/doctors'
import { appointmentAtom } from '../atoms/appointment'


export const DoctorAppointment = ({ doctor }: { doctor: Doctor }) => {
    const [, setAppointment] = useAtom(appointmentAtom)

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const [day, time] = e.target.value.split('|')
        setAppointment({ day, time })
    }

    return (
        <div className='m-10'>
            <p className="text-sm text-gray-500">{doctor.name}</p>
            <p className="text-sm text-gray-500">{doctor.specialty}</p>
            <p className="text-sm text-gray-500">{doctor.location}</p>

            <label className="block mt-4 mb-1 text-sm text-gray-700">
                Selecciona un horario:
            </label>
            <select
                onChange={handleChange}
                defaultValue=""
                className="w-full border rounded p-2 text-sm"
            >
                <option defaultValue="" disabled>-- Elige un horario --</option>
                {doctor.availableTimeSlots.map((slot, index) => (
                    <option key={index} value={`${slot.day}|${slot.time}`}>
                        {slot.day} - {slot.time}
                    </option>
                ))}
            </select>
        </div>
    )
}