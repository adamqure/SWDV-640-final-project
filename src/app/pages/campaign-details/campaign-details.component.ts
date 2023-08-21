import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Campaign } from 'src/app/data-models/campaign';
import { CampaignDataSourceService } from 'src/app/services/campaign-data-source.service';
import * as Mustache from 'mustache';

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.less']
})
export class CampaignDetailsComponent {
  campaign: Campaign | undefined

  constructor(private route : ActivatedRoute, private router : Router, private dataSource: CampaignDataSourceService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      console.log("Received id:", id)
      this.dataSource.getCampaign(id).then((campaign) => {
        console.log("Received campaign:", campaign)
        this.campaign = campaign

        let componentList = document.getElementsByClassName("campaign-detail");
        let component = componentList.item(0);
        let structure = `
        <img class="campaign-image" src="{{ image }}" style="max-width: 100vw;">
        <h1>{{ name }}</h1>
        <p>{{ numPlayers }} Players -- Level {{ startLevel }} - {{ endLevel }}</p>
        <!-- Overview -->
        {{{html}}}
  
        <!-- Setting -->
        {{{setting.html}}}
  
        <!-- Adventure Hook -->
        {{{adventureHook.html}}}
  
        <!-- Adventures -->
        {{#adventures}}
          {{{html}}}
          {{#events}}
            {{{html}}}
          {{/events}}
        {{/adventures}}
        `;
        let template = Mustache.render(structure, campaign)
        console.log(template)
        if (component) {
          component.innerHTML = template;
        }
      })
   });
  }

  toggleMenuButton() {
    let menu = document.getElementById("main-navigation-content");
    let hamburgerIcon = document.getElementById("navigation-icon");
    if (menu != null && hamburgerIcon != null) {
      if (menu.className === "topnav") {
        menu.className += " responsive";
        hamburgerIcon.setAttribute("aria-expanded", "true")
      } else {
        menu.className = "topnav";
        hamburgerIcon.setAttribute("aria-expanded", "false")
      }
    }
  }
}
