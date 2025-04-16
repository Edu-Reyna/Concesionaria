import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private autoCreadoSource = new Subject<void>();
  autoCreado$ = this.autoCreadoSource.asObservable();

  constructor() { }

  emitirAutoCreado() {
    this.autoCreadoSource.next();
  }

}
