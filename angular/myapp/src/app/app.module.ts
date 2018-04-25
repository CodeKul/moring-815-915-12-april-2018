import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { MySecondComponent } from './my-second/my-second.component';
import { SecondInnerComponent } from './my-second/second-inner.component';
import { MyJumboComponent } from './my-jumbo/my-jumbo.component';
import { PartOneComponent } from './my-jumbo/part-one.component';
import { PartTwoComponent } from './my-jumbo/part-two.component';
import { DividerComponent } from './my-jumbo/divider.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { IntrCompComFirstComponent } from './intr-comp-com-first/intr-comp-com-first.component';
import { BtnPnlComponent } from './intr-comp-com-first/btn-pnl.component';
import { ColPnlComponent } from './intr-comp-com-first/col-pnl.component';
import { LocalRefComponent } from './local-ref/local-ref.component';
import { NgbSampleComponent } from './ngb-sample/ngb-sample.component';


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
    DatabindingComponent,
    IntrCompComFirstComponent,
    BtnPnlComponent,
    ColPnlComponent,
    LocalRefComponent,
    NgbSampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
