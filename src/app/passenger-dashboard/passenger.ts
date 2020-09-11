export interface Passenger {
    id: number;
    fullName: string;
    checkedIn: boolean;
    checkedInDate?: number;
    children: Child[] | null;
    baggage: string;
}
interface Child {
    name: string;
    age: number;
}
export interface Baggage {
    key: string;
    value: string;
}
