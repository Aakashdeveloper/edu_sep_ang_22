export class ILogin{
    constructor(
        public email: string,
        public password: string
    ){}
}

export class LoginRes{
    constructor(
        public auth:string,
        public token:string
    ){}
}

export class UserRes{
    constructor(
        public _id: string,
        public name: string,
        public email: string,
        public phone: string,
        public role: string,
        public __v: number,
    ){}
}

