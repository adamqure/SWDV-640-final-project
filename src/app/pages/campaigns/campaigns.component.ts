import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Mustache from 'mustache';
import { Observable, Subject } from 'rxjs';
import { Campaign } from 'src/app/data-models/campaign';
import { CampaignDataSourceService } from 'src/app/services/campaign-data-source.service';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.less']
})
export class CampaignsComponent {
  campaigns: Observable<Campaign[]> = new Observable()
  private campaignList: Subject<Campaign[]>

  constructor(private route : ActivatedRoute, private router : Router, private dataSource: CampaignDataSourceService) {
    this.campaignList = new Subject<Campaign[]>();
    this.campaigns = this.campaignList.asObservable();
  }

  ngOnInit() {
    this.dataSource.getAllCampaigns().then((campaigns) => {
      console.log("Received Campaigns:", campaigns);
      this.campaignList.next(campaigns);

      let componentList = document.getElementsByClassName("campaign-list");
      let component = componentList.item(0);
      let structure = `
        {{ #campaigns }}
          <h2 id="{{ _id }}">{{ name }}</h2>
        {{ /campaigns }}
      `;
      let template = Mustache.render(structure, {
        campaigns: campaigns
      })
      console.log("Template: " + template)
      if (component) {
        component.innerHTML = template;
      }

      campaigns.forEach((campaign) => {
        let campaignComponent = document.getElementById(campaign._id);
        if (campaignComponent) {
          campaignComponent?.addEventListener("click", () => {
            campaignClicked(campaign._id)
          })
        }
        
        const campaignClicked = (id: any) => {
          this.router.navigate(["campaign", id])
        }
      })
    })
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
