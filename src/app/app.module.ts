import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { EnzoComponent } from './enzo/enzo.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{ path: 'enzo', component: EnzoComponent }]),
  ],
  declarations: [AppComponent, HelloComponent, EnzoComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
