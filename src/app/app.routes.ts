import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { LoginComponent } from './pages/login/login.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    
  },
  {
    path: 'character-detail/:id',
    component: CharacterDetailComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];