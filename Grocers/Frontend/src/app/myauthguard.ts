import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()                       //pre-defined interface
export class MyAuthGuard implements CanActivate {
    constructor(public router:Router){}
    
    canActivate(){                  //pre-defined methods
        let obj = sessionStorage.getItem("token");
        //console.log(obj);
        if(obj == 'admin'){
            return true;
        }else{
            this.router.navigate(["admin"]);
            return false;
        }
    }
}