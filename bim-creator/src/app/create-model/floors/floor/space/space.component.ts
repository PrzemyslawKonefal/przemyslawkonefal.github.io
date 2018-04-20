import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
export class SpaceComponent implements OnInit {
  @Input() spaceData: {type: string, width: number, height: number, bottom:number, right:number, isActive:boolean};
  @Input() legend:[{spaceType:string, spaceColor:string}];
  color:string = "inherit";
  ngAfterContentChecked(){
    for(let i = 0; i<this.legend.length; i++){
      if(this.spaceData.type === this.legend[i].spaceType){
        this.color = this.legend[i].spaceColor;
        return;
        }
      }
      this.color = "inherit";
  }
  constructor() { }

  ngOnInit() {
  }

}
