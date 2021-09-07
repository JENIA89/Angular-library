import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EditBookPageComponent } from './edit-book-page.component';



const routes: Routes=[
    {path:'', component: EditBookPageComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class EditBookPageRoutingModule {}