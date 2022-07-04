import {BehaviorSubject} from 'rxjs';
import _ from 'lodash';

export type TargetAudience = 'boys' | 'co-ed' | 'girls';
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
    reach: number;
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
    TargetAudience: TargetAudience;
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
    public $TargetAudience = new BehaviorSubject<TargetAudience>('co-ed');
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
        this.$TargetAudience.next(this.Data.TargetAudience);
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
                const {CatA, CatB, CatC} = data;
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
            const budget = Math.round(_.sumBy(schools, (school) => school.totalBrandOutlay));
            const reach = _.sumBy(schools, (school) => school.reach);
            const impressions = Math.round(_.sumBy(schools, (school) => school.impressions));
            this.$GetBudget.next(budget);
            this.$GetReach.next(reach);
            this.$GetImpression.next(impressions);
            const calculateReach =
                (reach + reach * this.$PercentageIncreaseInReach.getValue()) || this.$MinReach.getValue();
            const IncreasedReach =
                Math.round(calculateReach > this.$MaxReach.getValue()
                    ? this.$MaxReach.getValue()
                    : calculateReach);
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
            const reach = _.sumBy(schools, (school) => school.reach);
            const impressions = Math.round(_.sumBy(schools, (school) => school.impressions))
            this.$IncreasedBudget.next(
                Math.round(finalBudget < grossRevenue ? grossRevenue : finalBudget)
            );
            this.$IncreasedReach.next(reach);
            this.$IncreasedImpressions.next(impressions);
        });
        this.$OptimizedSchool.next(
            this.mapWithTotalImpressionsAndCostPerSchool(this.$SchoolList.getValue())
        );
        this.$OptimizedSchool.subscribe((schools) => {
            this.calculateMinMaxReachImpressionsBudget(schools);
            this.categorizationOfSchool(schools);
        });
        this.$SetBudget.subscribe((setBudget) => {
            if (setBudget > 0) {
                const {CatA, CatB, CatC} = this.$BudgetRatio.getValue();
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
                if (schoolsReach < setReach) {
                    let schoolsAddedByReach: FinalSchool[] = _.takeWhile(
                        this.sortSchoolsByInventoryAndEvents(
                            _.differenceBy(
                                this.$OptimizedSchool.getValue(),
                                this.$FilteredSchool.getValue(),
                                (school) => school._id
                            ),
                            'desc'
                        ),
                        (school) => {
                            schoolsReach += school.reach;
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
                            ElseSchoolsReach += school.reach;
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
                if (schoolsImpressions < setImpressions) {
                    let schoolsAddedByImpressions: FinalSchool[] = _.takeWhile(
                        this.sortSchoolsByInventoryAndEvents(
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
        OptimizedSchools: FinalSchool[]
    ) => {
        if (
            IncreasedReach >= this.$MinReach.value &&
            IncreasedReach <= this.$MaxReach.value
        ) {
            let schoolsReach: number = _.sumBy(
                this.$FilteredSchool.getValue(),
                (school) => school.reach
            );
            const restSchools = _.differenceBy(OptimizedSchools, this.$FilteredSchool.getValue(), (school) => school._id);
            let schoolsAddedByReach: FinalSchool[] = _.takeWhile(
                this.sortSchoolsByReachForWisrOption(
                    _.filter(
                        restSchools,
                        (school) => school.reach <= IncreasedReach - schoolsReach
                    ),
                    'desc'
                ),
                (school) => {
                    schoolsReach += school.reach;
                    return schoolsReach <= IncreasedReach;
                }
            );

            if (schoolsAddedByReach.length === 0) {
                const minBrandOutlaySchool = _.minBy(restSchools, (school) => school.totalBrandOutlay)
                if (minBrandOutlaySchool) {
                    schoolsAddedByReach = [minBrandOutlaySchool];
                }
            }

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
        return Math.round(
            this.$CampaignDurationInDays.getValue() /
            (this.$NoOfDaysInYear.getValue() / noOfChangesYearly)
        );
    };
    private SetBrandOutlayByDuration = (brandOutlay: number) => {
        return (
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
        return this.OptimizeSchoolData(schoolData).map((school) => {
            const totalNoOfBoys = this.calculateTotalBoysInASchool(school.classrooms);
            const totalNoOfGirls = this.calculateTotalGirlsInASchool(
                school.classrooms
            );
            const reach = this.getReachWithTargetAudience(
                totalNoOfBoys,
                totalNoOfGirls
            );
            const totalBrandOutlay = Math.round(this.calculateTotalBrandOutlayInASchool(
                school.inventories,
                school.events
            ));
            return {
                ...school,
                totalNoOfBoys,
                totalNoOfGirls,
                reach,
                totalBrandOutlay,
            };
        }) as unknown as FinalSchool[];
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
                    school.reach,
                    school.noOfTeachers,
                    school.classrooms.length
                ),
                events: this.calculateEventsCostPerSchoolAndImpression(
                    school.events,
                    school.reach,
                    school.noOfTeachers,
                    school.classrooms.length
                ),
            })
        );
    };
    private calculateInventoriesCostPerSchoolAndImpression = (
        inventories: InventoryInterface[],
        reach: number,
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
                            reach,
                            noOfTeachers,
                            noOfClassroom
                        ) + internalCostPerAttribute,
                    impressions: multiplyBy === 'ByTeachers'
                        ? noOfTeachers * 0.95 + this.$CampaignDurationInDays.getValue()
                        : reach *
                        0.9 *
                        this.$CampaignDurationInDays.getValue() *
                        attribute.opportunitiesToSee

                })),
            };
        });
    };
    private calculateEventsCostPerSchoolAndImpression = (
        events: EventInterface[],
        reach: number,
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
                    impressions: reach * 0.9 * attribute.opportunitiesToSee * attribute.quantity,
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
        reach: number,
        noOfTeachers: number,
        noOfClassroom: number
    ) => {
        const SOP =
            attribute.units === 'feet'
                ? (attribute.length > 0 ? attribute.length : attribute.height) *
                (attribute.breadth > 0 ? attribute.breadth : attribute.height)
                : 1;
        const NOP =
            multiplyBy === 'ByStudents'
                ? reach
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
        const minReachSchoolData = _.minBy(schoolData, (school) => school.reach);
        const minReach = minReachSchoolData ? minReachSchoolData.reach : 0;
        const maxReach = _.sumBy(schoolData, (school) => school.reach);
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

    private getReachWithTargetAudience = (
        noOfBoys: number,
        noOfGirls: number
    ) => {
        return this.$TargetAudience.getValue() == 'co-ed'
            ? noOfBoys + noOfGirls
            : this.$TargetAudience.getValue() == 'boys'
                ? noOfBoys
                : noOfGirls;
    };

    private sortSchoolsByBudget = (
        schoolData: FinalSchool[],
        orderBy: 'asc' | 'desc'
    ) => {
        return _.orderBy(
            schoolData,
            [
                (school) => school.events.length,
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
            [(school) => school.category, (school) => school.reach],
            ['desc', orderBy]
        );
    };
    private sortSchoolsByInventoryAndEvents = (
        schoolData: FinalSchool[],
        orderBy: 'asc' | 'desc'
    ) => {
        return _.orderBy(
            schoolData,
            [
                (school) => _.uniq(_.map(school.events, (event) => event.name)).length,
                (school) =>
                    _.uniq(_.map(school.inventories, (inventory) => inventory.parentName))
                        .length,
            ],
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
                (school) => school.reach,
                (school) => school.totalBrandOutlay,
            ],
            ['desc', orderBy, 'asc']
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
        const {Schools, BudgetData} = data;
        const {CatA, CatB, CatC} = BudgetData;
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
            this.ExtraBudget = CatA - finalBudgetA
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
        if ((this.CatA.length + this.CatB.length + this.CatC.length) === 0 || this.ExtraBudget > 0) {
            if ((this.CatA.length + this.CatB.length + this.CatC.length) === 0) {
                const minBudgetSchool = _.minBy(Schools, (school) => school.totalBrandOutlay)
                if (minBudgetSchool) {
                    if (minBudgetSchool.category === 'A') {
                        this.CatA.push(minBudgetSchool)
                    } else if (minBudgetSchool.category === 'B') {
                        this.CatB.push(minBudgetSchool)
                    } else if (minBudgetSchool.category === 'C') {
                        this.CatC.push(minBudgetSchool)
                    }
                }
            } else if (this.ExtraBudget > 0) {
                const clearfixSchoolByBudget = this.clearfixExtraBudgetWIthSchool(Schools, this.ExtraBudget)
                _.forEach(clearfixSchoolByBudget, (school) => {
                    if (school.category === 'A') {
                        this.CatA.push(school)
                    } else if (school.category === 'B') {
                        this.CatB.push(school)
                    } else if (school.category === 'C') {
                        this.CatC.push(school)
                    }
                })
            }
        }

    }

    private clearfixExtraBudgetWIthSchool = (schools: FinalSchool[], extraBudget: number) => {
        const schoolsByLowBudget = _.orderBy(schools, (school) => school.totalBrandOutlay, 'asc')
        let budget = 0
        return _.takeWhile(schoolsByLowBudget, (school) => {
            budget += school.totalBrandOutlay
            return budget <= extraBudget
        })
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
        return _.orderBy(
            schools,
            [
                (school) => _.uniq(_.map(school.events, (event) => event.name)).length,
                (school) =>
                    _.uniq(_.map(school.inventories, (inventory) => inventory.parentName))
                        .length,
            ],
            ['desc', 'desc']
        );
    };

    private filterSchoolData = (schools: FinalSchool[], budget: number) => {
        let Budget = 0;
        const schoolsByPriority = _.takeWhile(schools, (school) => {
            Budget += school.totalBrandOutlay;
            return Budget <= budget;
        });
        Budget = _.sumBy(schoolsByPriority, (school) => school.totalBrandOutlay);

        const schoolsByReach = _.takeWhile(
            _.orderBy(
                _.differenceBy(schools, schoolsByPriority, (school) => school._id),
                [(school) => school.reach],
                ['desc']
            ),
            (school) => {
                Budget += school.totalBrandOutlay;
                return Budget <= budget;
            }
        );

        Budget = _.sum([
            _.sumBy(schoolsByReach, (school) => school.totalBrandOutlay),
            _.sumBy(schoolsByPriority, (school) => school.totalBrandOutlay),
        ]);

        const schoolsByBudget = _.takeWhile(
            _.orderBy(
                _.differenceBy(
                    schools,
                    [...schoolsByPriority, ...schoolsByReach],
                    (school) => school._id
                ),
                [(school) => school.totalBrandOutlay],
                ['asc']
            ),
            (school) => {
                Budget += school.totalBrandOutlay;
                return Budget <= budget;
            }
        );
        return _.concat(schoolsByPriority, schoolsByReach, schoolsByBudget);
    };

    private schoolEventsList = (school: FinalSchool) => {
        return _.map(school.events, (event) => event.name);
    };

    private schoolInventoriesList = (school: FinalSchool) => {
        return _.map(school.inventories, (inventory) => inventory.parentName);
    };
}