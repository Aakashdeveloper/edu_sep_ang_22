import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()

export class ProfileGaurdService implements CanActivate{
    token:string|null = '';
    constructor(private router:Router){}

    canActivate(router:ActivatedRouteSnapshot):boolean{
        this.token = localStorage.getItem('Token_Number');
        if(this.token == null){
            this.router.navigate(['/login']);
            return false;
        }
        return true
    }
}