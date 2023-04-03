import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulos
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
// import { RegisterComponent } from './components/register/register.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { VerificarEmailComponent } from './components/verificar-email/verificar-email.component';
import { CremasComponent } from './components/cremas/cremas.component';
import { TratamientosComponent } from './components/tratamientos/tratamientos.component';
import { SkincareComponent } from './components/skincare/skincare.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { RegisterComponent } from './components/register/register.component';
// import { ServiceWorkerModule } from '@angular/service-worker';



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
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
