import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CreateBookPageComponent } from "./create-book-page.component";
import { CreateBookPageRoutingModule } from "./create-book-page-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NzTableModule,
        NzButtonModule,
        CreateBookPageRoutingModule
    ],
    declarations:[CreateBookPageComponent]
})

export class CreateBookPageModule {}