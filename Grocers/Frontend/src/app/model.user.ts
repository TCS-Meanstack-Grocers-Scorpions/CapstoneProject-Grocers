export class User{
    constructor(public _id:number, public fname:string,public lname:string, public email:string,
        public pass:string,
        public dob:Date,
        public phone:number,
        public address:string,
        public funds:number,
        public locked:boolean){}
}