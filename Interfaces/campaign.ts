export interface Campaign {
    _id:                       ID;
    brandId:                   ID | null;
    name:                      string;
    description:               string;
    objective:                 string;
    startDate:                 string;
    endDate:                   string;
    locations:                 string[];
    targetGender:              TargetGender;
    targetAgeGroup:            number[];
    studyMedium:               string[];
    brandCategory?:            string;
    brandSubcategory:          string;
    recommendEvents:           boolean;
    campaignStatus:            Status;
    isApproved:                boolean;
    campaignCreatives?:        Array<null | string>;
    budget:                    number;
    isTrial:                   boolean;
    wisrOffering:              WisrOffering;
    campaignData:              CampaignData;
    paymentStatus:             Status;
    createdOn:                 AtedOn;
    updatedOn?:                AtedOn;
    campaignCreationProgress?: CampaignCreationProgress;
    creativeReworkNeeded?:     boolean;
}

export interface ID {
    $oid: string;
}

export interface CampaignCreationProgress {
    progress:    Progress;
    currentPage: string;
}

export interface Progress {
    brandDetails:      boolean;
    inventory:         boolean;
    school:            boolean;
    recommendedSchool: boolean;
    event:             boolean;
    campaignCreative:  boolean;
    preview:           boolean;
}

export interface CampaignData {
    inventories: Activity[];
    schools:     string[];
    activities:  Activity[];
}

export interface Activity {
    _id:        ID;
    name:       string;
    attributes: string[];
}

export enum Status {
    Draft = "draft",
    InReview = "in-review",
    Pending = "pending",
    Trial = "trial",
}

export interface AtedOn {
    $date: string;
}

export enum TargetGender {
    Boys = "boys",
    CoEd = "co-ed",
    Girls = "girls",
}

export interface WisrOffering {
    inventory:         boolean;
    eventAndOccations: boolean;
    csr:               boolean;
    sampling:          boolean;
    custom:            boolean;
}
