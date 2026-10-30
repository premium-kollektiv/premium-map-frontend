import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegendeComponent } from './legende.component';
import { LegendeRoutingModule } from './legende-routing.module';


@NgModule({
    imports: [
    CommonModule,
    LegendeRoutingModule,
    LegendeComponent
]
})
export class LegendeModule { }
