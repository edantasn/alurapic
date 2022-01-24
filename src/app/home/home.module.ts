import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { SignUpComponent } from './singup/signup.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SignUpService } from './singup/signup.service';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule,
    FormsModule,
    HomeRoutingModule
  ],
  providers: [
    SignUpService
  ]
})
export class HomeModule {}
