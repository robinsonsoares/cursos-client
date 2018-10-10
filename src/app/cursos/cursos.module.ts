import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MyListComponent } from './my-list/my-list.component';
import { MyFormComponent } from './my-form/my-form.component';
import { CursosService } from './cursos.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
  	FormsModule,
    CommonModule,
    RouterModule
  ],
  exports: [MyListComponent, MyFormComponent],
  declarations: [MyListComponent, MyFormComponent],
  providers: [CursosService]
})
export class CursosModule { }
