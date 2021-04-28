import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TimeoutError } from 'rxjs';

@Injectable()                       // pre-defined interface
export class MyAuthGuard implements CanActivate {
    constructor(public router: Router){}

    canActivate(): any{                  // pre-defined methods
        const obj = sessionStorage.getItem('token');
        // console.log(obj);
        if (obj === 'admin'){
            return true;
        }else{
            this.router.navigate(['admin']);
            return false;
        }
    }
}
