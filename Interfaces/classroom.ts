export interface Classroom {
    _id:           ID;
    class:         string;
    noOfSections:  number;
    ageByStandard: number;
    boys?:         BoysClass | number;
    girls?:        BoysClass | number;
    avgAnnualFee:  number;
    school:        ID;
    createdOn:     CreatedOn;
}

export interface ID {
    $oid: string;
}

export interface BoysClass {
    $numberDouble: string;
}

export interface CreatedOn {
    $date: string;
}
