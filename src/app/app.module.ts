import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { CardPageComponent } from './shared/components/card-page/card-page.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ReaderPageComponent } from './pages/reader-page/reader-page.component';
import { LibrarianPageComponent } from './pages/librarian-page/librarian-page.component';
import { UserCardComponent } from './pages/reader-page/user-card/user-card.component';
import { ReadersComponent } from './pages/reader-page/readers/readers.component';
import { FormAddReaderComponent } from './pages/reader-page/form-add-reader/form-add-reader.component';

registerLocaleData(en);



@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    CardPageComponent,
    ReaderPageComponent,
    LibrarianPageComponent,
    UserCardComponent,
    ReadersComponent,
    FormAddReaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
