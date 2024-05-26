import { Injectable } from '@angular/core';
import { ROLES } from '../roles';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
    //Simulate user roles (replace with actual user roles from auth)
  private userRoles: string[] = [];
  constructor() { }

  hasRole(role: string): boolean {
    return this.userRoles.includes(role);
  }

  //Other role-related methods can be added here
}
