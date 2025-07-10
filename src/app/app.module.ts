import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WorksComponent } from './pages/works/works.component';
import { AboutComponent } from './pages/about/about.component';
import { CareersComponent } from './pages/careers/careers.component';
import { UpdatesComponent } from './pages/updates/updates.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServiceOverviewComponent } from './service-overview/service-overview.component';
import { ServiceTypeComponent } from './service-type/service-type.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    WorksComponent,
    AboutComponent,
    CareersComponent,
    UpdatesComponent,
    ContactFormComponent,
    ServicesComponent,
    ServiceOverviewComponent,
    ServiceTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
