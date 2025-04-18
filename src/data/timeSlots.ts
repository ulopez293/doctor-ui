export type Weekday =
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
    | 'Sunday';

export interface TimeSlot {
    day: Weekday
    time: `${number}:${number}`
}