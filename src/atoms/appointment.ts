import { atom } from 'jotai'

export const appointmentAtom = atom<{ day: string; time: string } | null>(null)

interface SelectedDoctor {
    id: string
}
export const selectedDoctorAtom = atom<SelectedDoctor | null>(null)