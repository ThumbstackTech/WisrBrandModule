export interface ActivitiesAttributes {
    _id:                  ID;
    name:                 string;
    isCustom:             boolean;
    availableForBranding: boolean;
    allowBrandsToProvide: boolean;
    activity:             ID;
    createdOn:            CreatedOn;
}

export interface ID {
    $oid: string;
}

export interface CreatedOn {
    $date: string;
}
