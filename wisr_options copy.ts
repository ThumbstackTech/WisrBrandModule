export{}
// import SchoolData from './data/school';
// import InventoryData from './data/inventories';
// import ClassroomData from './data/classrooms';
// import BrandData from './data/brand';
// import BrandSubCategoryData from './data/brandCategoryMaster';
// import InventoryAttributesData from './data/inventoryAttributes';
// import ActivitiesAttributesData from './data/activitiesAttribute';
// import ActivitiesData from './data/activities';
// import campaignData from './data/campaign';

// import { Activities } from './Interfaces/activities';
// import { School } from './Interfaces/School';
// import { Classroom } from './Interfaces/classroom';
// import { Inventory } from './Interfaces/inventory';
// import { Brand } from './Interfaces/brand';
// import { BrandsSubCategory } from './Interfaces/brandsSubCategory';
// import { InventoryAttribute } from './Interfaces/InventoryAttribute';
// import { ActivitiesAttribute } from './Interfaces/activitiesAttributes';
// import { Campaign } from './Interfaces/campaign';
// import { BehaviorSubject, from, range } from 'rxjs';

// // type OptionName = 'Locations' | 'Medium' | 'Inventory';
// // export interface FilteredLocation {
// // 	State: string;
// // 	City: string;
// // }
// // export interface FilteredMedium {
// // 	language: string;
// // }
// // export interface FilteredInventory {
// // 	inventoryName: string;
// // }
// export interface WisrOptionData {
// 	schools?: any[];
// 	classrooms?: any[];
// 	inventories?: any[];
// 	inventoryAttributes?: any[];
// 	activities?: any[];
// 	activitiesAttributes?: any[];
// 	campaign: Campaign;
// }
// interface WisrRecommend {
// 	school$: BehaviorSubject<School[]>;
// 	reach$: BehaviorSubject<number>;
// 	impressions$: BehaviorSubject<number>;
// 	genderRatio$: BehaviorSubject<number>;
// 	location$: BehaviorSubject<string[]>;
// }

// export default class WisrOption {
// 	private wisrOptionData: WisrOptionData;
// 	// public school$ = new BehaviorSubject<School[]>([]);

// 	public wisrRecommend: WisrRecommend = {
// 		genderRatio$: new BehaviorSubject<number>(0),
// 		impressions$: new BehaviorSubject<number>(0),
// 		reach$: new BehaviorSubject<number>(0),
// 		school$: new BehaviorSubject<School[]>([]),
// 		location$: new BehaviorSubject<string[]>([]),
// 	};

// 	constructor(wisrOptionData: WisrOptionData) {
// 		this.wisrOptionData = wisrOptionData;
// 		const {
// 			campaign,
// 			activities,
// 			activitiesAttributes,
// 			classrooms,
// 			inventories,
// 			inventoryAttributes,
// 			schools,
// 		} = this.wisrOptionData;
// 		// this.school$.next(
// 		// 	this.FilterSchoolLocationWise(campaign?.locations!, schools!)
// 		// );

// 		this.wisrRecommend.school$.next(
// 			this.FilterSchoolLocationWiseAndGenderAndAge(
// 				campaign?.locations!,
// 				schools!
// 			)
// 		);

// 		// this.wisrRecommend.reach$.next();
// 		this.wisrRecommend.school$.subscribe({
// 			next: (schools) => {
// 				this.GetReachFromSchools(schools, classrooms);
// 			},
// 		});
// 	}

// 	private FilterSchoolLocationWiseAndGenderAndAge(
// 		Cities: string[],
// 		Schools?: School[]
// 	): School[] {
// 		const FilteredSchoolByLocation: School[] = Schools
// 			? Schools.filter((school) => Cities.includes(school.city))
// 			: this.wisrOptionData.schools!.filter((school) =>
// 					Cities.includes(school.city)
// 			  );

