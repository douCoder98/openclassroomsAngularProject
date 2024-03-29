import { Component, OnInit } from '@angular/core';
import { filter, interval, map, Observable, tap } from 'rxjs';
import { FaceSnapsService } from './services/face-snaps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  interval$!: Observable<string>;

  ngOnInit() {
    this.interval$ = interval(1000).pipe(
      filter(value => value % 3 === 0),
      map(value => value % 2 === 0 ? `Je suis ${value}, je suis pair` :
      `Je suis ${value}, je suis impair`),
      tap(text => this.logger(text))
    );
  }

  logger(text:string): void {
    console.log(`log: ${text}`);
  }
}
