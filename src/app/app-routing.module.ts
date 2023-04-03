import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CremasComponent } from './components/cremas/cremas.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { RegisterComponent } from './components/register/register.component';
import { SkincareComponent } from './components/skincare/skincare.component';
import { TratamientosComponent } from './components/tratamientos/tratamientos.component';
import { VerificarEmailComponent } from './components/verificar-email/verificar-email.component';


//Se colocan las rutas de cada sección
const routes: Routes = [
  {path: '', redirectTo: 'presentation', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'presentation', component: PresentationComponent},
  {path: 'registrar', component: RegisterComponent},
  {path: 'recuperar-pass', component: RecuperarPasswordComponent},
  {path: 'verificar-email', component: VerificarEmailComponent},
  {path: 'cremas', component: CremasComponent},
  {path: 'tratamientos', component: TratamientosComponent},
  {path: 'skincare', component: SkincareComponent},
  {path: '**', redirectTo: 'presentation', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
