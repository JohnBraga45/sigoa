import { Component, Input, TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() title!: string;
  modalRef!: BsModalRef<any>;
  template: string | TemplateRef<any> | (new (...args: any[]) => any) | undefined;

  constructor() { }

  onClose() {
    this.modalRef.hide();
  }

}
