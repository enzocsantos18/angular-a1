import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { EnzoComponent } from './enzo/enzo.component';
import { EnzoListaComponent } from './enzo-lista/enzo-lista.component';
import { EnzoDisciplinasServiceService } from './enzo-disciplinas-service.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'enzo', component: EnzoComponent },
      { path: 'disciplinas', component: EnzoListaComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    EnzoComponent,
    EnzoListaComponent,
  ],
  providers: [EnzoDisciplinasServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
