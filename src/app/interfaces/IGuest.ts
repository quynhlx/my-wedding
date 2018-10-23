export interface IGuest {
    id?: string;
    name: string;
    phoneNumber: string;
    status: number;
    avatar: string;
    address: string;
}

export interface IGuestGroup {
    group: string;
    members: IGuest[];
}
