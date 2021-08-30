import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LibrarianPageComponent } from './librarian-page.component';


const routes: Routes=[
    {path:'', component: LibrarianPageComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class LibrarianPageRoutingModule {}