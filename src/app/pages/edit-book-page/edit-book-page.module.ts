import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditBookPageRoutingModule } from "./edit-book-page-routing.module";
import { EditBookPageComponent } from "./edit-book-page.component";
import { SpinnerModule } from "src/app/shared/components/spinner/spinner.module";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NzButtonModule,
        EditBookPageRoutingModule,
        SpinnerModule
    ],
    declarations:[EditBookPageComponent]
})

export class EditBookPageModule {}