import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { OccurrenceService } from 'src/app/core/service/occurrence.service'; 
@Component({
  selector: 'app-piquete',
  templateUrl: './piquete.component.html',
  styleUrls: ['./piquete.component.css']
})
export class PiqueteComponent {

  modalRef!: BsModalRef<any>;

  occurrences: any[] = [];
  filteredOccurrences: any[] = [];
  dateFilterEnabled: boolean = false;
  fromDateFilter: string = '';
  toDateFilter: string = '';
  typicityFilterEnabled: boolean = false;
  typicityFilter: string = '';
  legalFrameworkFilterEnabled: boolean = false;
  legalFrameworkFilter: string = '';
  securityLevelFilterEnabled: boolean = false;
  securityLevelFilter: string = '';
  objectFilterEnabled: boolean = false;
  objectFilter: string = '';
  damageTypeFilterEnabled: boolean = false;
  damageTypeFilter: string = '';
  provinceFilterEnabled: boolean = false;
  provinceFilter: string = '';
  treatmentFilterEnabled: boolean = false;
  treatmentFilter: string = '';
  gravityFilterEnabled: boolean = false;
  gravityFilter: string = '';
  victimNationalityFilterEnabled: boolean = false;
  victimNationalityFilter: string = '';
  suspectNationalityFilterEnabled: boolean = false;
  suspectNationalityFilter: string = '';

  selectedFilters: string[] = [];
  updateSelectedFilters() {
    this.selectedFilters = [];
    if (this.fromDateFilter && this.toDateFilter) {
      this.selectedFilters.push(`Data: ${this.fromDateFilter} até ${this.toDateFilter}`);
    }
    if (this.typicityFilterEnabled && this.typicityFilter) {
      this.selectedFilters.push(`Tipicidade: ${this.typicityFilter}`);
    }
    // Outros filtros aqui...

    // Chame a função para exibir os filtros selecionados na div "Filtros selecionados"
    this.displaySelectedFilters();
  }

  displaySelectedFilters() {
    // Exiba os filtros selecionados
    console.log(this.selectedFilters);
  }

  constructor(private occurrenceService: OccurrenceService, private modalService: BsModalService) { }

  ngOnInit() {
    this.getOccurrences();
  }

  getOccurrences() {
    this.occurrenceService.getOccurrences().subscribe(
      (response) => {
        this.occurrences = response;
        this.applyFilter();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  onSave() {
    console.log('Dados salvos:', this.modalService);

  }

  applyFilter() {
    this.filteredOccurrences = this.occurrences.filter((occurrence) => {
      const dateMatch = !this.dateFilterEnabled || this.isDateInRange(occurrence.date);
      const typicityMatch = !this.typicityFilterEnabled || occurrence.typicity === this.typicityFilter;
      const legalFrameworkMatch = !this.legalFrameworkFilterEnabled || occurrence.legalFramework === this.legalFrameworkFilter;
      const securityLevelMatch = !this.securityLevelFilterEnabled || occurrence.securityLevel === this.securityLevelFilter;
      const objectMatch = !this.objectFilterEnabled || occurrence.object === this.objectFilter;
      const damageTypeMatch = !this.damageTypeFilterEnabled || occurrence.damageType === this.damageTypeFilter;
      const provinceMatch = !this.provinceFilterEnabled || occurrence.province === this.provinceFilter;
      const victimNationalityMatch = !this.victimNationalityFilterEnabled || occurrence.victimNationality === this.victimNationalityFilter;
      const suspectNationalityMatch = !this.suspectNationalityFilterEnabled || occurrence.suspectNationality === this.suspectNationalityFilter;
      return (
        dateMatch &&
        typicityMatch &&
        legalFrameworkMatch &&
        securityLevelMatch &&
        objectMatch &&
        damageTypeMatch &&
        provinceMatch &&
        victimNationalityMatch &&
        suspectNationalityMatch
      );
    });
  }

  isDateInRange(date: string): boolean {
    if (this.fromDateFilter && this.toDateFilter) {
      const fromDate = new Date(this.fromDateFilter);
      const toDate = new Date(this.toDateFilter);
      const occurrenceDate = new Date(date);
      return occurrenceDate >= fromDate && occurrenceDate <= toDate;
    }
    return true;
  }

}
