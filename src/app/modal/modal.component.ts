import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {
  @Input() isVisible: boolean;
  @Output() close: EventEmitter<any> =  new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }

  closeModal() {
    console.log('close!');
    this.close.emit();
  }

}
