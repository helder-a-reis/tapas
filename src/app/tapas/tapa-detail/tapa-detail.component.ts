import { Component, OnInit, Input } from '@angular/core';
import { Tapa } from '../Tapa.model';

@Component({
  selector: 'app-tapa-detail',
  templateUrl: './tapa-detail.component.html',
  styleUrls: ['./tapa-detail.component.css']
})
export class TapaDetailComponent implements OnInit {
  @Input() tapa: Tapa;

  constructor() { }

  ngOnInit() {
  }

}
