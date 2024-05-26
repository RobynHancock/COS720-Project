import { NgModule } from '@angular/core';
import {environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatFormField } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatLabel } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

//Firebase Components
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule} from '@angular/fire/compat/database'


//My Components
//import { SubjectsComponent } from './subjects/subjects.component';

import { MessagesComponent } from './messages/messages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
//import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
//import { RegisterComponent } from './register/register.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { AddSubjectComponent } from './subjects/add-subject/add-subject.component';
import { SubjectsListComponent } from './subjects/subjects-list/subjects-list.component';
import { SubjectDetailsComponent } from './subjects/subject-details/subject-details.component';
import { AuthService } from './shared/auth.service';
import { RequireAuthComponent } from './require-auth/require-auth.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { SubjectRegistrationComponent } from './components/subject-registration/subject-registration.component';


@NgModule({
  declarations: [
    AppComponent,
    //SubjectsComponent,
    MessagesComponent,
    DashboardComponent,
    //LoginComponent,
    ForgotPasswordComponent,
    //RegisterComponent,
    NavbarComponent,
    AddSubjectComponent,
    SubjectsListComponent,
    SubjectDetailsComponent,
    VerifyEmailComponent,
    GoogleSsoDirective,
    RequireAuthComponent,
    SignInComponent,
    SignUpComponent,
    SubjectRegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    MatButtonModule,
    MatFormField,
    MatInputModule,
    MatLabel,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule, 
    MatCheckboxModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideAnimationsAsync(),
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
