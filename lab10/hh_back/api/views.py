from django.http import JsonResponse
from django.shortcuts import render
from django.views import View

from .models import Company, Vacancy


# from lab9.hh_back.api.models import Vacancy


# Create your views here.

class CompanyListView(View):
    def get(self, request):
        companies = Company.objects.all()
        companies_json = [p.to_json() for p in companies]
        return JsonResponse(companies_json, safe=False)


class CompanyDetailView(View):
    def get(self, request, id):
        try:
            company = Company.objects.get(id=id)
        except Company.DoesNotExist:
            return JsonResponse({'error': 'Company not found'}, status=404)
        return JsonResponse(company.to_json(), safe=False)


class CompanyVacanciesView(View):
    def get(self, request, id):
        company_name = Company.objects.get(id=id)
        vacancies = Vacancy.objects.filter(company=company_name)
        vacancies_json = [p.to_json() for p in vacancies]
        return JsonResponse(vacancies_json, safe=False)


def vacancies_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [p.to_json() for p in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def get_vacancy_by_id(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist:
        return JsonResponse({'error': 'Vacancy not found'}, status=404)
    return JsonResponse(vacancy.to_json(), safe=False)


def top_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    vacancies_json = [p.to_json() for p in vacancies]
    return JsonResponse(vacancies_json, safe=False)
