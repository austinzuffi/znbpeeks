import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { WhatService } from '../what.service';
import { Response } from '@angular/http';
import { NgbCarouselConfig, NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import {Observable} from "rxjs";

@Component({
    selector: 'app-directory',
    templateUrl: './directory.component.html',
    styleUrls: ['./directory.component.css'],
    providers: [WhatService, NgbCarouselConfig, NgbAlertConfig],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DirectoryComponent implements OnInit, AfterViewInit {
    staticAlertClosed = false;
    @ViewChild('myCarousel') carousel;

    public directory: string;
    public errorMessage: string;
    public whatResponse: Response;
    public whatList: Array<string> = [];
    public instructs: string;
    public whatObs: Observable<Response>;

    constructor(
        private route: ActivatedRoute,
        private whatService: WhatService,
        cConfig: NgbCarouselConfig,
        aConfig: NgbAlertConfig) {
        cConfig.interval = 0;
        cConfig.wrap = true;
        cConfig.keyboard = true;
        aConfig.dismissible = true;
    }


    ngOnInit() {
        this.instructs = 'Click the edge of the screen to navigate left or right :)';
        setTimeout(() => this.staticAlertClosed = true, 20000);
        this.route.params.forEach((params: Params) => {
            this.directory = params['dir'];
            this.whatList = [];
            this.getWhat();
        });
    }

    ngAfterViewInit() {
        // TODO: autofocus carousel for keyboard navigation
    }

    closeAlert() {
        this.staticAlertClosed = true;
    }

    getWhat() {
        this.whatObs = this.whatService.getWhat(this.directory);
    }
}

