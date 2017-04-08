import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
    modal_title = 'Connect to WIFI';
    modal_body = `You are on a mobile device. This site loads high quality pics that will eat up your data. 
                 Be sure you're connected to WIFI before proceeding :)`;

    constructor(public activeModal: NgbActiveModal) { }

    ngOnInit() {
    }

}

