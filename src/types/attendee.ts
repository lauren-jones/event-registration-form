export type attendee = {
    name: string;
    email: string;
    phone: string;
    techInterests: techInterest[];
}

export type techInterest = {
    tech: string;
    checked: boolean;
}