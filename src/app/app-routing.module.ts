import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadersComponent } from './pages/reader-page/readers/readers.component';
import { CardPageComponent } from './shared/components/card-page/card-page.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import {UserCardComponent} from './pages/reader-page/user-card/user-card.component';

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children:[
    {path: '', redirectTo: '/', pathMatch:'full'},
    {path: '', component: CardPageComponent},
  ]},
 {path:'readers', component:ReadersComponent},
  {path:'reader/:id', component:UserCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
