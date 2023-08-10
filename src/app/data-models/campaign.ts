import { Adventure } from "./adventure"
import { CampaignEvent } from "./campaign-event"
import { CampaignSetting } from "./campaign-setting"

export class Campaign {
    _id: any | undefined
    name: string
    image: string | undefined
    setting: CampaignSetting
    adventureHook: CampaignEvent
    adventures: Adventure[]
    html: string

    constructor(
        _id: any | undefined = undefined, 
        name: string,
        image: string | undefined,
        setting: CampaignSetting,
        adventureHook: CampaignEvent,
        adventures: Adventure[], 
        html: string,
    ) {
        this._id = _id
        this.name = name
        this.image = image
        this.setting = setting
        this.adventureHook = adventureHook
        this.adventures = adventures
        this.html = html
    }
}