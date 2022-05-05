import { BehaviorSubject } from 'rxjs';
import _ from 'lodash';

export type MultiplyBy =
	| 'ByStudents'
	| 'ByTeachers'
	| 'ByClassrooms'
	| 'ByNoOne';

export type Category = 'A' | 'B' | 'C';
export interface ClassroomInterface {
	_id: string;
	ageByStandard: number;
	boys: number;
	girls: number;
	avgAnnualFee: number;
	school: string;
}
export interface EventInterface {
	_id: string;
	name: string;
	school: string;
	attributes: EventAttribute[];
}
export interface EventAttribute {
	_id: string;
	name: string;
	opportunitiesToSee: number;
	materialCost: number;
	noOfChanges: number;
	noOfChangesYearly: number;
	length: number;
	breadth: number;
	height: number;
	sizeOfPlacement: number;
	units: Units;
	quantity: number;
	impressions: number;
	brandOutlay: number;
	costPerSchool: number;
	brandOutlayByDuration: number;
}

export enum Units {
	Feet = 'feet',
	Inches = 'inches',
}
export interface InventoryInterface {
	_id: string;
	type: string;
	name: string;
	school: string;
	attributes: InventoryAttribute[];
	parentName: string;
}
export interface InventoryAttribute {
	_id: string;
	name: string;
	units: Units;
	length: number;
	breadth: number;
	height: number;
	inventory: string;
	sizeOfPlacement: number;
	opportunitiesToSee: number;
	materialCost: number;
	noOfChangesYearly: number;
	noOfChanges: number;
	quantity: number;
	costPerSchool: number;
	internalCostPerSchool: number;
	impressions: number;
	brandOutlay: number;
	brandOutlayByDuration: number;
}
export interface Ratio {
	boys: number;
	girls: number;
}

export interface FinalSchool {
	_id: string;
	schoolName: string;
	category: Category;
	noOfTeachers: number;
	classrooms: ClassroomInterface[];
	inventories: InventoryInterface[];
	events: EventInterface[];
	totalNoOfBoys: number;
	totalNoOfGirls: number;
	totalBrandOutlay: number;
	impressions: number;
	costPerSchool: number;
	address: string;
	pinCode: string;
	state: string;
	floors: number;
	city: string;
}

interface BudgetRatio {
	CatA: number;
	CatB: number;
	CatC: number;
}
export interface WisrOptionServiceInterface {
	campaignBudget: number;
	campaignDurationInDays: number;
	schoolData: any[];
	classroomData: any[];
	inventoryData: any[];
	eventData: any[];
	percentageIncreaseInReach: number;
	percentageDiscountInWISR: number;
	totalInternalCostPerSchool: number;
	budgetRatio: BudgetRatio;
	InventoriesNames: string[];
	EventsNames: string[];
	noOfDaysInYear: number;
}

export class WisrOptionService {
	public $BudgetRatio = new BehaviorSubject<BudgetRatio>({
		CatA: 0.3,
		CatB: 0.3,
		CatC: 0.4,
	});
	public $FilteredSchool = new BehaviorSubject<FinalSchool[]>([]);
	public $SchoolsForWisrOptions = new BehaviorSubject<FinalSchool[]>([]);
	public $OptimizedSchool = new BehaviorSubject<FinalSchool[]>([]);
	public $SchoolList = new BehaviorSubject<any[]>([]);
	public $ClassroomList = new BehaviorSubject<any[]>([]);
	public $InventoryList = new BehaviorSubject<any[]>([]);
	public $EventList = new BehaviorSubject<any[]>([]);
	public $PercentageIncreaseInReach = new BehaviorSubject<number>(0.3);
	public $PercentageDiscountInWISR = new BehaviorSubject<number>(0.1);
	public $InventoriesNames = new BehaviorSubject<string[]>([]);
	public $EventsNames = new BehaviorSubject<string[]>([]);
	public $SetBudget = new BehaviorSubject<number>(0);
	public $GetBudget = new BehaviorSubject<number>(0);
	public $CampaignDurationInDays = new BehaviorSubject<number>(0);
	public $SetReach = new BehaviorSubject<number>(0);
	public $GetReach = new BehaviorSubject<number>(0);
	public $SetImpressions = new BehaviorSubject<number>(0);
	public $GetImpression = new BehaviorSubject<number>(0);
	public $TotalInternalCostPerSchool = new BehaviorSubject<number>(0);
	public $CatASchool = new BehaviorSubject<FinalSchool[]>([]);
	public $CatBSchool = new BehaviorSubject<FinalSchool[]>([]);
	public $CatCSchool = new BehaviorSubject<FinalSchool[]>([]);
	public $NoOfDaysInYear = new BehaviorSubject<number>(365);
	public $MinBudget = new BehaviorSubject<number>(0);
	public $MaxBudget = new BehaviorSubject<number>(0);
	public $IncreasedBudget = new BehaviorSubject<number>(0);
	public $MinReach = new BehaviorSubject<number>(0);
	public $MaxReach = new BehaviorSubject<number>(0);
	public $IncreasedReach = new BehaviorSubject<number>(0);
	public $MinImpressions = new BehaviorSubject<number>(0);
	public $MaxImpressions = new BehaviorSubject<number>(0);
	public $IncreasedImpressions = new BehaviorSubject<number>(0);
	public $InventoryNOP_AffectedByNoOfTeacher = new BehaviorSubject<string[]>([
		'Staff Uniforms',
	]);
	public $InventoryNOP_AffectedByNoOfStudent = new BehaviorSubject<string[]>([
		'Uniforms',
		'Sports Uniforms',
		'School Bag',
		'Hallway',
	]);
	public $InventoryNOP_AffectedByNoOfClassroom = new BehaviorSubject<string[]>([
		'Classroom',
	]);

