import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SubjectsListComponent } from './subjects/subjects-list/subjects-list.component';
import { AddSubjectComponent } from './subjects/add-subject/add-subject.component';
import { RequireAuthComponent } from './require-auth/require-auth.component';
import { AuthGuard } from './shared/auth.guard';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { SubjectRegistrationComponent } from './components/subject-registration/subject-registration.component';

const routes: Routes = [
  {path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'dashboard', component: DashboardComponent, title: 'Dashboard', /*canActivate:[AuthGuard]*/},
  {path: 'forgot-password', component: ForgotPasswordComponent, title: 'Forgot Password'},
  {path: 'verify-email', component: VerifyEmailComponent},
  //{path: '', redirectTo: 'login', pathMatch: 'full'},
  //{path: 'require-auth', component: RequireAuthComponent, canActivate: [authGuard]},
  //{path: '', redirectTo: 'subject', pathMatch: 'full'},
  //{path: '', loadChildren: ()=> AuthenticateModule, canActivate[AuthGuard]},
  
  //{path: 'login', component: LoginComponent, title: 'Log In'},
  {path: 'subject-registration', component: SubjectRegistrationComponent},
  
  //{path: 'register-account', component: RegisterComponent},
  //{path: 'verify-email', component: VerifyEmailComponent},
  //{path: 'subjects', component: SubjectsComponent},
  {path: 'subject', component: SubjectsListComponent},
  {path: 'add-subject', component: AddSubjectComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
