import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { LibrarianPageRoutingModule } from "./librarian-page-routing.module";
import { LibrarianPageComponent } from "./librarian-page.component";

@NgModule({
    imports: [
        CommonModule,
        LibrarianPageRoutingModule,
        SpinnerModule,
        NzTableModule,
        NzButtonModule
    ],
    declarations:[LibrarianPageComponent]
})

export class LibrarianPageModule {}