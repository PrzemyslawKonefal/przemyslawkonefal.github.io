import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floors',
  templateUrl: './floors.component.html',
  styleUrls: ['./floors.component.css']
})
export class FloorsComponent implements OnInit {
  floorsNumber = 0;
  floors = Array();
  spacesLegend:[{spaceType:string, spaceColor:string}] = [{spaceType: "office", spaceColor: "#333333"}];

  FloorSizes:[{floorWidth:number, floorHeight: number}] = [{floorWidth:1, floorHeight: 1}];

  refreshFloors(){
    this.floors = Array(this.floorsNumber).fill(1);
  }
  checkSizes(floorSizes: {floorWidth:number, floorHeight:number}, i){
    this.FloorSizes[i] = floorSizes;
  }

  updateLegend(legendEl:{spaceType:string, spaceColor: string}, index){
    this.spacesLegend[index] = legendEl;
  }
  constructor() {

   }

  ngOnInit() {
    this.FloorSizes.splice(0,1);
  }


}
