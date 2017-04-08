import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import {NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.css'],
    providers: [NgbTooltipConfig]
})
export class CommentComponent implements OnInit {
    public urlSeg: string;

    constructor( private router: Router ) {}

    ngOnInit() {
        this.router.events
            .filter(event => event instanceof RoutesRecognized)
            .subscribe(event => {
                //TODO this code results in command line error during `ng serve`
                // this.urlSeg = event.url;
            });
    }

}

