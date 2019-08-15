import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { SignInComponent } from './page/login/sign-in/sign-in.component';
import { SignUpComponent } from './page/login/sign-up/sign-up.component';
import { AddUserComponent } from './page/user/add-user/add-user.component';
import { DeleteUserComponent } from './page/user/delete-user/delete-user.component';
import { EditUserComponent } from './page/user/edit-user/edit-user.component';
import { ListUserComponent } from './page/user/list-user/list-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    AddUserComponent,
    DeleteUserComponent,
    EditUserComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
