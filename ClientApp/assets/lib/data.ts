export interface HomeAccounts {
    campaignName: string,
    campaignId: number,
    accountName: string,
    accountId: number,
    lastDateWorked: Date
}
export interface HomeDeliverables {
    campaignName: string,
    campaignId: number,
    deliverableName: string,
    deliverableId: number,
    lastDateWorked: Date
}
export interface HomeResponders {
    campaignName: string,
    campaignId: number,
    responderName: string,
    responderId: number,
    lastDateWorked: Date
}
export const testHomeResponders: HomeResponders[] =
    [
        {
            responderId: 1,
            responderName: 'Test Responder - 1',
            campaignId: 1,
            campaignName: 'Test Campaign - 1',
            lastDateWorked: new Date()
        },
        {
            responderId: 2,
            responderName: 'Test Responder - 2',
            campaignId: 2,
            campaignName: 'Test Campaign - 2',
            lastDateWorked: new Date()
        },
        {
            responderId: 3,
            responderName: 'Test Responder - 3',
            campaignId: 3,
            campaignName: 'Test Campaign - 3',
            lastDateWorked: new Date()
        },
        {
            responderId: 4,
            responderName: 'Test Responder - 4',
            campaignId: 4,
            campaignName: 'Test Campaign - 4',
            lastDateWorked: new Date()
        }
  ]
export const testHomeDeliverables: HomeDeliverables[] =
    [
        {
            deliverableId: 1,
            deliverableName: 'Test Deliverable - 1',
            campaignId: 1,
            campaignName: 'Test Campaign - 1',
            lastDateWorked: new Date()
        },
        {
            deliverableId: 2,
            deliverableName: 'Test Deliverable - 2',
            campaignId: 2,
            campaignName: 'Test Campaign - 2',
            lastDateWorked: new Date()
        },
        {
            deliverableId: 3,
            deliverableName: 'Test Deliverable - 3',
            campaignId: 3,
            campaignName: 'Test Campaign - 3',
            lastDateWorked: new Date()
        }]
export const testHomeAccounts: HomeAccounts[] =
    [
        {
            accountId: 1,
            accountName: 'Test Account - 1',
            campaignId: 1,
            campaignName: 'Test Campaign - 1',
            lastDateWorked: new Date()
        },
        {
            accountId: 2,
            accountName: 'Test Account - 2',
            campaignId: 2,
            campaignName: 'Test Campaign - 2',
            lastDateWorked: new Date()
        },
        {
            accountId: 3,
            accountName: 'Test Account - 3',
            campaignId: 3,
            campaignName: 'Test Campaign - 3',
            lastDateWorked: new Date()
        },
        {
            accountId: 4,
            accountName: 'Test Account - 4',
            campaignId: 4,
            campaignName: 'Test Campaign - 4',
            lastDateWorked: new Date()
        },
        {
            accountId: 5,
            accountName: 'Test Account - 5',
            campaignId: 5,
            campaignName: 'Test Campaign - 5',
            lastDateWorked: new Date()
        }]
