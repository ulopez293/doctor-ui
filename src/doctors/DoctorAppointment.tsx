import type { Doctor } from '../data/doctors';


export const DoctorAppointment = ({ doctor }: { doctor: Doctor }) => {
    return (
        <div className='m-10'>
            <p className="text-sm text-gray-500">{doctor.name}</p>
            <p className="text-sm text-gray-500">{doctor.specialty}</p>
            <p className="text-sm text-gray-500">{doctor.location}</p>
        </div>
    )
}