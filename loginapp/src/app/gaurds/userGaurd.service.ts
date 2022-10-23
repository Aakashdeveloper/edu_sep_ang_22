import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router} from '@angular/router';


@Injectable()

export class UserGaurdService implements CanActivate{
    token: string|null = '';
    role: string|null =''

    constructor(private router: Router){}

    canActivate(route: ActivatedRouteSnapshot):boolean{
        this.token = localStorage.getItem('Token_Number');
        this.role = localStorage.getItem('Role_Type');
        if(this.token == null ){
            this.router.navigate(['/login'])
            return false
        }
        if(this.token != null && this.role === 'Admin' ){
            return true
        }
        if(this.token != null && this.role === 'User' ){
            this.router.navigate(['/profile'])
            return false
        }
        return true;
    }
}