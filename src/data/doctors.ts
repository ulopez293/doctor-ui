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
    stars: number;
}

export const doctorsList: Doctor[] = [
    {
        id: 'doctor-1',
        name: 'Lucas Fernandes',
        imageUrl: 'https://xsgames.co/randomusers/assets/avatars/male/1.jpg',
        specialty: 'Neurology',
        availability: true,
        location: 'New York, USA',
        stars: 4,
        availableTimeSlots: [
            { day: 'Monday', time: '09:00' },
            { day: 'Wednesday', time: '14:00' },
            { day: 'Friday', time: '10:30' },
        ],
    },
    {
        id: 'doctor-2',
        name: 'Camila Rocha',
        imageUrl: 'https://xsgames.co/randomusers/assets/avatars/female/2.jpg',
        specialty: 'Obstetrics and Gynecology',
        availability: true,
        location: 'Los Angeles, USA',
        stars: 5,
        availableTimeSlots: [
            { day: 'Tuesday', time: '11:00' },
            { day: 'Thursday', time: '16:30' },
            { day: 'Saturday', time: '09:00' },
        ],
    },
    {
        id: 'doctor-3',
        name: 'Gabriel Silva',
        imageUrl: 'https://xsgames.co/randomusers/assets/avatars/male/3.jpg',
        specialty: 'Emergency Medicine',
        availability: false,
        location: 'London, UK',
        stars: 3,
        availableTimeSlots: [
            { day: 'Monday', time: '08:00' },
            { day: 'Thursday', time: '12:00' },
        ],
    },
    {
        id: 'doctor-4',
        name: 'Raissa Costa',
        imageUrl: 'https://xsgames.co/randomusers/assets/avatars/female/4.jpg',
        specialty: 'Dermatology',
        availability: true,
        location: 'Paris, France',
        stars: 2,
        availableTimeSlots: [
            { day: 'Monday', time: '13:00' },
            { day: 'Tuesday', time: '14:30' },
            { day: 'Thursday', time: '09:00' },
        ],
    },
    {
        id: 'doctor-5',
        name: 'Vitor Carvalho',
        imageUrl: 'https://xsgames.co/randomusers/assets/avatars/male/5.jpg',
        specialty: 'Oncology',
        availability: true,
        location: 'São Paulo, Brazil',
        stars: 1,
        availableTimeSlots: [
            { day: 'Wednesday', time: '15:00' },
            { day: 'Friday', time: '11:30' },
        ],
    },
    {
        id: 'doctor-6',
        name: 'Amanda Pereira',
        imageUrl: 'https://xsgames.co/randomusers/assets/avatars/female/6.jpg',
        specialty: 'Pediatrics',
        availability: true,
        location: 'Madrid, Spain',
        stars: 0,
        availableTimeSlots: [
            { day: 'Monday', time: '10:00' },
            { day: 'Thursday', time: '14:00' },
            { day: 'Saturday', time: '08:00' },
        ],
    },
    {
        id: 'doctor-7',
        name: 'Felipe Martins',
        imageUrl: 'https://xsgames.co/randomusers/assets/avatars/male/7.jpg',
        specialty: 'Surgery',
        availability: true,
        location: 'Tokyo, Japan',
        stars: 3,
        availableTimeSlots: [
            { day: 'Tuesday', time: '09:00' },
            { day: 'Thursday', time: '15:00' },
        ],
    },
    {
        id: 'doctor-8',
        name: 'Larissa Gomes',
        imageUrl: 'https://xsgames.co/randomusers/assets/avatars/female/8.jpg',
        specialty: 'Internal Medicine',
        availability: true,
        location: 'Sydney, Australia',
        stars: 4,
        availableTimeSlots: [
            { day: 'Wednesday', time: '11:00' },
            { day: 'Friday', time: '13:00' },
        ],
    },
    {
        id: 'doctor-9',
        name: 'Thiago Souza',
        imageUrl: 'https://xsgames.co/randomusers/assets/avatars/male/9.jpg',
        specialty: 'Radiology',
        availability: false,
        location: 'Berlin, Germany',
        stars: 5,
        availableTimeSlots: [
            { day: 'Tuesday', time: '08:30' },
            { day: 'Thursday', time: '16:00' },
        ],
    },
    {
        id: 'doctor-10',
        name: 'Juliana Lima',
        imageUrl: 'https://xsgames.co/randomusers/assets/avatars/female/10.jpg',
        specialty: 'Psychiatry',
        availability: true,
        location: 'Rome, Italy',
        stars: 5,
        availableTimeSlots: [
            { day: 'Monday', time: '10:30' },
            { day: 'Wednesday', time: '14:30' },
            { day: 'Friday', time: '09:00' },
        ],
    },
    {
        id: 'doctor-11',
        name: 'Pedro Alves',
        imageUrl: 'https://xsgames.co/randomusers/assets/avatars/male/11.jpg',
        specialty: 'Family Medicine',
        availability: true,
        location: 'Buenos Aires, Argentina',
        stars: 2,
        availableTimeSlots: [
            { day: 'Tuesday', time: '10:00' },
            { day: 'Friday', time: '12:00' },
        ],
    },
    {
        id: 'doctor-12',
        name: 'Beatriz Rocha',
        imageUrl: 'https://xsgames.co/randomusers/assets/avatars/female/12.jpg',
        specialty: 'Urology',
        availability: true,
        location: 'Toronto, Canada',
        stars: 4,
        availableTimeSlots: [
            { day: 'Monday', time: '11:00' },
            { day: 'Thursday', time: '09:30' },
        ],
    },
    {
        id: 'doctor-13',
        name: 'Arthur Barbosa',
        imageUrl: 'https://xsgames.co/randomusers/assets/avatars/male/13.jpg',
        specialty: 'Allergology',
        availability: false,
        location: 'Cape Town, South Africa',
        stars: 2,
        availableTimeSlots: [
            { day: 'Tuesday', time: '08:00' },
            { day: 'Friday', time: '13:00' },
        ],
    },
    {
        id: 'doctor-14',
        name: 'Isabela Souza',
        imageUrl: 'https://xsgames.co/randomusers/assets/avatars/female/14.jpg',
        specialty: 'Dermatology',
        availability: true,
        location: 'Dubai, UAE',
        stars: 4,
        availableTimeSlots: [
            { day: 'Monday', time: '09:00' },
            { day: 'Wednesday', time: '15:00' },
            { day: 'Saturday', time: '10:00' },
        ],
    },
    {
        id: 'doctor-15',
        name: 'Ricardo Costa',
        imageUrl: 'https://xsgames.co/randomusers/assets/avatars/male/15.jpg',
        specialty: 'Obstetrics and Gynecology',
        availability: true,
        location: 'Mumbai, India',
        stars: 3,
        availableTimeSlots: [
            { day: 'Tuesday', time: '08:00' },
            { day: 'Thursday', time: '14:30' },
            { day: 'Friday', time: '11:00' },
        ],
    },
];
