import { useAtom } from "jotai"
import { appointmentAtom, selectedDoctorAtom } from "../atoms/appointment"
import { getDB } from "../db/db"
import { v4 as uuidv4 } from "uuid"

export interface ModalProps {
    title: string
    open: boolean
    onClose: () => void
    children: React.ReactNode
}

export const Modal = ({ title, children, open, onClose }: ModalProps) => {
    const [appointment] = useAtom(appointmentAtom)
    const [doctor] = useAtom(selectedDoctorAtom)

    console.log(appointment)
    console.log(doctor)
    

    const reserve = async () => {
        if (!appointment || !doctor) {
            alert('Doctor or schedule still missing')
            return
          }
      
          const db = await getDB()
          await db.put('appointments', {
            id: uuidv4(), // genera un ID único
            doctorId: doctor.id,
            day: appointment.day,
            time: appointment.time,
            createdAt: new Date().toISOString(),
          })
      
          alert('Reservation saved successfully!')
        onClose()
    }

    return (
        <dialog className="relative z-10" aria-labelledby="modal-title" aria-modal="true" open={open}>
            <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true" />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3 className="text-base font-semibold text-gray-900" id="modal-title">
                                        {title}
                                    </h3>
                                    <div className="mt-2">
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                                type="button"
                                onClick={() => reserve()}
                                disabled={!appointment || !doctor}
                                className={`mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-xs sm:mt-0 sm:w-auto sm:ml-2
                                    ${!appointment || !doctor
                                        ? 'bg-gray-400 text-white cursor-not-allowed'
                                        : 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer'
                                    }
                                `}
                            >
                                Schedule
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-700 sm:mt-0 sm:w-auto sm:mr-2"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </dialog>

    )
}