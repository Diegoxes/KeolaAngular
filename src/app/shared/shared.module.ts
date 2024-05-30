import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { KeolaService } from '../services/keola.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';

@NgModule({
  declarations: [],
  exports: [RouterModule, FormsModule, ReactiveFormsModule],
  imports: [
    
    HttpClientModule,
    FormsModule,
    RouterModule,
    
  ],
  providers: [KeolaService]
})
export class SharedModule { }