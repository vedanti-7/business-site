// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { AudiovissolComponent } from './services/audiovissol/audiovissol.component';
import { PurifierComponent } from './services/purifier/purifier.component';
import { SecurityprodComponent } from './services/securityprod/securityprod.component';
import { TelecomsolComponent } from './services/telecomsol/telecomsol.component';
import { HometheatresolComponent } from './services/hometheatresol/hometheatresol.component';
import { DocsolComponent } from './services/docsol/docsol.component';
import { HomeautosolComponent } from './services/homeautosol/homeautosol.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/audiovissol', component: AudiovissolComponent},
  {path: 'services/docsol', component: DocsolComponent},
  { path: 'services/hometheatresol', component: HometheatresolComponent},
  { path: 'services/purifier', component: PurifierComponent  },
  { path: 'services/securityprod', component: SecurityprodComponent },
  { path: 'services/telecomsol', component: TelecomsolComponent },
  {path: 'services/homeautosol', component: HomeautosolComponent},
  { path: 'team', component: TeamComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent,
    TeamComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
