import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent, pathMatch: 'full'},
    {path: 'register', component: RegisterComponent, pathMatch: 'full'},
    {path: 'home', component: HomeComponent, pathMatch: 'full'},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];
