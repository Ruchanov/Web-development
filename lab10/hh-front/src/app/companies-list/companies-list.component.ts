import { Component } from '@angular/core';
import {CompanyService} from "../company.service";
import {Company} from "../models";
@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent {
  companies: Company[] = [];
  constructor(private companyService: CompanyService) {
  }

  ngOnInit() {
    this.companyService.getCompanies().subscribe((companies) => {
      this.companies = companies;
    });
    console.log(this.companies)
  }
}
