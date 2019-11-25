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
  focusedTapa: number;
  view = '';

  constructor(private tapasService: TapaService) { }

  ngOnInit() {
    this.subs = this.tapasService.getTapas().subscribe(tapas => {
      this.tapas = tapas.slice();
      this.view = 'list';
    });
  }

  changeView(view: string) {
    if (view == 'list') {
      this.focusedTapa = null;
    }
    this.view = view;
  }

  focusMap(tapaId: number) {
    this.focusedTapa = tapaId;
    this.changeView('map');
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
