export interface Activities {
    _id:                  ID;
    name:                 string;
    venue:                string[];
    custom:               boolean;
    months:               string[] | string;
    availableForBranding: boolean;
    school:               ID;
    createdOn:            CreatedOn;
}

export interface ID {
    $oid: string;
}

export interface CreatedOn {
    $date: string;
}
