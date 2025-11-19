import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ObjectifsComponent} from "./objectifs/objectifs.component";
import {LayoutAdminComponent} from "../../layouts/layout-admin/layout-admin.component";
import {PerimetreComponent} from "./perimetre/perimetre/perimetre.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      { path: 'objectifs', component: ObjectifsComponent },
      { path: 'perimetre', component: PerimetreComponent },

      { path: '', redirectTo: 'objectifs', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
