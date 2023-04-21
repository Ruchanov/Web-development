from django.urls import path
from .views import *

urlpatterns = [
    path('companies/', CompanyListView.as_view(), name="listview"),
    path('companies/<int:id>/', CompanyDetailView.as_view(), name="detailview"),
    path('companies/<int:id>/vacancies/', CompanyVacanciesView.as_view(), name="vacancies"),
    path('vacancies/', vacancies_list),
    path('vacancies/<int:id>/', get_vacancy_by_id),
    path('vacancies/top_ten/', top_vacancies),
    path('companies/<int:id>/delete/', CompanyDeleteView.as_view(), name='deleteview'),
    path('vacancies/<int:id>/delete/', VacancyDeleteView.as_view(), name='deleteview2'),
    path('companies/create/', CompanyCreateView.as_view(), name='company-create'),
    path('companies/create/', VacancyCreateView.as_view(), name='vacancy-create'),
    path('companies/<int:id>/update/', CompanyUpdateView.as_view(), name = 'company-update'),
    path('vacancies/<int:id>/update/', VacancyUpdateView.as_view(),name = 'vacancies-update'),
]

