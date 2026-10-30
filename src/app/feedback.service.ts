import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, Item } from './search.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private http = inject(HttpClient);

  // private host = "http://localhost:8085";
  private host = 'https://api.landkarte.premium-cola.de';
  private feedbackPath = '/feedback';

  public sendFeedback(
    itemId: Item['id'],
    email: string,
    feedback: string
  ): Observable<ApiResponse<{ msg: string }>> {
    const url = `${this.host}${this.feedbackPath}`;
    const body = new URLSearchParams();
    body.set('email', email);
    body.set('feedback', feedback);
    body.set('id', `${itemId}`);
    console.log("Posting: ", body.toString())
    return this.http.post<ApiResponse<{ msg: string }>>(url, body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
  }
}
