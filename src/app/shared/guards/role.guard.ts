import { CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { RoleService } from '../services/role.service';
import { ROLES } from '../roles';

export const roleGuard: CanActivateFn = (route, state) => {
  return true;
};
