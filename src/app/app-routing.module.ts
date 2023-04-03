import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { RegisterComponent } from './components/register/register.component';
import { VerificarEmailComponent } from './components/verificar-email/verificar-email.component';


//Se colocan las rutas de cada sección
const routes: Routes = [
  {path: '', redirectTo: 'presentation', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'presentation', component: PresentationComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'recuperar-pass', component: RecuperarPasswordComponent},
  {path: 'verificar-email', component: VerificarEmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
