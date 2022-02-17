export interface Brand {
    _id:               ID;
    logo?:             string;
    brandName:         string;
    brandType?:        ID | string;
    website?:          string;
    documents?:        Documents;
    address?:          string;
    contactNumber?:    string;
    country?:          Country;
    city?:             string;
    state?:            string;
    zip?:              string;
    description?:      string;
    attributes?:       any[];
    socialMediaLinks?: SocialMediaLinks;
    createdOn:         AtedOn;
    lastActiveAt?:     string;
    updatedOn?:        AtedOn;
    parentBrand?:      ID;
    isParent?:         boolean;
    lastActivity?:     string;
}

export interface ID {
    $oid: string;
}

export enum Country {
    Empty = "",
    India = "India",
}

export interface AtedOn {
    $date: string;
}

export interface Documents {
    gst: Gst;
    pan: Gst;
}

export interface Gst {
    file:        string;
    number:      string;
    isVerified?: boolean;
    status?:     string;
}


export interface SocialMediaLinks {
    twitter:   string;
    linkedin:  string;
    instagram: string;
    other:     string[];
    linkedIn?: string;
    facebook?: string;
}
