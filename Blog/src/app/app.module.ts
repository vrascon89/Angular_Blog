import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BlogComponent } from './blog/blog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
