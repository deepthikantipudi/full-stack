import { NgModule } from '@angular/core';
import * as  Material from '@angular/material';
@NgModule({
  declarations: [],
  imports: [
    Material.MatToolbarModule,
    Material.MatFormFieldModule,
    Material.MatCardModule,
    Material.MatDividerModule,
    Material.MatGridListModule,
    Material.MatIconModule,
    Material.MatInputModule
    
    
   
    
  ],
  exports:[
    Material.MatToolbarModule,
    Material.MatFormFieldModule,
    Material.MatCardModule,
    Material.MatDividerModule,
    Material.MatGridListModule,
    Material.MatIconModule,
    Material.MatInputModule
    





  ]
})
export class AppMaterialModule { }
