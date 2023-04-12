from django.urls import path
import views

urlpatterns = [
    path('companies/', views.company_list),
    path('companies/<int:id>/', views.get_company_by_id),
    path('companies/<int:id>/vacancies/', views.get_vacancies_by_company_id()),
    path('vacancies/', views.vacancies_list()),
    path('vacancies/<int:id>/', views.get_vacancy_by_id()),
    path('vacancies/top_ten/', views.top_vacancies()),
]

