import { WebService } from './web.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpObservablesComponent } from './http-observables.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers : [WebService],
  declarations: [HttpObservablesComponent]
})
export class HttpObservablesModule { }
