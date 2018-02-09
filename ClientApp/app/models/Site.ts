export interface Site {
    siteId: number,
    masterSiteId: number,
    accountId: number,
    siteName: string,
    industry: string,
    siteAddress1: string,
    siteAddress2: string,
    city: string,
    state: string,
    country: string,
    postalCode: string,
    localEmployeeCount: number,
    revenue: number,
    revenueCurrency: string
}

export interface SiteHistory {
    siteId: number,
    date: Date,
    activity: string,
    status: string,
    notes: string,
}