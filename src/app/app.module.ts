import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulos
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { VerificarEmailComponent } from './components/verificar-email/verificar-email.component';
import { CremasComponent } from './components/cremas/cremas.component';
import { TratamientosComponent } from './components/tratamientos/tratamientos.component';
import { SkincareComponent } from './components/skincare/skincare.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegisterComponent,
    PresentationComponent,
    RecuperarPasswordComponent,
    VerificarEmailComponent,
    CremasComponent,
    TratamientosComponent,
    SkincareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