// 		const FilteredSchoolByGender = FilteredSchoolByLocation.filter(
// 			(school: School) =>
// 				school.schoolType === this.wisrOptionData.campaign.targetGender
// 		);
// 		const ageGroup$ = range(
// 			this.wisrOptionData.campaign.targetAgeGroup![0],
// 			this.wisrOptionData.campaign.targetAgeGroup![1] -
// 				this.wisrOptionData.campaign.targetAgeGroup![0]
// 		);
// 		let ageGroup: number[];

// 		ageGroup$.subscribe({
// 			next: (age) => ageGroup.push(age),
// 		});
// 		const FilteredSchoolByAge = FilteredSchoolByGender.filter(
// 			(school: School) => {
// 				this.wisrOptionData.campaign.targetAgeGroup;
// 			}
// 		);
// 		// console.log(ageGroup);

// 		return FilteredSchoolByGender;
// 	}

// 	private GetReachFromSchools(schools: School[], classrooms?: Classroom[]) {
// 		const schools$ = from(schools);
// 		let reach: number;
// 		schools$.subscribe({
// 			next: (school) => {
// 				const classroom$ = from(
// 					classrooms!.filter(
// 						(classroom) =>
// 							classroom.school.$oid == school._id.$oid &&
// 							this.wisrOptionData.campaign.targetAgeGroup!.includes(
// 								classroom.ageByStandard
// 							)
// 					)
// 				);
// 				classroom$.subscribe({
// 					next: (classroom) => {
// 						const NoOfBoys = Number(classroom.boys);
// 						const NoOfGirls = Number(classroom.girls);

// 						const NoOfStudents = NoOfBoys + NoOfGirls;

// 						// console.log(NoOfStudents);
// 					},
// 				});
// 				// console.log(school._id.$oid);
// 			},
// 		});
// 	}

