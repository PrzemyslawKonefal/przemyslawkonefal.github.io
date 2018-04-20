import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CreateModelComponent } from './create-model/create-model.component';
import { FloorsComponent } from './create-model/floors/floors.component';
import { FloorComponent } from './create-model/floors/floor/floor.component';
import { SpaceComponent } from './create-model/floors/floor/space/space.component';
import { SpacesLegendComponent } from './create-model/floors/spaces-legend/spaces-legend.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CreateModelComponent,
    FloorsComponent,
    FloorComponent,
    SpaceComponent,
    SpacesLegendComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
