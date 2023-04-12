from django.http import JsonResponse
from django.shortcuts import render

from .models import Company, Vacancy

# from lab9.hh_back.api.models import Vacancy


# Create your views here.

def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        companies_json = [p.to_json() for p in companies]
        return JsonResponse(companies_json, safe=False)


def get_company_by_id(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company not found'}, status=404)
    return JsonResponse(company.to_json())


def get_vacancies_by_company_id(request, id):
    company_name = Company.objects.get(id=id)
    vacancies = Vacancy.objects.filter(company=company_name)
    return JsonResponse(vacancies.to_json())


def vacancies_list(request):
    vacancies = Vacancy.objects.all()
    return JsonResponse(vacancies.to_json())


def get_vacancy_by_id(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist:
        return JsonResponse({'error': 'Vacancy not found'}, status=404)
    return JsonResponse(vacancy.to_json())


def top_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    return JsonResponse(vacancies.to_json())

