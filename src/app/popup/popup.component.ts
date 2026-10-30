import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
    selector: 'app-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.css'],
})
export class PopupComponent {
  private location = inject(Location);

  public navigateHome() {
    this.location.back();
  }
}
