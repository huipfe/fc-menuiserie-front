import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Component/app/app.component';
import { IndexComponent } from './Component/index/index.component';
import { HomeComponent } from './Component/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './Component/admin-dashboard/admin-dashboard.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PopinConfirmationComponent } from './popin-confirmation/popin-confirmation.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { PopinHoraireComponent } from './popin-horaire/popin-horaire.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AdminDashboardComponent,
    PopinConfirmationComponent,
    PopinHoraireComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatTabsModule,
    MatDialogModule,
    MatTableModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule, 
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
