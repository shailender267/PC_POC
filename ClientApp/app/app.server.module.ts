import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './app.core.module';
import { AppComponent } from './app.component';


@NgModule({
    bootstrap: [AppComponent],
    imports: [
        ServerModule,
        CoreModule      
    ]
})
export class AppModule {
}