// 	// public getSelectedOptions = (
// 	// 	OptionName: OptionName,
// 	// 	FilteredLocation?: FilteredLocation,
// 	// 	FilteredMedium?: FilteredMedium,
// 	// 	FilteredInventory?: FilteredInventory
// 	// ) => {
// 	// 	if (OptionName === 'Locations') {
// 	// 		return this.filterLocation(FilteredLocation!);
// 	// 	}
// 	// 	if (OptionName === 'Medium') {
// 	// 		return this.filterMedium(FilteredMedium!);
// 	// 	}
// 	// 	if (OptionName === 'Inventory') {
// 	// 		return this.filterInventory(FilteredInventory!);
// 	// 	}
// 	// };
// 	// public filterLocation = (location: FilteredLocation) => {
// 	// 	const { State, City } = location;
// 	// 	let { Campaign } = this.AllSchoolCampaignData;
// 	// 	let allLocations = [
// 	// 		Campaign?.forEach((campaign) => {
// 	// 			campaign.locations;
// 	// 		}),
// 	// 		City,
// 	// 	];
// 	// 	let filteredSchool = [];
// 	// 	if (State.length !== 0 && City.length !== 0) {
// 	// 		for (let i = 0; i < SchoolData.length; i++) {
// 	// 			if (
// 	// 				SchoolData[i].state === State ||
// 	// 				allLocations.indexOf(SchoolData[i].city) > -1
// 	// 			) {
// 	// 				filteredSchool.push(SchoolData[i]);
// 	// 			}
// 	// 		}
// 	// 	}
// 	// 	return filteredSchool;
// 	// };
// 	// public filterMedium = (medium: FilteredMedium) => {
// 	// 	const { language } = medium;
// 	// 	let filteredSchool = [];
// 	// 	for (let i = 0; i < SchoolData.length; i++) {
// 	// 		if (SchoolData[i].language === language) {
// 	// 			filteredSchool.push(SchoolData[i]);
// 	// 		}
// 	// 	}
// 	// 	return filteredSchool;
// 	// };
// 	// public filterInventory = (inventoryname: FilteredInventory) => {
// 	// 	const { inventoryName } = inventoryname;
// 	// 	let filteredSchool = [];
// 	// 	for (let i = 0; i < InventoryData.length; i++) {
// 	// 		if (InventoryData[i].name === inventoryName) {
// 	// 			for (let j = 0; j < SchoolData.length; j++) {
// 	// 				if (SchoolData[j]._id.$oid === InventoryData[i].school.$oid) {
// 	// 					filteredSchool.push(SchoolData[j]);
// 	// 				}
// 	// 			}
// 	// 		}
// 	// 	}
// 	// 	return filteredSchool;
// 	// };
// }
// // let filteredSchools = new SchoolFilter(
// // BrandList: BrandData,
// // SchoolList: SchoolData,
// // Classroom: ClassroomData,
// // Inventories: InventoryData,
// // InventoryAttributes: InventoryAttributesData,
// // Activities: ActivitiesData,
// // ActivitiesAttributes: ActivitiesAttributesData
// // )
// // let filteredSchools = new SchoolFilter({Campaign: CampaignData[0]})
// // console.log(filteredSchools.getSelectedOptions('Locations',{City: 'thane',State: 'Maharashtra'},{language: ''}))
// // console.log(filteredSchools.getSelectedOptions('Medium',{City: '',State: ''},{language: 'Hindi'}))
// // console.log(filteredSchools.getSelectedOptions('Inventory',{City: '',State: ''},{language: ''},{inventoryName: 'Uniform'}))
// // console.log(filteredSchools.filterInventory({inventoryName: 'Auditorium 1'}))
// // console.log(filteredSchools.filterLocation({City: 'thane', State: 'Maharashtra'}))
// // console.log(filteredSchools.filterMedium({language: 'English'}))
// const campaign = {
// 	_id: {
// 		$oid: '61efccdc6b644e000970291d',
// 	},
// 	brandId: {
// 		$oid: '61efc9496b644e0009702919',
// 	},
// 	name: 'Nike',
// 	description: 'Men shoes',
// 	objective: 'Men',
// 	startDate: '2022-02-05',
// 	endDate: '2022-02-05',
// 	locations: ['palghar', 'jaipur', 'mumbai suburban'],
// 	targetGender: 'co-ed',
// 	targetAgeGroup: [10, 20],
// 	studyMedium: ['English', 'Gujarati', 'Hindi'],
// 	brandCategory: '619cc735bc9cb529b8dd0fd9',
// 	brandSubcategory: '61efc9496b644e000970291a',
// 	recommendEvents: false,
// 	campaignStatus: 'in-review',
// 	isApproved: false,
// 	campaignCreatives: [
// 		'1643105466361-image (2).png',
// 		'1643105469397-Wisr-School - 20-01-2022Localhost.png',
// 		'1643105472345-image (2).png',
// 	],
// 	budget: 8000000,
// 	isTrial: false,
// 	wisrOffering: {
// 		inventory: true,
// 		eventAndOccations: true,
// 		csr: false,
// 		sampling: false,
// 		custom: false,
// 	},
// 	campaignData: {
// 		inventories: [
// 			{
// 				_id: {
// 					$oid: '615ae6c6954fe735a49a05a7',
// 				},
// 				name: 'Auditorium',
// 				attributes: ['Stage', 'Screens'],
// 			},
// 			{
// 				_id: {
// 					$oid: '615ae6c6954fe735a49a05b0',
// 				},
// 				name: 'Notice Board',
// 				attributes: ['Board'],
// 			},
// 			{
// 				_id: {
// 					$oid: '615ae6c6954fe735a49a05ad',
// 				},
// 				name: 'School Bus',
// 				attributes: ['Seat Covers'],
// 			},
// 		],
// 		schools: [
// 			'613b2982ef861d00094c23e9',
// 			'614439f2090e67000baeb505',
// 			'61544a30142d520008ac75cd',
// 		],
// 		activities: [],
// 	},
// 	paymentStatus: 'pending',
// 	createdOn: {
// 		$date: '2022-01-25T10:11:40.478Z',
// 	},
// };
// const CampaignObj = new WisrOption({
// 	campaign: campaign,
// 	schools: SchoolData,
// 	classrooms: ClassroomData,
// });

// // console.log(CampaignObj.wisrRecommend.school$.value);
