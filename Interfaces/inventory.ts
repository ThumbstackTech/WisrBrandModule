export interface Inventory {
	_id: ID;
	type: Type | string;
	_custom?: boolean;
	name: string;
	customName?: null | string;
	school: ID;
	createdOn: CreatedOn;
	images?: string[];
}

export interface ID {
	$oid: string;
}

export interface CreatedOn {
	$date: string;
}

export enum Type {
	Classroom = 'classroom',
	CommonArea = 'commonArea',
	EventsOccasions = 'events&Occasions',
	OtherRoomsStaff = 'otherRooms&Staff',
	Outdoor = 'outdoor',
	School = 'school',
	Student = 'student',
}
