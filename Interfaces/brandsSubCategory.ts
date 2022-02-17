export interface BrandsSubCategory {
    _id:              ID;
    name:             string;
    brandId:          ID | null;
    brandName:        null | string;
    categoryMasterId: ID | string;
    userRole:         UserRole | null;
    parentBrandId:    ID;
    createdOn:        EdOn;
    updatedOn?:       EdOn;
    userId:           ID | null;
    archive?:         boolean;
    archivedOn?:      EdOn;
}

export interface ID {
    $oid: string;
}

export interface EdOn {
    $date: string;
}

export enum UserRole {
    BrandManager = "brandManager",
}
