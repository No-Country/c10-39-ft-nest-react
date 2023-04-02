interface Owner {   
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    isActive: boolean;
    image?: string;
}


export default interface User{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    isActive: boolean;
    image?: string;
    owner?: Owner;
}