	constructor(private Data: WisrOptionServiceInterface) {
		this.$BudgetRatio.next(this.Data.budgetRatio);
		this.$SchoolList.next(this.Data.schoolData);
		this.$ClassroomList.next(this.Data.classroomData);
		this.$InventoryList.next(this.Data.inventoryData);
		this.$EventList.next(this.Data.eventData);
		this.$PercentageIncreaseInReach.next(this.Data.percentageIncreaseInReach);
		this.$PercentageDiscountInWISR.next(this.Data.percentageDiscountInWISR);
		this.$InventoriesNames.next(this.Data.InventoriesNames);
		this.$EventsNames.next(this.Data.EventsNames);
		this.$TotalInternalCostPerSchool.next(this.Data.totalInternalCostPerSchool);
		this.$CampaignDurationInDays.next(this.Data.campaignDurationInDays);
		this.$NoOfDaysInYear.next(this.Data.noOfDaysInYear);
		this.$BudgetRatio.subscribe({
			next: (data) => {
				const { CatA, CatB, CatC } = data;
				if (CatA + CatB + CatC > 1) {
					throw (
						'Budget Ratio is Not Correct { CatA = ' +
						CatA +
						', CatB = ' +
						CatB +
						', CatC = ' +
						CatC +
						' } The sum of category ratio must be less or equal to 1'
					);
				}
			},
		});
		this.$FilteredSchool.subscribe((schools) => {
			const budget = _.sumBy(schools, (school) => school.totalBrandOutlay);
			const reach = _.sumBy(
				schools,
				(school) => school.totalNoOfGirls + school.totalNoOfBoys
			);
			const impressions = _.sumBy(schools, (school) => school.impressions);
			this.$GetBudget.next(Math.round(budget));
			this.$GetReach.next(reach);
			this.$GetImpression.next(Math.round(impressions));
			const calculateReach =
				reach + reach * this.$PercentageIncreaseInReach.getValue();
			const IncreasedReach =
				calculateReach > this.$MaxReach.getValue()
					? this.$MaxReach.getValue()
					: calculateReach;
			this.setWisrOptionSchoolList(
				IncreasedReach,
				this.$OptimizedSchool.getValue()
			);
		});
		this.$SchoolsForWisrOptions.subscribe((schools) => {
			const grossRevenue = _.sumBy(
				schools,
				(school) => school.totalBrandOutlay
			);
			const NetRevenue = grossRevenue;
			const SchoolShare = NetRevenue * 0.7;
			const WisrShare = NetRevenue * 0.3;
			const finalBudget =
				SchoolShare +
				WisrShare -
				WisrShare * this.$PercentageDiscountInWISR.getValue();
			const reach = _.sumBy(
				schools,
				(school) => school.totalNoOfGirls + school.totalNoOfBoys
			);
			const impressions = _.sumBy(schools, (school) => school.impressions);
			this.$IncreasedBudget.next(
				finalBudget < grossRevenue
					? Math.round(grossRevenue)
					: Math.round(finalBudget)
			);
			this.$IncreasedReach.next(reach);
			this.$IncreasedImpressions.next(Math.round(impressions));
		});
		this.$OptimizedSchool.next(
			this.mapWithTotalImpressionsAndCostPerSchool(this.$SchoolList.getValue())
		);
		this.$OptimizedSchool.subscribe((schools) => {
			this.calculateMinMaxReachImpressionsBudget(schools);
			this.categorizationOfSchool(schools);
		});
		this.$SetBudget.subscribe((setBudget) => {
			if (
				setBudget >= this.$MinBudget.value &&
				setBudget <= this.$MaxBudget.value
			) {
				const { CatA, CatB, CatC } = this.$BudgetRatio.getValue();
				const BudgetData: BudgetData = {
					CatA: setBudget * CatA,
					CatB: setBudget * CatB,
					CatC: setBudget * CatC,
				};
				const OrganizedSchool = new OrganizeSchool({
					Schools: this.$OptimizedSchool.getValue(),
					InventoriesNames: this.$InventoriesNames.getValue(),
					EventsNames: this.$EventsNames.getValue(),
					BudgetData,
				});
				const SchoolCatA = OrganizedSchool.CatA;
				const SchoolCatB = OrganizedSchool.CatB;
				const SchoolCatC = OrganizedSchool.CatC;
				const AllFilteredSchools = _.uniqBy(
					_.concat(SchoolCatA, SchoolCatB, SchoolCatC),
					(school) => school._id
				);
				this.$FilteredSchool.next(AllFilteredSchools);
			}
		});
		this.$SetReach.subscribe((setReach) => {
			if (
				setReach >= this.$MinReach.value &&
				setReach <= this.$MaxReach.value
			) {
				let schoolsReach: number = this.$GetReach.getValue();
				if (this.$GetReach.getValue() < setReach) {
					let schoolsAddedByReach: FinalSchool[] = _.takeWhile(
						this.sortSchoolsByReach(
							_.differenceBy(
								this.$OptimizedSchool.getValue(),
								this.$FilteredSchool.getValue(),
								(school) => school._id
							),
							'desc'
						),
						(school) => {
							schoolsReach += school.totalNoOfGirls + school.totalNoOfBoys;
							return schoolsReach <= setReach;
						}
					);
					this.$FilteredSchool.next(
						_.unionBy(
							this.$FilteredSchool.getValue(),
							_.uniqBy(schoolsAddedByReach, (school) => school._id),
							(school) => school._id
						)
					);
				} else {
					let ElseSchoolsReach = 0;
					let ElseSchoolsAddedByReach: FinalSchool[] = _.takeWhile(
						this.sortSchoolsByInventoryAndEvents(
							this.$FilteredSchool.getValue(),
							'desc'
						),
						(school) => {
							ElseSchoolsReach += school.totalNoOfGirls + school.totalNoOfBoys;
							return ElseSchoolsReach <= setReach;
						}
					);
					this.$FilteredSchool.next(
						_.uniqBy(ElseSchoolsAddedByReach, (school) => school._id)
					);
				}
			}
		});
		this.$SetImpressions.subscribe((setImpressions) => {
			if (
				setImpressions >= this.$MinImpressions.value &&
				setImpressions <= this.$MaxImpressions.value
			) {
				let schoolsImpressions: number = this.$GetImpression.getValue();
				if (this.$GetImpression.getValue() < setImpressions) {
					let schoolsAddedByImpressions: FinalSchool[] = _.takeWhile(
						this.sortSchoolsByImpressions(
							_.differenceBy(
								this.$OptimizedSchool.getValue(),
								this.$FilteredSchool.getValue(),
								(school) => school._id
							),
							'desc'
						),
						(school) => {
							schoolsImpressions += school.impressions;
							return schoolsImpressions <= setImpressions;
						}
					);
					this.$FilteredSchool.next(
						_.unionBy(
							this.$FilteredSchool.getValue(),
							_.uniqBy(schoolsAddedByImpressions, (school) => school._id),
							(school) => school._id
						)
					);
				} else {
					let ElseSchoolsImpressions = 0;
					let ElseSchoolsAddedByImpressions: FinalSchool[] = _.takeWhile(
						this.sortSchoolsByInventoryAndEvents(
							this.$FilteredSchool.getValue(),
							'desc'
						),
						(school) => {
							ElseSchoolsImpressions += school.impressions;
							return ElseSchoolsImpressions <= setImpressions;
						}
					);
					this.$FilteredSchool.next(
						_.uniqBy(ElseSchoolsAddedByImpressions, (school) => school._id)
					);
				}
			}
		});
		this.$SetBudget.next(this.Data.campaignBudget);
	}

