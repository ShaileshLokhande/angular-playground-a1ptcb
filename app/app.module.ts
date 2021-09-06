import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { HelloFrameworkModule } from './hello-framework';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    CoreModule,
    HelloFrameworkModule,
  ],
})
export class AppModule {}
