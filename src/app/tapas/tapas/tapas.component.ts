import { Component, OnInit, OnDestroy } from '@angular/core';

import { Tapa } from '../Tapa.model';
import { TapaService } from '../tapas.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tapas',
  templateUrl: './tapas.component.html',
  styleUrls: ['./tapas.component.css']
})
export class TapasComponent implements OnInit, OnDestroy {
  tapas: Tapa[];
  subs: Subscription;  
  view = '';

  constructor(private tapasService: TapaService) { }

  ngOnInit() {
    this.subs = this.tapasService.getTapas().subscribe(tapas => {
      this.tapas = tapas.slice();
      this.view = 'list';
    });
  }

  changeView(view: string) {
    this.view = view;
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
