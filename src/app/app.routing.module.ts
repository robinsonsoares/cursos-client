import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyFormComponent } from './cursos/my-form/my-form.component';

const APP_ROUTES = [
    {path: 'cursos/new', component: MyFormComponent},
    {path: 'cursos/:id', component: MyFormComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