	private setWisrOptionSchoolList = (
		IncreasedReach: number,
		FilteredSchools: FinalSchool[]
	) => {
		if (
			IncreasedReach >= this.$MinReach.value &&
			IncreasedReach <= this.$MaxReach.value
		) {
			let schoolsReach: number = _.sumBy(
				this.$FilteredSchool.getValue(),
				(school) => school.totalNoOfGirls + school.totalNoOfBoys
			);
			let schoolsAddedByReach: FinalSchool[] = _.takeWhile(
				this.sortSchoolsByReachForWisrOption(
					_.filter(
						_.differenceBy(
							FilteredSchools,
							this.$FilteredSchool.getValue(),
							(school) => school._id
						),
						(school) =>
							school.totalNoOfGirls + school.totalNoOfBoys <=
							IncreasedReach - schoolsReach
					),
					'desc'
				),
				(school) => {
					schoolsReach += school.totalNoOfGirls + school.totalNoOfBoys;
					return schoolsReach <= IncreasedReach;
				}
			);
			this.$SchoolsForWisrOptions.next(
				_.unionBy(
					this.$FilteredSchool.getValue(),
					_.uniqBy(schoolsAddedByReach, (school) => school._id)
				)
			);
		}
	};
	private OptimizeSchoolData = (schoolData: any[]) => {
		return this.VerifyAndMapSchoolData(schoolData).filter((school) => {
			return (
				school.classrooms.length > 0 &&
				school.inventories.length > 0 &&
				_.filter(
					school.inventories,
					(inventory) => inventory.attributes.length > 0
				).length > 0
			);
		});
	};
	private VerifyAndMapSchoolData = (schoolData: any[]) => {
		return _.filter(
			schoolData,
			(schoolObj) =>
				schoolObj._id &&
				schoolObj.schoolName &&
				schoolObj.category &&
				schoolObj.noOfTeachers
		).map((school) => ({
			_id: school._id,
			schoolName: school.schoolName,
			category: school.category,
			noOfTeachers: school.noOfTeachers,
			pinCode: school.pincode,
			city: school.city,
			address: school.address,
			state: school.state,
			floors: school.floors,
			classrooms: this.FilterClassroomBySchoolId(school._id),
			inventories: this.FilterInventoryBySchoolId(school._id),
			events: this.FilterEventBySchoolId(school._id),
		}));
	};
	private FilterClassroomBySchoolId = (schoolId: string) => {
		return this.VerifyAndMapClassroomData(
			_.filter(
				this.$ClassroomList.getValue(),
				(classroom) => classroom.school === schoolId
			)
		) as ClassroomInterface[];
	};
	private VerifyAndMapClassroomData = (classroomData: any[]) => {
		return _.filter(
			classroomData,
			(classroomObj) =>
				classroomObj._id &&
				classroomObj.ageByStandard &&
				classroomObj.avgAnnualFee &&
				classroomObj.school &&
				(classroomObj.boys > 0 || classroomObj.girls > 0)
		).map((classroom) => ({
			_id: classroom._id,
			ageByStandard: classroom.ageByStandard,
			avgAnnualFee: classroom.avgAnnualFee,
			school: classroom.school,
			boys: classroom.boys ? classroom.boys : 0,
			girls: classroom.girls ? classroom.girls : 0,
			totalStudents:
				(classroom.boys ? classroom.boys : 0) +
				(classroom.girls ? classroom.girls : 0),
		}));
	};
	private FilterInventoryBySchoolId = (schoolId: string) => {
		return this.VerifyAndMapInventoryData(
			_.filter(
				this.$InventoryList.getValue(),
				(inventory) => inventory.school === schoolId
			)
		) as unknown as InventoryInterface[];
	};
	private VerifyAndMapInventoryData = (InventoryData: any[]) => {
		return _.filter(
			_.filter(
				InventoryData,
				(InventoryObj) =>
					InventoryObj._id &&
					InventoryObj.type &&
					InventoryObj.name &&
					InventoryObj.school &&
					InventoryObj.parentName &&
					InventoryObj.attributes &&
					InventoryObj.attributes.length > 0
			).map((Inventory) => ({
				_id: Inventory._id,
				type: Inventory.type,
				name: Inventory.name,
				school: Inventory.school,
				parentName: Inventory.parentName,
				attributes: this.VerifyAndMapInventoryAttributeData(
					Inventory.attributes
				),
			})),
			(Inventory) => Inventory.attributes.length > 0
		);
	};
	private VerifyAndMapInventoryAttributeData = (
		InventoryAttributeData: any[]
	) => {
		return _.filter(
			InventoryAttributeData,
			(AttributeObj) =>
				AttributeObj._id &&
				AttributeObj.name &&
				AttributeObj.units &&
				((AttributeObj.length && AttributeObj.breadth) ||
					(AttributeObj.length && AttributeObj.height) ||
					(AttributeObj.breadth && AttributeObj.height)) &&
				AttributeObj.inventory &&
				AttributeObj.opportunitiesToSee &&
				AttributeObj.materialCost &&
				AttributeObj.noOfChangesYearly &&
				AttributeObj.quantity &&
				AttributeObj.brandOutlay
		).map((Attribute) => ({
			_id: Attribute._id,
			name: Attribute.name,
			units: Attribute.units,
			length: Attribute.length <= 0 ? 1 : Attribute.length,
			breadth: Attribute.breadth <= 0 ? 1 : Attribute.breadth,
			height: Attribute.height <= 0 ? 1 : Attribute.height,
			inventory: Attribute.inventory,
			opportunitiesToSee: Attribute.opportunitiesToSee,
			materialCost: Attribute.materialCost,
			noOfChangesYearly: Attribute.noOfChangesYearly,
			noOfChanges: this.SetNoOfChanges(Attribute.noOfChangesYearly),
			quantity: Attribute.quantity,
			brandOutlay: Attribute.brandOutlay,
			brandOutlayByDuration: this.SetBrandOutlayByDuration(
				Attribute.brandOutlay
			),
		}));
	};
	private SetNoOfChanges = (noOfChangesYearly: number) => {
		return Math.ceil(
			this.$CampaignDurationInDays.getValue() / (365 / noOfChangesYearly)
		);
	};
	private SetBrandOutlayByDuration = (brandOutlay: number) => {
		return Math.round(
			brandOutlay /
				(this.$NoOfDaysInYear.getValue() /
					this.$CampaignDurationInDays.getValue())
		);
	};
	private FilterEventBySchoolId = (schoolId: string) => {
		return this.VerifyAndMapEventData(
			_.filter(this.$EventList.getValue(), (Event) => Event.school === schoolId)
		) as unknown as EventInterface[];
	};
	private VerifyAndMapEventData = (EventData: any[]) => {
		return _.filter(
			_.filter(
				EventData,
				(EventObj) =>
					EventObj._id &&
					EventObj.name &&
					EventObj.school &&
					EventObj.attributes &&
					EventObj.attributes.length > 0
			).map((Event) => ({
				_id: Event._id,
				name: Event.name,
				school: Event.school,
				attributes: this.VerifyAndMapEventAttributeData(Event.attributes),
			})),
			(Event) => Event.attributes.length > 0
		);
	};
	private VerifyAndMapEventAttributeData = (EventAttributeData: any[]) => {
		return _.filter(
			EventAttributeData,
			(AttributeObj) =>
				AttributeObj._id &&
				AttributeObj.name &&
				AttributeObj.units &&
				((AttributeObj.length && AttributeObj.breadth) ||
					(AttributeObj.length && AttributeObj.height) ||
					(AttributeObj.breadth && AttributeObj.height)) &&
				AttributeObj.opportunitiesToSee &&
				AttributeObj.materialCost &&
				AttributeObj.quantity &&
				AttributeObj.brandOutlay
		).map((Attribute) => ({
			_id: Attribute._id,
			name: Attribute.name,
			units: Attribute.units,
			length: Attribute.length <= 0 ? 1 : Attribute.length,
			breadth: Attribute.breadth <= 0 ? 1 : Attribute.breadth,
			height: Attribute.height <= 0 ? 1 : Attribute.height,
			opportunitiesToSee: Attribute.opportunitiesToSee,
			materialCost: Attribute.materialCost,
			noOfChangesYearly: Attribute.noOfChangesYearly,
			quantity: Attribute.quantity,
			noOfChanges: this.SetNoOfChanges(Attribute.noOfChangesYearly),
			brandOutlay: Attribute.brandOutlay,
			brandOutlayByDuration: Attribute.brandOutlay,
		}));
	};
	private mapSchoolWithReachDataAndBrandOutlay = (schoolData: any[]) => {
		return this.OptimizeSchoolData(schoolData).map((school) => ({
			...school,
			totalNoOfBoys: this.calculateTotalBoysInASchool(school.classrooms),
			totalNoOfGirls: this.calculateTotalGirlsInASchool(school.classrooms),
			totalBrandOutlay: this.calculateTotalBrandOutlayInASchool(
				school.inventories,
				school.events
			),
		})) as unknown as FinalSchool[];
	};
	private calculateTotalBoysInASchool = (classrooms: ClassroomInterface[]) => {
		return _.sumBy(classrooms, (classroom) => classroom.boys);
	};
	private calculateTotalGirlsInASchool = (classrooms: ClassroomInterface[]) => {
		return _.sumBy(classrooms, (classroom) => classroom.girls);
	};
	private calculateTotalBrandOutlayInASchool = (
		inventories: InventoryInterface[],
		events: EventInterface[]
	) => {
		return (
			_.sumBy(inventories, (inventory) =>
				_.sumBy(
					inventory.attributes,
					(attribute) => attribute.brandOutlayByDuration
				)
			) +
			_.sumBy(events, (event) =>
				_.sumBy(
					event.attributes,
					(attribute) => attribute.brandOutlayByDuration
				)
			)
		);
	};
	private mapWithCostOfProduction = (schoolsData: any[]) => {
		return this.mapSchoolWithReachDataAndBrandOutlay(schoolsData).map(
			(school) => ({
				...school,
				inventories: this.calculateInventoriesCostPerSchoolAndImpression(
					school.inventories,
					school.totalNoOfBoys,
					school.totalNoOfGirls,
					school.noOfTeachers,
					school.classrooms.length
				),
				events: this.calculateEventsCostPerSchoolAndImpression(
					school.events,
					school.totalNoOfBoys,
					school.totalNoOfGirls,
					school.noOfTeachers,
					school.classrooms.length
				),
			})
		);
	};
	private calculateInventoriesCostPerSchoolAndImpression = (
		inventories: InventoryInterface[],
		noOfBoys: number,
		noOfGirls: number,
		noOfTeachers: number,
		noOfClassroom: number
	) => {
		const totalAttributes = _.sumBy(
			inventories,
			(inventory) => inventory.attributes.length
		);
		const internalCostPerAttribute =
			this.$TotalInternalCostPerSchool.getValue() / totalAttributes;
		return inventories.map((inventory) => {
			const multiplyBy: MultiplyBy = this.inventoryNOPAffectedBy(
				inventory.parentName
			);
			return {
				...inventory,
				attributes: inventory.attributes.map((attribute) => ({
					...attribute,
					internalCostPerSchool: internalCostPerAttribute,
					costPerSchool:
						this.calculateInventoriesAttributeCostOfProduction(
							multiplyBy,
							attribute,
							noOfBoys,
							noOfGirls,
							noOfTeachers,
							noOfClassroom
						) + internalCostPerAttribute,
					impressions: Math.round(
						multiplyBy === 'ByTeachers'
							? noOfTeachers * 0.95 + this.$CampaignDurationInDays.getValue()
							: (noOfBoys + noOfGirls) *
									0.9 *
									this.$CampaignDurationInDays.getValue() *
									attribute.opportunitiesToSee
					),
				})),
			};
		});
	};
	private calculateEventsCostPerSchoolAndImpression = (
		events: EventInterface[],
		noOfBoys: number,
		noOfGirls: number,
		noOfTeachers: number,
		noOfClassroom: number
	) => {
		return events.map((event) => {
			return {
				...event,
				attributes: event.attributes.map((attribute) => ({
					...attribute,
					costPerSchool: this.calculateEventsAttributeCostOfProduction(
						attribute.noOfChanges,
						attribute
					),
					impressions: Math.round(
						(noOfBoys + noOfGirls) *
							0.9 *
							attribute.opportunitiesToSee *
							attribute.quantity
					),
				})),
			};
		});
	};
	private inventoryNOPAffectedBy = (inventoryParentName: string) => {
		return _.includes(
			this.$InventoryNOP_AffectedByNoOfStudent.getValue(),
			inventoryParentName
		)
			? 'ByStudents'
			: _.includes(
					this.$InventoryNOP_AffectedByNoOfTeacher.getValue(),
					inventoryParentName
			  )
			? 'ByTeachers'
			: _.includes(
					this.$InventoryNOP_AffectedByNoOfClassroom.getValue(),
					inventoryParentName
			  )
			? 'ByClassrooms'
			: 'ByNoOne';
	};
	private calculateInventoriesAttributeCostOfProduction = (
		multiplyBy: MultiplyBy,
		attribute: InventoryAttribute,
		noOfBoys: number,
		noOfGirls: number,
		noOfTeachers: number,
		noOfClassroom: number
	) => {
		const SOP =
			attribute.units === 'feet'
				? (attribute.length > 0 ? attribute.length : attribute.height) *
				  (attribute.breadth > 0 ? attribute.breadth : attribute.height)
				: 1;
		const totalStudents = noOfBoys + noOfGirls;
		const NOP =
			multiplyBy === 'ByStudents'
				? totalStudents
				: multiplyBy === 'ByTeachers'
				? noOfTeachers
				: multiplyBy === 'ByClassrooms'
				? attribute.quantity * noOfClassroom
				: attribute.quantity;
		return SOP * NOP * attribute.noOfChanges * attribute.materialCost;
	};
	private calculateEventsAttributeCostOfProduction = (
		noOfPlacement: number,
		attribute: EventAttribute
	) => {
		const SOP =
			attribute.units === 'feet'
				? (attribute.length > 0 ? attribute.length : attribute.height) *
				  (attribute.breadth > 0 ? attribute.breadth : attribute.height)
				: 1;
		return SOP * attribute.quantity * attribute.materialCost;
	};
	private calculateTotalImpressionsInASchool = (
		inventories: InventoryInterface[],
		events: EventInterface[]
	) => {
		return (
			_.sumBy(inventories, (inventory) =>
				_.sumBy(inventory.attributes, (attribute) => attribute.impressions)
			) +
			_.sumBy(events, (event) =>
				_.sumBy(event.attributes, (attribute) => attribute.impressions)
			)
		);
	};
	private calculateTotalCostPerSchool = (
		inventories: InventoryInterface[],
		events: EventInterface[]
	) => {
		return (
			_.sumBy(inventories, (inventory) =>
				_.sumBy(inventory.attributes, (attribute) => attribute.costPerSchool)
			) +
			_.sumBy(events, (event) =>
				_.sumBy(event.attributes, (attribute) => attribute.costPerSchool)
			)
		);
	};
	private mapWithTotalImpressionsAndCostPerSchool = (schoolsData: any[]) => {
		return this.mapWithCostOfProduction(schoolsData).map((school) => ({
			...school,
			impressions: this.calculateTotalImpressionsInASchool(
				school.inventories,
				school.events
			),
			costPerSchool: this.calculateTotalCostPerSchool(
				school.inventories,
				school.events
			),
		}));
	};
	private calculateMinMaxReachImpressionsBudget = (
		schoolData: FinalSchool[]
	) => {
		const minBudgetSchoolData = _.minBy(
			schoolData,
			(school) => school.totalBrandOutlay
		);
		const MinBudget = minBudgetSchoolData
			? minBudgetSchoolData.totalBrandOutlay
			: 0;
		const MaxBudget = _.sumBy(schoolData, (school) => school.totalBrandOutlay);
		const minReachSchoolData = _.minBy(
			schoolData,
			(school) => school.totalNoOfBoys + school.totalNoOfGirls
		);
		const minReach = minReachSchoolData
			? minReachSchoolData.totalNoOfBoys + minReachSchoolData.totalNoOfGirls
			: 0;
		const maxReach = _.sumBy(
			schoolData,
			(school) => school.totalNoOfBoys + school.totalNoOfGirls
		);
		const minImpressionsSchoolData = _.minBy(
			schoolData,
			(school) => school.impressions
		);
		const minImpressions = minImpressionsSchoolData
			? minImpressionsSchoolData.impressions
			: 0;
		const maxImpressions = _.sumBy(schoolData, (school) => school.impressions);
		this.$MinBudget.next(Math.round(MinBudget));
		this.$MaxBudget.next(Math.round(MaxBudget));
		this.$MaxReach.next(maxReach);
		this.$MinReach.next(minReach);
		this.$MaxImpressions.next(Math.round(maxImpressions));
		this.$MinImpressions.next(Math.round(minImpressions));
	};
	private sortSchoolsByBudget = (
		schoolData: FinalSchool[],
		orderBy: 'asc' | 'desc'
	) => {
		return _.orderBy(
			schoolData,
			[
				(school) => school.events.length > 0,
				(school) => school.category,
				(school) => school.totalBrandOutlay,
			],
			['desc', 'asc', orderBy]
		);
	};
	private sortSchoolsByReach = (
		schoolData: FinalSchool[],
		orderBy: 'asc' | 'desc'
	) => {
		return _.orderBy(
			schoolData,
			[
				(school) => school.events.length > 0,
				(school) => school.category,
				(school) => school.totalNoOfBoys + school.totalNoOfGirls,
			],
			['desc', 'desc', orderBy]
		);
	};

