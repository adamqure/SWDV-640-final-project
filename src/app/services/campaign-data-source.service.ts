import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Campaign } from '../data-models/campaign';
import { CampaignGeneratorService } from './campaign-generator.service';
import { LocalStorageService } from './local-storage.service';
import { CampaignFormResponse } from '../data-models/campaign-form-response';

@Injectable({
  providedIn: 'root'
})
export class CampaignDataSourceService {
  dataChanged: Observable<boolean>;
  private dataChangeSubject: Subject<boolean>;
  campaigns: Campaign[] = []

  constructor(private generatorService: CampaignGeneratorService, private localStorageService: LocalStorageService) { 
    this.dataChangeSubject = new Subject<boolean>();
    this.dataChanged = this.dataChangeSubject.asObservable();
    console.log("Campaign Data Source Service Initialized");
  }

  async getAllCampaigns(): Promise<Campaign[]> {
    console.log("Fetching all campaigns");
    await this.localStorageService.getCampaignList().then((response) => {
      this.campaigns = response
    }) 
    return this.campaigns;
  }

  getCampaign(withID: string | undefined | null): Promise<Campaign> {
    console.log("Fetching campaign", withID);
    return this.localStorageService.getCampaign(withID)
  }

  deleteCampaign(campaign: Campaign) {
    console.log("Deleting campaign", campaign);
  }

  createCampaign(formResponse: CampaignFormResponse) {
    console.log("Creating campaign with parameters", formResponse);
    let newCampaign = this.generatorService.generateCampaign(formResponse);
    this.localStorageService.createCampaign(newCampaign, () => {
      this.dataChangeSubject.next(true);
    })
  }
}
