import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-spaces-legend',
  templateUrl: './spaces-legend.component.html',
  styleUrls: ['./spaces-legend.component.css']
})
export class SpacesLegendComponent implements OnInit {
  @Input() spaceLegendData:{spaceType:string, spaceColor: string};
  @Output() legendChanged:EventEmitter<{spaceType:string, spaceColor: string}> = new EventEmitter();
  @Output() deleteTriggered:EventEmitter<void> = new EventEmitter();

  deleteShow:boolean = false;

  refreshLegend(){
    this.legendChanged.emit(this.spaceLegendData);
  }
  constructor() { }

  ngOnInit() {
  }

}
