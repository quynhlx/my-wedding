export interface IGuest {
    id?: string;
    name: string;
    phoneNumber: string;
    status: number;
    avatar: string;
    address: string;
    group: string;
    code: string;
}

export interface IGuestGroup {
    group: string;
    members: IGuest[];
}
