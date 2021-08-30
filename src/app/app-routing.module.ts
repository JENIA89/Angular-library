import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadersComponent } from './pages/reader-page/readers/readers.component';
import { ReaderPageComponent } from './pages/reader-page/reader-page.component';
import { CardPageComponent } from './shared/components/card-page/card-page.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import {UserCardComponent} from './pages/reader-page/user-card/user-card.component';
import {FormAddReaderComponent} from "./pages/reader-page/form-add-reader/form-add-reader.component";

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children:[
    {path: '', redirectTo: '/', pathMatch:'full'},
    {path: '', component: CardPageComponent},
    {path:'readers', component:ReadersComponent},
    {path:'reader/:id', component:UserCardComponent},
    {path:'addForm', component:FormAddReaderComponent},
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
