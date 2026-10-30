import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { PopupComponent } from '../popup/popup.component';

@Component({
    selector: 'app-imprint',
    templateUrl: './imprint.component.html',
    styleUrls: ['./imprint.component.css'],
    imports: [PopupComponent]
})
export class ImprintComponent {
  private location = inject(Location);

  public navigateHome() {
    this.location.back();
  }
}
