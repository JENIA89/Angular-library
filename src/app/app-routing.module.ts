import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReaderPageComponent } from './pages/reader-page/reader-page.component';
import { CardPageComponent } from './shared/components/card-page/card-page.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children:[
    {path: '', redirectTo: '/', pathMatch:'full'},
    {path: '', component: CardPageComponent},
    {path: 'reader', component: ReaderPageComponent},
    {path: 'librarian', loadChildren:()=> import('./pages/librarian-page/librarian-page.module').then(m=>m.LibrarianPageModule)},
    { path: '**', redirectTo: '/'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
