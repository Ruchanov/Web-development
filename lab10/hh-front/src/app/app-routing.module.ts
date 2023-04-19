import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompaniesListComponent} from "./companies-list/companies-list.component";

const routes: Routes = [
  //{ path: 'home', component: HomeComponent },

  { path: '/companies', component: CompaniesListComponent },
  // { path: 'companies/:id', component: CompanyDetailComponent},
  // { path: 'companies/:id/vacancies', component: CompanyVacanciesComponent },
  // { path: 'vacancies', component: VacanciesComponent},
  // { path: 'vacancies/:id', component: VacancyDetailComponent },
  // { path: 'top_ten', component: VacancyTopTenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
