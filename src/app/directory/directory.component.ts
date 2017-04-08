import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { WhatService } from '../what.service';
import { Response } from '@angular/http';
import { NgbCarouselConfig, NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-directory',
    templateUrl: './directory.component.html',
    styleUrls: ['./directory.component.css'],
    providers: [WhatService, NgbCarouselConfig, NgbAlertConfig]
})
export class DirectoryComponent implements OnInit, AfterViewInit {
    staticAlertClosed = false;
    @ViewChild('myCarousel') carousel;

    public directory: string;
    public errorMessage: string;
    public whatResponse: Response;
    public whatList: Array<string> = [];
    public instructs: string;

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
        /*    var startX, endX;
         var carousel = this.carousel;
         console.log(this.carousel);
         document.addEventListener("dragstart", function (event) {
         startX = event.screenX;
         });
         document.addEventListener("dragend", function (event) {
         endX = event.screenX;
         if ((startX - endX) > 0) {
         carousel.next();
         }
         else {
         carousel.prev();
         }
         });*/
    }

    closeAlert() {
        this.staticAlertClosed = true;
    }

    getWhat() {
        this.whatService.getWhat(this.directory)
            .subscribe(
                whats => this.whatResponse = whats,
                error => this.errorMessage = error,
                () => {
                    this.scourWhat();
                }
            );
    }

    scourWhat() {
        const whats = this.whatResponse.json();
        for (let i = 0; i < whats.length; i++) {
            const what = whats[i];
            const whatType = what.type;
            const whatName = what.name;
            if (whatType === 'file') {
                this.whatList.push(this.whatResponse.url + whatName);
            }
        }
    }
}

