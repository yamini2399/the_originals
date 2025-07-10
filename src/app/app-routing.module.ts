import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WorksComponent } from './pages/works/works.component';
import { AboutComponent } from './pages/about/about.component';
import { CareersComponent } from './pages/careers/careers.component';
import { UpdatesComponent } from './pages/updates/updates.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { ServiceOverviewComponent } from './service-overview/service-overview.component';
import { ServiceTypeComponent } from './service-type/service-type.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '' },
  { path: 'contact', component: ContactComponent },
  { path: 'works', component: WorksComponent },
  { path: 'about', component: AboutComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'updates', component: UpdatesComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/:title', component: ServiceOverviewComponent },
  { path: 'services/:title/:type', component: ServiceTypeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
