export class User {
    // tslint:disable-next-line:variable-name
    constructor(public _id: number, public fname: string, public lname: string, public email: string, public pass: string,
                public dob: Date, public phone: number, public address: string, public funds: number, public locked: boolean ){

    }
}