	private sortSchoolsByInventoryAndEvents = (
		schoolData: FinalSchool[],
		orderBy: 'asc' | 'desc'
	) => {
		return _.orderBy(
			schoolData,
			[(school) => school.inventories.length, (school) => school.events.length],
			[orderBy, orderBy]
		);
	};
	private sortSchoolsByReachForWisrOption = (
		schoolData: FinalSchool[],
		orderBy: 'asc' | 'desc'
	) => {
		return _.orderBy(
			schoolData,
			[
				(school) => school.category,
				(school) => school.totalNoOfBoys + school.totalNoOfGirls,
			],
			['desc', orderBy]
		);
	};

	private sortSchoolsByImpressions = (
		schoolData: FinalSchool[],
		orderBy: 'asc' | 'desc'
	) => {
		return _.orderBy(
			schoolData,
			[(school) => school.category, (school) => school.impressions],
			['desc', orderBy]
		);
	};
	private categorizationOfSchool = (schools: FinalSchool[]) => {
		this.$CatASchool.next(
			_.filter(schools, (school) => school.category === 'A')
		);
		this.$CatBSchool.next(
			_.filter(schools, (school) => school.category === 'B')
		);
		this.$CatCSchool.next(
			_.filter(schools, (school) => school.category === 'C')
		);
	};
}
interface OrganiseSchool {
	Schools: FinalSchool[];
	InventoriesNames: string[];
	EventsNames: string[];
	BudgetData: BudgetData;
}
interface BudgetData {
	CatA: number;
	CatB: number;
	CatC: number;
}
class OrganizeSchool {
	public CatA: FinalSchool[] = [];
	public CatB: FinalSchool[] = [];
	public CatC: FinalSchool[] = [];
	public ExtraBudget: number = 0;

