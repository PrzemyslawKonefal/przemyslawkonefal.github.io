import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css']
})
export class FloorComponent implements OnInit {
  @Input() previousFloorSize:({floorWidth:number, floorHeight:number});
  @Input() legend:[{spaceType:string, spaceColor:string}];
  @Output() sizes:EventEmitter<{width:number, height: number}> = new EventEmitter();
  floorWidth:number = 300;
  floorHeight:number = 300;
  settingNumber:number = 0;
  spaces = [{type: 'office', width: 20, height: 20, bottom: 0, right:0, isActive:false}];
  editingSpaceIndex:number;
  spaceEdition:boolean = false;

  settingSwitch(settingIndex:number){
    this.settingNumber = settingIndex;
    if(this.settingNumber === 2){
      this.spaces.push({type: '', width: 20, height: 20, bottom: 0, right:0, isActive:false});
    }
  }

  spaceSettings(spaceIndex:number){
    this.editingSpaceIndex =  spaceIndex;
    this.spaceEdition = true;
    for(let i = 0; i< this.spaces.length; i++){
      this.spaces[i].isActive = false;
    }
    this.spaces[this.editingSpaceIndex].isActive = true;
  }

  closeSetting(settingsNumber:number){
    if(settingsNumber === 0){
      this.settingNumber = 0;
    }
    else{
      this.spaceEdition = false;
    }
    console.log(this.previousFloorSize);
  }

  emitSizes(){
    this.sizes.emit({width: this.floorWidth, height: this.floorHeight});
  }
  
  ngAfterViewInit(){
    this.emitSizes();
  }

  constructor() {
  }

  ngOnInit() {
  }

}
