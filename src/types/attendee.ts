export type Attendee = {
    name: string;
    email: string;
    phone: string;
    techInterests: TechInterest[];
}

export type TechInterest = {
    tech: string;
    checked: boolean;
}