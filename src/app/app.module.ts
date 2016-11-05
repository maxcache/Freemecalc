import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { DictionaryPipe } from './shared/shared.pipe';
import { MaterialModule } from '@angular/material';
@NgModule({
  imports: [
    BrowserModule, routing, FormsModule,MaterialModule.forRoot()
  ],
  declarations: [
    AppComponent, SettingsComponent, HomeComponent, DictionaryPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }