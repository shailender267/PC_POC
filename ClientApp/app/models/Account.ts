export interface Account {
    name: string,
    value: number,
    contacts : number
    influences: number,
    champions: number,
    isHeadQuarter: boolean,
    handRaised: boolean,
    parentHeadQuarter: number,
    isRegionalHeadQuarter: boolean,
    isDomesticHeadquarter :boolean,
    hasAdditionalInfo: boolean,
    location: string,
    localEmployeeCount: number,
    revenue: number,
    revenueCurrency : string
}