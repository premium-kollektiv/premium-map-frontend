import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { FeedbackService } from '../feedback.service';
import { filter } from 'rxjs/operators';
import { PopupComponent } from '../popup/popup.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.css'],
    imports: [PopupComponent, FormsModule]
})
export class FeedbackComponent {
  private route = inject(ActivatedRoute);
  private feedbackService = inject(FeedbackService);

  public feedbackEmail = "";
  public feedbackText = "";
  // A signal, so the OnPush view re-renders when the HTTP response arrives
  public feedbackSentMessage = signal<string | null>("");

  public sendFeedback() {
    this.route.params
      .pipe(filter((params) => params.itemId))
      .subscribe((params: Params) => {
        this.feedbackService
          .sendFeedback(params.itemId, this.feedbackEmail, this.feedbackText)
          .subscribe((response) => {
            this.feedbackEmail = '';
            this.feedbackText = '';
            this.feedbackSentMessage.set(response.data.msg);
          });
      });
  }
}
