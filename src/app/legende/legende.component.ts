import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { PopupComponent } from '../popup/popup.component';

@Component({
    selector: 'app-legende',
    templateUrl: './legende.component.html',
    styleUrls: ['./legende.component.css'],
    imports: [PopupComponent]
})
export class LegendeComponent {
  private location = inject(Location);

  public navigateBack() {
    this.location.back();
  }
}
