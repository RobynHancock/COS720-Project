import { CanActivateFn } from '@angular/router';
import { Inject, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


export const authGuard: CanActivateFn = async (route, state) => {
  const fireauth = inject(AngularFireAuth);
  const user = await fireauth.currentUser;

  const isLoggedIn = !!user;
  return isLoggedIn;
  //return true;
};
