import type { Specialty } from "./specialties";
import type { TimeSlot } from "./timeSlots";

export interface Doctor {
    id: string; // Agregamos el campo id
    name: string;
    imageUrl: string;
    specialty: Specialty;
    availability: boolean;
    location: string;
    availableTimeSlots: TimeSlot[];
}

export const doctorsList: Doctor[] = [
    {
        id: 'doctor-1', // ID único
        name: 'Lucas Fernandes',
        imageUrl: 'https://xsgames.co/randomusers/assets/avatars/male/1.jpg',
        specialty: 'Neurology',
        availability: true,
        location: 'New York, USA',
        availableTimeSlots: [
            { day: 'Monday', time: '09:00' },
            { day: 'Wednesday', time: '14:00' },
            { day: 'Friday', time: '10:30' },
        ],
    },
    {
        id: 'doctor-2', // ID único
        name: 'Camila Rocha',
        imageUrl: 'https://xsgames.co/randomusers/assets/avatars/female/2.jpg',
        specialty: 'Obstetrics and Gynecology',
        availability: true,
        location: 'Los Angeles, USA',
        availableTimeSlots: [
            { day: 'Tuesday', time: '11:00' },
            { day: 'Thursday', time: '16:30' },
            { day: 'Saturday', time: '09:00' },
        ],
    },
    {
        id: 'doctor-3', // ID único
        name: 'Gabriel Silva',
        imageUrl: 'https://xsgames.co/randomusers/assets/avatars/male/3.jpg',
        specialty: 'Emergency Medicine',
        availability: false,
        location: 'London, UK',
        availableTimeSlots: [
            { day: 'Monday', time: '08:00' },
            { day: 'Thursday', time: '12:00' },
        ],
    },
    {
        id: 'doctor-4', // ID único
        name: 'Raissa Costa',
        imageUrl: 'https://xsgames.co/randomusers/assets/avatars/female/4.jpg',
        specialty: 'Dermatology',
        availability: true,
        location: 'Paris, France',
        availableTimeSlots: [
            { day: 'Monday', time: '13:00' },
            { day: 'Tuesday', time: '14:30' },
            { day: 'Thursday', time: '09:00' },
        ],
    },
    {
        id: 'doctor-5', // ID único
        name: 'Vitor Carvalho',
        imageUrl: 'https://xsgames.co/randomusers/assets/avatars/male/5.jpg',
        specialty: 'Oncology',
        availability: true,
        location: 'São Paulo, Brazil',
        availableTimeSlots: [
            { day: 'Wednesday', time: '15:00' },
            { day: 'Friday', time: '11:30' },
        ],
    },
    {
        id: 'doctor-6', // ID único
        name: 'Amanda Pereira',
        imageUrl: 'https://xsgames.co/randomusers/assets/avatars/female/6.jpg',
        specialty: 'Pediatrics',
        availability: true,
        location: 'Madrid, Spain',
        availableTimeSlots: [
            { day: 'Monday', time: '10:00' },
            { day: 'Thursday', time: '14:00' },
            { day: 'Saturday', time: '08:00' },
        ],
    },
    {
        id: 'doctor-7', // ID único
        name: 'Felipe Martins',
        imageUrl: 'https://xsgames.co/randomusers/assets/avatars/male/7.jpg',
        specialty: 'Surgery',
        availability: true,
        location: 'Tokyo, Japan',
        availableTimeSlots: [
            { day: 'Tuesday', time: '09:00' },
            { day: 'Thursday', time: '15:00' },
        ],
    },
    {
        id: 'doctor-8', // ID único
        name: 'Larissa Gomes',
        imageUrl: 'https://xsgames.co/randomusers/assets/avatars/female/8.jpg',
        specialty: 'Internal Medicine',
        availability: true,
        location: 'Sydney, Australia',
        availableTimeSlots: [
            { day: 'Wednesday', time: '11:00' },
            { day: 'Friday', time: '13:00' },
        ],
    },
    {
        id: 'doctor-9', // ID único
        name: 'Thiago Souza',
        imageUrl: 'https://xsgames.co/randomusers/assets/avatars/male/9.jpg',
        specialty: 'Radiology',
        availability: false,
        location: 'Berlin, Germany',
        availableTimeSlots: [
            { day: 'Tuesday', time: '08:30' },
            { day: 'Thursday', time: '16:00' },
        ],
    },
    {
        id: 'doctor-10', // ID único
        name: 'Juliana Lima',
        imageUrl: 'https://xsgames.co/randomusers/assets/avatars/female/10.jpg',
        specialty: 'Psychiatry',
        availability: true,
        location: 'Rome, Italy',
        availableTimeSlots: [
            { day: 'Monday', time: '10:30' },
            { day: 'Wednesday', time: '14:30' },
            { day: 'Friday', time: '09:00' },
        ],
    },
    {
        id: 'doctor-11', // ID único
        name: 'Pedro Alves',
        imageUrl: 'https://xsgames.co/randomusers/assets/avatars/male/11.jpg',
        specialty: 'Family Medicine',
        availability: true,
        location: 'Buenos Aires, Argentina',
        availableTimeSlots: [
            { day: 'Tuesday', time: '10:00' },
            { day: 'Friday', time: '12:00' },
        ],
    },
    {
        id: 'doctor-12', // ID único
        name: 'Beatriz Rocha',
        imageUrl: 'https://xsgames.co/randomusers/assets/avatars/female/12.jpg',
        specialty: 'Urology',
        availability: true,
        location: 'Toronto, Canada',
        availableTimeSlots: [
            { day: 'Monday', time: '11:00' },
            { day: 'Thursday', time: '09:30' },
        ],
    },
    {
        id: 'doctor-13', // ID único
        name: 'Arthur Barbosa',
        imageUrl: 'https://xsgames.co/randomusers/assets/avatars/male/13.jpg',
        specialty: 'Allergology',
        availability: false,
        location: 'Cape Town, South Africa',
        availableTimeSlots: [
            { day: 'Tuesday', time: '08:00' },
            { day: 'Friday', time: '13:00' },
        ],
    },
    {
        id: 'doctor-14', // ID único
        name: 'Isabela Souza',
        imageUrl: 'https://xsgames.co/randomusers/assets/avatars/female/14.jpg',
        specialty: 'Dermatology',
        availability: true,
        location: 'Dubai, UAE',
        availableTimeSlots: [
            { day: 'Monday', time: '09:00' },
            { day: 'Wednesday', time: '15:00' },
            { day: 'Saturday', time: '10:00' },
        ],
    },
    {
        id: 'doctor-15', // ID único
        name: 'Ricardo Costa',
        imageUrl: 'https://xsgames.co/randomusers/assets/avatars/male/15.jpg',
        specialty: 'Obstetrics and Gynecology',
        availability: true,
        location: 'Mumbai, India',
        availableTimeSlots: [
            { day: 'Tuesday', time: '08:00' },
            { day: 'Thursday', time: '14:30' },
            { day: 'Friday', time: '11:00' },
        ],
    },
];