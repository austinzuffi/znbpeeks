import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private modalService: NgbModal) {
    }
    ngOnInit() {
        /* sexiest solution ever nbd */
        if (window.matchMedia('(max-width: 767px)').matches) {
            this.modalService.open(ModalComponent);
        }
    }
}

