import { NgModule } from '@angular/core';
import * as  Material from '@angular/material';
@NgModule({
  declarations: [],
  imports: [
    Material.MatToolbarModule,
    Material.MatFormFieldModule,
    Material.MatCardModule
    
  ],
  exports:[
    Material.MatToolbarModule,
    Material.MatFormFieldModule,
    Material.MatCardModule


  ]
})
export class AppMaterialModule { }
