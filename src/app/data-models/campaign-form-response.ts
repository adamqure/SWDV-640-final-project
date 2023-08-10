export class CampaignFormResponse {
    // Constants
    static readonly minCharacters = 1
    static readonly minStartingLevel = 1
    static readonly minEndingLevel = 5
    static readonly defaultRolePlayingScale = 1
    static readonly defaultTrapScale = 1
    static readonly defaultPuzzleScale = 1
    static readonly defaultCombatScale = 1

    // Field Values
    numPlayerCharacters: number
    startingLevel: number
    endingLevel: number
    rolePlayingScale: number
    trapScale: number
    puzzleScale: number
    combatScale: number

    // Error handling will be handled with form validation
    constructor(
        numPlayerCharacters: number = CampaignFormResponse.minCharacters,
        startingLevel: number = CampaignFormResponse.minStartingLevel,
        endingLevel: number = CampaignFormResponse.minEndingLevel,
        rolePlayingScale: number = CampaignFormResponse.defaultRolePlayingScale,
        trapScale: number = CampaignFormResponse.defaultTrapScale,
        puzzleScale: number = CampaignFormResponse.defaultPuzzleScale,
        combatScale: number = CampaignFormResponse.defaultCombatScale
    ) {
        this.numPlayerCharacters = numPlayerCharacters
        this.startingLevel = startingLevel
        this.endingLevel = endingLevel
        this.rolePlayingScale = rolePlayingScale
        this.trapScale = trapScale
        this.puzzleScale = puzzleScale
        this.combatScale = combatScale
    }
}