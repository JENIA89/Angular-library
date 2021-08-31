import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LibrarianPageComponent } from './librarian-page.component';


const routes: Routes=[
    {path:'', component: LibrarianPageComponent},
    {path: 'create', loadChildren: ()=> import('../create-book-page/create-book-page.module').then(m=>m.CreateBookPageModule) },
    {path: 'edit/:id', loadChildren: ()=> import('../edit-book-page/edit-book-page.module').then(m=>m.EditBookPageModule)}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class LibrarianPageRoutingModule {}