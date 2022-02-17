export interface School {
	_id: ID;
	schoolName: string;
	educationLevel: EduLevel[];
	schoolType: SchoolTypeClass | SchoolTypeEnum;
	board: BoardClass | BoardEnum;
	language: LanguageClass | string;
	pincode?: string;
	state: State | string;
	city: string;
	address: string;
	builtUpArea: number;
	floors: number;
	termsAgreed: boolean;
	termsAgreedOn: EdOn;
	createdOn: EdOn;
	initialApproval?: boolean;
	updatedOn?: EdOn;
}

export interface ID {
	$oid: string;
}

export interface BoardClass {
	classWiseDetails: BoardClassWiseDetail[];
	board: BoardEnum;
}

export enum BoardEnum {
	Cbsc = 'cbsc',
	Cbse = 'cbse',
	Custom = 'Custom',
	Icse = 'icse',
	Igsce = 'igsce',
	Other = 'Other',
	State = 'state',
}

export interface BoardClassWiseDetail {
	eduLevel: EduLevel;
	board: BoardEnum;
	otherBoard: string;
}

export enum EduLevel {
	HigherSeniorSecondary102 = 'Higher/Senior Secondary(10+2)',
	JuniorKgSeniorKg = 'Junior Kg/Senior Kg',
	Kindergarden = 'Kindergarden',
	NurseryPlaygroup = 'Nursery/Playgroup',
	Primary14 = 'Primary (1 - 4)',
	Secondary510 = 'Secondary (5 - 10)',
}

export interface EdOn {
	$date: string;
}

export interface LanguageClass {
	classWiseDetails: LanguageClassWiseDetail[];
	language: Lang;
}

export interface LanguageClassWiseDetail {
	eduLevel: EduLevel;
	lang: Lang;
}

export enum Lang {
	Assamese = 'Assamese',
	BengaliBangla = 'Bengali (Bangla)',
	Bodo = 'Bodo',
	Custom = 'Custom',
	English = 'English',
	Gujarati = 'Gujarati',
	Hindi = 'Hindi',
	Marathi = 'Marathi',
}

export interface SchoolTypeClass {
	classWiseDetails: SchoolTypeClassWiseDetail[];
	schoolType: SchoolTypeEnum;
}

export interface SchoolTypeClassWiseDetail {
	eduLevel: EduLevel;
	schoolType: SchoolTypeEnum;
}

export enum SchoolTypeEnum {
	Boys = 'boys',
	CoEd = 'co-ed',
	Custom = 'Custom',
	Girls = 'girls',
}

export enum State {
	Gujarat = 'Gujarat',
	Karnataka = 'Karnataka',
	Maharashtra = 'Maharashtra',
	Rajasthan = 'Rajasthan',
	TamilNadu = 'Tamil Nadu',
	Telangana = 'Telangana',
	UttarPradesh = 'Uttar Pradesh',
	Uttarakhand = 'Uttarakhand',
	Uttrakhand = 'UTTRAKHAND',
}
