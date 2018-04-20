import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { MySecondComponent } from './my-second/my-second.component';
import { SecondInnerComponent } from './my-second/second-inner.component';
import { MyJumboComponent } from './my-jumbo/my-jumbo.component';
import { PartOneComponent } from './my-jumbo/part-one.component';
import { PartTwoComponent } from './my-jumbo/part-two.component';
import { DividerComponent } from './my-jumbo/divider.component';
import { DatabindingComponent } from './databinding/databinding.component';


@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    MySecondComponent,
    SecondInnerComponent,
    MyJumboComponent,
    PartOneComponent,
    PartTwoComponent,
    DividerComponent,
    DatabindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