	constructor(private data: OrganiseSchool) {
		const { Schools, BudgetData } = data;
		const { CatA, CatB, CatC } = BudgetData;
		this.filterSchoolByCategory(Schools);
		const schoolA = this.shortSchoolData(this.CatA);
		const schoolB = this.shortSchoolData(this.CatB);
		const schoolC = this.shortSchoolData(this.CatC);
		const budgetA = _.sumBy(schoolA, (school) => school.totalBrandOutlay);
		const budgetB = _.sumBy(schoolB, (school) => school.totalBrandOutlay);
		const budgetC = _.sumBy(schoolC, (school) => school.totalBrandOutlay);
		let finalBudgetA: number;
		let finalBudgetB: number;
		let finalBudgetC: number;
		if (CatA >= budgetA) {
			this.CatA = this.filterSchoolData(schoolA, budgetA);
			finalBudgetA = _.sumBy(this.CatA, (school) => school.totalBrandOutlay);
			this.ExtraBudget = CatA - finalBudgetA;
		} else {
			this.CatA = this.filterSchoolData(schoolA, CatA);
			finalBudgetA = _.sumBy(this.CatA, (school) => school.totalBrandOutlay);
		}

		if (CatB + this.ExtraBudget >= budgetB) {
			this.CatB = this.filterSchoolData(schoolB, budgetB);
			finalBudgetB = _.sumBy(this.CatB, (school) => school.totalBrandOutlay);
			this.ExtraBudget = CatB + this.ExtraBudget - finalBudgetB;
		} else {
			this.CatB = this.filterSchoolData(schoolB, CatB + this.ExtraBudget);
			finalBudgetB = _.sumBy(this.CatB, (school) => school.totalBrandOutlay);
			this.ExtraBudget = CatB + this.ExtraBudget - finalBudgetB;
		}

		if (CatC + this.ExtraBudget >= budgetC) {
			this.CatC = this.filterSchoolData(schoolC, budgetC);
			finalBudgetC = _.sumBy(this.CatC, (school) => school.totalBrandOutlay);
			this.ExtraBudget = CatC + this.ExtraBudget - finalBudgetC;
		} else {
			this.CatC = this.filterSchoolData(schoolC, CatC + this.ExtraBudget);
			finalBudgetC = _.sumBy(this.CatC, (school) => school.totalBrandOutlay);
			this.ExtraBudget = CatC + this.ExtraBudget - finalBudgetC;
		}
	}

