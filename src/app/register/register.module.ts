import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { Routerrigest } from './router-register.module';


@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, Routerrigest]
})
export class RegisterModule { }
