import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { TabuadaServiceService } from './services/tabuada-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule, MatTableModule, MatIconModule, MatButtonModule, HttpClientModule, ReactiveFormsModule,
    MatCardModule, MatFormFieldModule, MatInputModule, MatDividerModule, MatSelectModule
  ],
  providers: [TabuadaServiceService, HttpClientModule, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