	private filterSchoolByCategory = (schools: FinalSchool[]) => {
		_.forEach(schools, (school) => {
			school.category === 'A'
				? this.CatA.push(school)
				: school.category === 'B'
				? this.CatB.push(school)
				: school.category === 'C' && this.CatC.push(school);
		});
	};

	private shortSchoolData = (schools: FinalSchool[]) => {
		let EI: FinalSchool[];
		let ei: FinalSchool[];
		let I: FinalSchool[];
		let i: FinalSchool[];
		let E: FinalSchool[];
		let e: FinalSchool[];

		EI = _.filter(schools, (school) => {
			const eventsList = this.schoolEventsList(school);
			const inventoriesList = this.schoolInventoriesList(school);
			const eventsCheck = _.every(this.data.EventsNames, (event) =>
				_.includes(eventsList, event)
			);
			const inventoriesCheck = _.every(
				this.data.InventoriesNames,
				(inventory) => _.includes(inventoriesList, inventory)
			);
			return eventsCheck && inventoriesCheck;
		});
		ei = _.filter(schools, (school) => {
			const eventsList = this.schoolEventsList(school);
			const inventoriesList = this.schoolInventoriesList(school);
			const eventsCheck = _.every(this.data.EventsNames, (event) =>
				_.includes(eventsList, event)
			);
			const inventoriesCheck = _.every(
				this.data.InventoriesNames,
				(inventory) => _.includes(inventoriesList, inventory)
			);
			return (
				(eventsList.length > 0 &&
					!eventsCheck &&
					inventoriesList.length > 0 &&
					!inventoriesCheck) ||
				(eventsList.length > 0 &&
					eventsCheck &&
					inventoriesList.length > 0 &&
					!inventoriesCheck) ||
				(eventsList.length > 0 &&
					!eventsCheck &&
					inventoriesList.length > 0 &&
					inventoriesCheck)
			);
		});
		I = _.filter(schools, (school) => {
			const eventsList = this.schoolEventsList(school);
			const inventoriesList = this.schoolInventoriesList(school);
			const eventsCheck = _.every(this.data.EventsNames, (event) =>
				_.includes(eventsList, event)
			);
			const inventoriesCheck = _.every(
				this.data.InventoriesNames,
				(inventory) => _.includes(inventoriesList, inventory)
			);
			return eventsList.length === 0 && inventoriesCheck;
		});
		i = _.filter(schools, (school) => {
			const eventsList = this.schoolEventsList(school);
			const inventoriesList = this.schoolInventoriesList(school);
			const eventsCheck = _.every(this.data.EventsNames, (event) =>
				_.includes(eventsList, event)
			);
			const inventoriesCheck = _.every(
				this.data.InventoriesNames,
				(inventory) => _.includes(inventoriesList, inventory)
			);
			return (
				eventsList.length === 0 &&
				inventoriesList.length > 0 &&
				!inventoriesCheck
			);
		});
		E = _.filter(schools, (school) => {
			const eventsList = this.schoolEventsList(school);
			const inventoriesList = this.schoolInventoriesList(school);
			const eventsCheck = _.every(this.data.EventsNames, (event) =>
				_.includes(eventsList, event)
			);
			const inventoriesCheck = _.every(
				this.data.InventoriesNames,
				(inventory) => _.includes(inventoriesList, inventory)
			);
			return eventsCheck && inventoriesList.length === 0;
		});
		e = _.filter(schools, (school) => {
			const eventsList = this.schoolEventsList(school);
			const inventoriesList = this.schoolInventoriesList(school);
			const eventsCheck = _.every(this.data.EventsNames, (event) =>
				_.includes(eventsList, event)
			);
			const inventoriesCheck = _.every(
				this.data.InventoriesNames,
				(inventory) => _.includes(inventoriesList, inventory)
			);
			return (
				!eventsCheck && eventsList.length > 0 && inventoriesList.length === 0
			);
		});

		return _.concat(EI, ei, I, i, E, e);
	};

	private filterSchoolData = (schools: FinalSchool[], budget: number) => {
		let Budget = 0;
		return _.takeWhile(
			_.orderBy(
				schools,
				[
					(school) => school.inventories.length,
					(school) => school.events.length,
					(school) => school.totalBrandOutlay,
				],
				['desc', 'desc', 'asc']
			),
			(schools) => {
				Budget += schools.totalBrandOutlay;
				return Budget <= budget;
			}
		);
	};

	private schoolEventsList = (school: FinalSchool) => {
		return _.map(school.events, (event) => event.name);
	};
	private schoolInventoriesList = (school: FinalSchool) => {
		return _.map(school.inventories, (inventory) => inventory.parentName);
	};
}
