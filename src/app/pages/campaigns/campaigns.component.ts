import { Component } from '@angular/core';
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

  constructor(private dataSource: CampaignDataSourceService) {
    this.campaignList = new Subject<Campaign[]>();
    this.campaigns = this.campaignList.asObservable();
  }

  ngOnInit() {
    this.dataSource.dataChanged.subscribe((_updated) => {
      this.dataSource.getAllCampaigns().then((campaigns) => {
        console.log("Received Campaigns:", campaigns);
        this.campaignList.next(campaigns);
      })
    });
  }
}
