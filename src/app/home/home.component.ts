import {Component, OnInit} from '@angular/core';
import {NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [NgbTooltipConfig]
})
export class HomeComponent implements OnInit {
    blurb = `SITE UNDER CONSTRUCT`;
    disclaimer = `going for a masonry layout and regular daily life content :)`;
    tooltip = 'Peeks are up here!';
    claim = 'site made from scratch by Austin Zee, photos curated & edited by Sienna Bee';
    spotify = '~playlist~';

    constructor(config: NgbTooltipConfig) {
        if (window.matchMedia('(max-width: 767px)').matches) {
            config.placement = 'top';
            config.triggers = 'click';
        } else {
            config.placement = 'top';
            config.triggers = 'hover';
        }
    }

    ngOnInit() {
    }


}

