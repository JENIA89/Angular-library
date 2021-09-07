import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CreateBookPageComponent } from './create-book-page.component';



const routes: Routes=[
    {path:'', component: CreateBookPageComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class CreateBookPageRoutingModule {}