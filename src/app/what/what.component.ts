import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { WhatService } from '../what.service';
import '../rxjs-operators';

@Component({
    selector: 'app-what',
    templateUrl: './what.component.html',
    styleUrls: ['./what.component.css'],
    providers: [WhatService]
})
export class WhatComponent implements OnInit {
    public errorMessage: string;
    public whatResponse: Response;
    public whatKeys: Array<string> = [];
    public isCollapsed = true;

    constructor(private whatService: WhatService) {}

    ngOnInit() {
        this.getWhat();
    }

    /* Uses action methods
     */
    getWhat(dir?: string) {
        this.whatService.getWhat(dir)
            .subscribe(
                whats => this.whatResponse = whats,
                error => this.errorMessage = error,
                () => {
                    this.scourWhat();
                }
            );
    }

    /*
     * Gets the directory name and fills that key
     * in the array with urls of its children.
     */
    scourWhat() {
        const whats = this.whatResponse.json();
        for (let i = 0; i < whats.length; i++) {
            const what = whats[i];
            const whatType = what.type;
            const whatName = what.name;
            if (whatType === 'directory') {
                this.whatKeys.push(whatName);
            }
        }
    }
}

