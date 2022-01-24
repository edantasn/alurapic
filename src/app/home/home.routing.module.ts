import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from '../core/auth/auth.guard';
import { HomeComponent } from './home.component';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './singup/signup.component';

const routes: Routes = [
  {
    path: '', //vazia, porque no arquivo de rotas pai, 'home' redireciona pra cá
    component: HomeComponent,
    canActivate: [AuthGuard],
    //router outlet
    /* componente pai que tem um router outlet pra rederizar filhas */
    children: [
      {
        path: '',
        component: SignInComponent
      },
      {
        path: 'signup',
        component: SignUpComponent
      }
    ]
  }
];

@NgModule({
  // forChild porque é um arquivo de subrotas, submisso a um arquivo root
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class HomeRoutingModule {}
