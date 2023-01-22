import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-promise',
  templateUrl: './observable-promise.component.html',
  styleUrls: ['./observable-promise.component.scss']
})
export class ObservablePromiseComponent {

  public myObservable: any;
  public myPromise: any;
  public mySubscription: any;

  public create() {
    this.myObservable = new Observable<string>(observer => {
      console.log("Observable has created.");
      observer.next("Observable has emitted1.");
      observer.next("Observable has emitted2.");
      observer.next("Observable has emitted3.");
    });

    this.myPromise = new Promise<string>(resolve => {
      console.log("Promise has created.");
      resolve("Promise has emitted1.");
      resolve("Promise has emitted2.");
      resolve("Promise has emitted3.");
    });
  }

  public execute() {
    this.mySubscription = this.myObservable.subscribe((data: any) => {
      console.log(data);
    });

    this.myPromise.then((data: any) => {
      console.log(data);
    });
  }

  public cancel() {
    this.mySubscription.unsubscribe();
  }
}
