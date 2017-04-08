import {Component, OnInit} from '@angular/core';
import {NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [NgbTooltipConfig]
})
export class HomeComponent implements OnInit {
    blurb = `Hey friends and fam! Sienna & I ran off and got married in Joshua Tree on October 15th. We wanted to 
            celebrate our love and figured a wedding was just the thing. Friends rallied down to the desert (in style) 
            and helped make this event into a masterpiece. We built our own furniture, collected decorations from flea 
            markets, bought a case of champagne and headed into Joshua Tree National Park for a photoshoot. We parked 
            the Volkswagen on an old lake bed and unfolded a brilliant dining table. Solar panels lit the scene where we 
            feasted and spoke aloud under the full moon. Our dear Josh got ordained and led the ceremonies as we stood 
            in between the van and the table-of-plenty. This was a safe space that set the stage for a truly bonding 
            sacrament. All of your influence brought us to this very place in our lives, and we thank you directly. This 
            website is our product to share. It is the finest culmination of our combined skills, fueled especially with 
            love. We hope that this can transport you to that far away place where something special once began.`;
    disclaimer = `Friends and family can expect an invitation for a secondary celebration in Berkeley next October 15th. 
                  Mark your calendars :)`;
    tooltip = 'Peeks are up here!';
    thanks = 'special thanks to everyone who helped us take photos, particularly Simon Hill for his digital batch';
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

