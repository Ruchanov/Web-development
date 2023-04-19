import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompaniesListComponent} from "./companies-list/companies-list.component";
import {CompanyComponent} from "./company/company.component";
import {VacancyComponent} from "./vacancy/vacancy.component";

const routes: Routes = [
  { path: 'companies', component: CompaniesListComponent },
  { path: 'companies/:id', component: CompanyComponent},
  {path: 'vacancies/:id', component: VacancyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
