import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from '../app-routing.module';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { ServicesComponent } from '../services/services.component';
import { AudiovissolComponent } from '../services/audiovissol/audiovissol.component';
import { HometheatresolComponent } from '../services/hometheatresol/hometheatresol.component';
import { PurifierComponent } from '../services/purifier/purifier.component';
import { SecurityprodComponent } from '../services/securityprod/securityprod.component';
import { TelecomsolComponent } from '../services/telecomsol/telecomsol.component';
import { TeamComponent } from '../team/team.component';
import { ContactComponent } from '../contact/contact.component';
import { DocsolComponent } from '../services/docsol/docsol.component';
import { HomeautosolComponent } from '../services/homeautosol/homeautosol.component';

@NgModule({
    declarations: [
      AppComponent,
      HomeComponent,
      ServicesComponent,
      AudiovissolComponent,
      DocsolComponent,
      HometheatresolComponent,
      PurifierComponent,
      SecurityprodComponent,
      TelecomsolComponent,
      TeamComponent,
      ContactComponent,
      HomeautosolComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  