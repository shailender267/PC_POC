export interface Campaign {
    campaignId: number;
    clientId: number;
    clientName: string;
    name: string,
    displayName: string;
    description: string;
    inBoundNumber: string;
    campaignType: number;
    thresholdType: number;
    strategyType: number;
    qcAvailabilityOption: number;
    thresholdValue: number;
    thresholdOverrideValue: number;
}