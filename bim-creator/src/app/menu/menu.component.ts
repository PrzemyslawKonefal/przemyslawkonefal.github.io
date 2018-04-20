import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() CategoryChanged = new EventEmitter();

  Redirect(categoryNumber:number){
    this.CategoryChanged.emit(categoryNumber);
  }

  constructor() { }


  ngOnInit() {
  }

}