export interface Account {
    name: string;
    value: number;
    influences: number;
    champions: number;
    isHeadQuarter: boolean;
    handRaised: boolean;
    parentHeadQuarter: string;
    isRegionalHeadQuarter: boolean,
    hasAdditionalInfo: boolean
}
export interface client {
    campaignId: number;
    campaignName: string;
    clientId: number;
    clientName: string;
    numberOfAccountsAssined: number;
    assignedDeliverablesForCampaign: number;
    numberOfRespondersAssigned: number;
}
export const testclient: client[] = [
    {
        campaignId: 0,
        campaignName: '',
        clientId: 1,
        clientName: 'SAP',
        numberOfAccountsAssined: 0,
        assignedDeliverablesForCampaign: 0,
        numberOfRespondersAssigned: 0,
    },
    {
        campaignId: 1,
        campaignName: 'Campaingn X',
        clientId: 1,
        clientName: 'SAP',
        numberOfAccountsAssined: 15,
        assignedDeliverablesForCampaign: 12,
        numberOfRespondersAssigned: 10,
    },
    {
        campaignId: 2,
        campaignName: 'Campaingn Y',
        clientId: 1,
        clientName: 'SAP',
        numberOfAccountsAssined: 22,
        assignedDeliverablesForCampaign: 18,
        numberOfRespondersAssigned: 30,
    },
    {
        campaignId: 3,
        campaignName: 'Campaingn Z',
        clientId: 1,
        clientName: 'SAP',
        numberOfAccountsAssined: 37,
        assignedDeliverablesForCampaign: 9,
        numberOfRespondersAssigned: 14,
    },
    {
        campaignId: 4,
        campaignName: 'Campaingn A',
        clientId: 1,
        clientName: 'SAP',
        numberOfAccountsAssined: 4,
        assignedDeliverablesForCampaign: 14,
        numberOfRespondersAssigned: 24,
    },
    {
        campaignId: 5,
        campaignName: 'Campaingn B',
        clientId: 1,
        clientName: 'SAP',
        numberOfAccountsAssined: 11,
        assignedDeliverablesForCampaign: 65,
        numberOfRespondersAssigned: 19,
    },
]
export const testAccount: Account[] = [
    {
        name: 'Irvine CA',
        value: 1,
        influences: 5,
        champions: 0,
        isHeadQuarter: true,
        handRaised: false,
        parentHeadQuarter: '',
        isRegionalHeadQuarter: false,
        hasAdditionalInfo: false
    },
    {
        name: 'Pheonix, AZ',
        value: 2,
        influences: 3,
        champions: 22,
        isHeadQuarter: false,
        handRaised: false,
        parentHeadQuarter: 'Irvine CA',
        isRegionalHeadQuarter: false,
        hasAdditionalInfo: true
    },
    {
        name: 'Houston, TX',
        value: 3,
        influences: 8,
        champions: 5,
        isHeadQuarter: false,
        handRaised: false,
        parentHeadQuarter: 'Irvine CA',
        isRegionalHeadQuarter: false,
        hasAdditionalInfo: false
    },
    {
        name: 'Las Vegas, NV',
        value: 4,
        influences: 1,
        champions: 1,
        isHeadQuarter: false,
        handRaised: false,
        parentHeadQuarter: 'Irvine CA',
        isRegionalHeadQuarter: false,
        hasAdditionalInfo: false
    },
    {
        name: 'Seattle, WA',
        value: 5,
        influences: 8,
        champions: 6,
        isHeadQuarter: false,
        handRaised: true,
        parentHeadQuarter: 'Irvine CA',
        isRegionalHeadQuarter: false,
        hasAdditionalInfo: false
    },
    {
        name: 'Hyderabad, IN',
        value: 6,
        influences: 8,
        champions: 0,
        isHeadQuarter: false,
        handRaised: false,
        parentHeadQuarter: 'Irvine CA',
        isRegionalHeadQuarter: true,
        hasAdditionalInfo: false
    },
    {
        name: 'Portland, OR',
        value: 7,
        influences: 23,
        champions: 7,
        isHeadQuarter: false,
        handRaised: false,
        parentHeadQuarter: 'Irvine CA',
        isRegionalHeadQuarter: false,
        hasAdditionalInfo: false
    },
    {
        name: 'Atlanta, GA',
        value: 8,
        influences: 14,
        champions: 6,
        isHeadQuarter: false,
        handRaised: false,
        parentHeadQuarter: 'Irvine CA',
        isRegionalHeadQuarter: false,
        hasAdditionalInfo: false
    },
    {
        name: 'Dallas, TX',
        value: 9,
        influences: 2,
        champions: 8,
        isHeadQuarter: false,
        handRaised: false,
        parentHeadQuarter: 'Irvine CA',
        isRegionalHeadQuarter: false,
        hasAdditionalInfo: false
    },
    {
        name: 'Chicago, IL',
        value: 10,
        influences: 4,
        champions: 12,
        isHeadQuarter: false,
        handRaised: false,
        parentHeadQuarter: 'Irvine CA',
        isRegionalHeadQuarter: false,
        hasAdditionalInfo: false
    },
    {
        name: 'Denver, CO',
        value: 11,
        influences: 11,
        champions: 10,
        isHeadQuarter: false,
        handRaised: false,
        parentHeadQuarter: 'Irvine CA',
        isRegionalHeadQuarter: false,
        hasAdditionalInfo: false
    },
    {
        name: 'New York, NY',
        value: 12,
        influences: 8,
        champions: 10,
        isHeadQuarter: false,
        handRaised: true,
        parentHeadQuarter: 'Irvine CA',
        isRegionalHeadQuarter: false,
        hasAdditionalInfo: false
    },
    {
        name: 'State-A, IN',
        value: 21,
        influences: 8,
        champions: 10,
        isHeadQuarter: false,
        handRaised: false,
        parentHeadQuarter: 'Bangalore, IN',
        isRegionalHeadQuarter: false,
        hasAdditionalInfo: false
    },
    {
        name: 'State-B, IN',
        value: 13,
        influences: 8,
        champions: 5,
        isHeadQuarter: false,
        handRaised: false,
        parentHeadQuarter: 'Bangalore, IN',
        isRegionalHeadQuarter: false,
        hasAdditionalInfo: false
    },
    {
        name: 'State-3, IN',
        value: 14,
        influences: 8,
        champions: 5,
        isHeadQuarter: false,
        handRaised: false,
        parentHeadQuarter: 'Bangalore, IN',
        isRegionalHeadQuarter: false,
        hasAdditionalInfo: false
    },
    {
        name: 'State-4, IN',
        value: 14,
        influences: 8,
        champions: 5,
        isHeadQuarter: false,
        handRaised: false,
        parentHeadQuarter: 'Bangalore, IN',
        isRegionalHeadQuarter: false,
        hasAdditionalInfo: false
    },
    {
        name: 'Bangalore, IN',
        value: 15,
        influences: 8,
        champions: 4,
        isHeadQuarter: false,
        handRaised: false,
        parentHeadQuarter: 'Hyderabad, IN',
        isRegionalHeadQuarter: true,
        hasAdditionalInfo: false
    },
    {
        name: 'Kochi, IN',
        value: 16,
        influences: 1,
        champions: 3,
        isHeadQuarter: false,
        handRaised: false,
        parentHeadQuarter: 'Hyderabad, IN',
        isRegionalHeadQuarter: false,
        hasAdditionalInfo: false
    },
    {
        name: 'Mumbai, IN',
        value: 20,
        influences: 1,
        champions: 3,
        isHeadQuarter: false,
        handRaised: false,
        parentHeadQuarter: 'Bangalore, IN',
        isRegionalHeadQuarter: false,
        hasAdditionalInfo: false
    },
    {
        name: 'Chennai, IN',
        value: 19,
        influences: 1,
        champions: 3,
        isHeadQuarter: false,
        handRaised: false,
        parentHeadQuarter: 'Hyderabad, IN',
        isRegionalHeadQuarter: false,
        hasAdditionalInfo: false
    },
    {
        name: 'Delhi, IN',
        value: 18,
        influences: 1,
        champions: 3,
        isHeadQuarter: false,
        handRaised: false,
        parentHeadQuarter: 'Hyderabad, IN',
        isRegionalHeadQuarter: false,
        hasAdditionalInfo: false
    },
];





