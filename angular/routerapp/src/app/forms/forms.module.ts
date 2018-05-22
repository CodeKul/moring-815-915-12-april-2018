import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { TmDrvnComponent } from './tm-drvn/tm-drvn.component';
import { DtDrvnComponent } from './dt-drvn/dt-drvn.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [FormsComponent, TmDrvnComponent, DtDrvnComponent]
})
export class MyFormsModule { }
