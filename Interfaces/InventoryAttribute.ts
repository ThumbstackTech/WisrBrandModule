export interface InventoryAttributes {
    _id:        ID;
    name:       string;
    _isCustom?: boolean;
    units:      Units;
    length:     number;
    breadth:    number;
    height:     number;
    inventory:  ID;
    createdOn:  CreatedOn;
}

export interface ID {
    $oid: string;
}

export interface CreatedOn {
    $date: string;
}

export enum Units {
    Feet = "feet",
    Inches = "inches",
}
