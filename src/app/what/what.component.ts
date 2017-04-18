import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { WhatService } from '../what.service';
import '../rxjs-operators';
import {Observable} from "rxjs";

@Component({
    selector: 'app-what',
    templateUrl: './what.component.html',
    styleUrls: ['./what.component.css'],
    providers: [WhatService]
})
export class WhatComponent implements OnInit {
    public isCollapsed = true;
    public whatObs: Observable<Response>;

    constructor(private whatService: WhatService) {}

    ngOnInit() {
        this.getWhat();
    }

    /* Uses action methods
     */
    getWhat(dir?: string) {
        this.whatObs = this.whatService.getWhat(dir);
    }
}

