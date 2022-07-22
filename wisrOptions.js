import { BehaviorSubject } from 'rxjs';
import _ from 'lodash';
export var Units;
(function (Units) {
    Units["Feet"] = "feet";
    Units["Inches"] = "inches";
})(Units || (Units = {}));
export class WisrOptionService {
    Data;
    $BudgetRatio = new BehaviorSubject({
        CatA: 0.3,
        CatB: 0.3,
        CatC: 0.4,
    });
    $FilteredSchool = new BehaviorSubject([]);
    $SchoolsForWisrOptions = new BehaviorSubject([]);
    $OptimizedSchool = new BehaviorSubject([]);
    $SchoolList = new BehaviorSubject([]);
    $ClassroomList = new BehaviorSubject([]);
    $InventoryList = new BehaviorSubject([]);
    $EventList = new BehaviorSubject([]);
    $TargetAudience = new BehaviorSubject('co-ed');
    $PercentageIncreaseInReach = new BehaviorSubject(0.3);
    $PercentageDiscountInWISR = new BehaviorSubject(0.1);
    $InventoriesNames = new BehaviorSubject([]);
    $EventsNames = new BehaviorSubject([]);
    $SetBudget = new BehaviorSubject(0);
    $GetBudget = new BehaviorSubject(0);
    $CampaignDurationInDays = new BehaviorSubject(0);
    $SetReach = new BehaviorSubject(0);
    $GetReach = new BehaviorSubject(0);
    $SetImpressions = new BehaviorSubject(0);
    $GetImpression = new BehaviorSubject(0);
    $TotalInternalCostPerSchool = new BehaviorSubject(0);
    $CatASchool = new BehaviorSubject([]);
    $CatBSchool = new BehaviorSubject([]);
    $CatCSchool = new BehaviorSubject([]);
    $NoOfDaysInYear = new BehaviorSubject(365);
    $MinBudget = new BehaviorSubject(0);
    $MaxBudget = new BehaviorSubject(0);
    $IncreasedBudget = new BehaviorSubject(0);
    $MinReach = new BehaviorSubject(0);
    $MaxReach = new BehaviorSubject(0);
    $IncreasedReach = new BehaviorSubject(0);
    $MinImpressions = new BehaviorSubject(0);
    $MaxImpressions = new BehaviorSubject(0);
    $IncreasedImpressions = new BehaviorSubject(0);
    $InventoryNOP_AffectedByNoOfTeacher = new BehaviorSubject([
        'Staff Uniforms',
    ]);
    $InventoryNOP_AffectedByNoOfStudent = new BehaviorSubject([
        'Uniforms',
        'Sports Uniforms',
        'School Bag',
        'Hallway',
    ]);
    $InventoryNOP_AffectedByNoOfClassroom = new BehaviorSubject([
        'Classroom',
    ]);
    constructor(Data) {
        this.Data = Data;
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
                const { CatA, CatB, CatC } = data;
                if (CatA + CatB + CatC > 1) {
                    throw ('Budget Ratio is Not Correct { CatA = ' +
                        CatA +
                        ', CatB = ' +
                        CatB +
                        ', CatC = ' +
                        CatC +
                        ' } The sum of category ratio must be less or equal to 1');
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
            const calculateReach = (reach + reach * this.$PercentageIncreaseInReach.getValue()) || this.$MinReach.getValue();
            const IncreasedReach = Math.round(calculateReach > this.$MaxReach.getValue()
                ? this.$MaxReach.getValue()
                : calculateReach);
            this.setWisrOptionSchoolList(IncreasedReach, this.$OptimizedSchool.getValue());
        });
        this.$SchoolsForWisrOptions.subscribe((schools) => {
            const grossRevenue = _.sumBy(schools, (school) => school.totalBrandOutlay);
            const NetRevenue = grossRevenue;
            const SchoolShare = NetRevenue * 0.7;
            const WisrShare = NetRevenue * 0.3;
            const finalBudget = SchoolShare +
                WisrShare -
                WisrShare * this.$PercentageDiscountInWISR.getValue();
            const reach = _.sumBy(schools, (school) => school.reach);
            const impressions = Math.round(_.sumBy(schools, (school) => school.impressions));
            this.$IncreasedBudget.next(Math.round(finalBudget < grossRevenue ? grossRevenue : finalBudget));
            this.$IncreasedReach.next(reach);
            this.$IncreasedImpressions.next(impressions);
        });
        this.$OptimizedSchool.next(this.mapWithTotalImpressions(this.$SchoolList.getValue()));
        this.$OptimizedSchool.subscribe((schools) => {
            this.calculateMinMaxReachImpressionsBudget(schools);
            this.categorizationOfSchool(schools);
        });
        this.$SetBudget.subscribe((setBudget) => {
            if (setBudget > 0) {
                const { CatA, CatB, CatC } = this.$BudgetRatio.getValue();
                const BudgetData = {
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
                const AllFilteredSchools = _.uniqBy(_.concat(SchoolCatA, SchoolCatB, SchoolCatC), (school) => school._id);
                this.$FilteredSchool.next(AllFilteredSchools);
            }
        });
        this.$SetReach.subscribe((setReach) => {
            if (setReach >= this.$MinReach.value &&
                setReach <= this.$MaxReach.value) {
                let schoolsReach = this.$GetReach.getValue();
                if (schoolsReach < setReach) {
                    let schoolsAddedByReach = _.takeWhile(this.sortSchoolsByInventoryAndEvents(_.differenceBy(this.$OptimizedSchool.getValue(), this.$FilteredSchool.getValue(), (school) => school._id), 'desc'), (school) => {
                        schoolsReach += school.reach;
                        return schoolsReach <= setReach;
                    });
                    this.$FilteredSchool.next(_.unionBy(this.$FilteredSchool.getValue(), _.uniqBy(schoolsAddedByReach, (school) => school._id), (school) => school._id));
                }
                else {
                    let ElseSchoolsReach = 0;
                    let ElseSchoolsAddedByReach = _.takeWhile(this.sortSchoolsByInventoryAndEvents(this.$FilteredSchool.getValue(), 'desc'), (school) => {
                        ElseSchoolsReach += school.reach;
                        return ElseSchoolsReach <= setReach;
                    });
                    this.$FilteredSchool.next(_.uniqBy(ElseSchoolsAddedByReach, (school) => school._id));
                }
            }
        });
        this.$SetImpressions.subscribe((setImpressions) => {
            if (setImpressions >= this.$MinImpressions.value &&
                setImpressions <= this.$MaxImpressions.value) {
                let schoolsImpressions = this.$GetImpression.getValue();
                if (schoolsImpressions < setImpressions) {
                    let schoolsAddedByImpressions = _.takeWhile(this.sortSchoolsByInventoryAndEvents(_.differenceBy(this.$OptimizedSchool.getValue(), this.$FilteredSchool.getValue(), (school) => school._id), 'desc'), (school) => {
                        schoolsImpressions += school.impressions;
                        return schoolsImpressions <= setImpressions;
                    });
                    this.$FilteredSchool.next(_.unionBy(this.$FilteredSchool.getValue(), _.uniqBy(schoolsAddedByImpressions, (school) => school._id), (school) => school._id));
                }
                else {
                    let ElseSchoolsImpressions = 0;
                    let ElseSchoolsAddedByImpressions = _.takeWhile(this.sortSchoolsByInventoryAndEvents(this.$FilteredSchool.getValue(), 'desc'), (school) => {
                        ElseSchoolsImpressions += school.impressions;
                        return ElseSchoolsImpressions <= setImpressions;
                    });
                    this.$FilteredSchool.next(_.uniqBy(ElseSchoolsAddedByImpressions, (school) => school._id));
                }
            }
        });
        this.$SetBudget.next(this.Data.campaignBudget);
    }
    setWisrOptionSchoolList = (IncreasedReach, OptimizedSchools) => {
        if (IncreasedReach >= this.$MinReach.value &&
            IncreasedReach <= this.$MaxReach.value) {
            let schoolsReach = _.sumBy(this.$FilteredSchool.getValue(), (school) => school.reach);
            const restSchools = _.differenceBy(OptimizedSchools, this.$FilteredSchool.getValue(), (school) => school._id);
            let schoolsAddedByReach = _.takeWhile(this.sortSchoolsByReachForWisrOption(_.filter(restSchools, (school) => school.reach <= IncreasedReach - schoolsReach), 'desc'), (school) => {
                schoolsReach += school.reach;
                return schoolsReach <= IncreasedReach;
            });
            const increasedBudget = _.sumBy(schoolsAddedByReach, (school) => school.totalBrandOutlay);
            if (increasedBudget > this.$GetBudget.getValue() * 0.3) {
                schoolsReach = _.sumBy(this.$FilteredSchool.getValue(), (school) => school.reach);
                schoolsAddedByReach = _.takeWhile(this.sortSchoolsByReachForWisrOption(_.filter(restSchools, (school) => school.reach <= (IncreasedReach - schoolsReach)), "desc", 'mode2'), (school) => {
                    schoolsReach += school.reach;
                    return schoolsReach <= IncreasedReach;
                });
            }
            if (schoolsAddedByReach.length === 0) {
                const minBrandOutlaySchool = _.minBy(restSchools, (school) => school.totalBrandOutlay);
                if (minBrandOutlaySchool) {
                    schoolsAddedByReach = [minBrandOutlaySchool];
                }
            }
            this.$SchoolsForWisrOptions.next(_.unionBy(this.$FilteredSchool.getValue(), _.uniqBy(schoolsAddedByReach, (school) => school._id)));
        }
    };
    OptimizeSchoolData = (schoolData) => {
        return this.VerifyAndMapSchoolData(schoolData).filter((school) => {
            return (school.classrooms.length > 0 &&
                school.inventories.length > 0 &&
                _.filter(school.inventories, (inventory) => inventory.attributes.length > 0).length > 0);
        });
    };
    VerifyAndMapSchoolData = (schoolData) => {
        return _.filter(schoolData, (schoolObj) => schoolObj._id &&
            schoolObj.schoolName &&
            schoolObj.category &&
            schoolObj.noOfTeachers).map((school) => {
            const classrooms = this.VerifyAndMapClassroomData(_.filter(this.$ClassroomList.getValue(), (classroom) => classroom.school === school._id));
            const totalNoOfBoys = _.sumBy(classrooms, (classroom) => classroom.boys);
            const totalNoOfGirls = _.sumBy(classrooms, (classroom) => classroom.girls);
            const reach = totalNoOfBoys + totalNoOfGirls;
            const noOfTeachers = school.noOfTeachers;
            const filteredInventories = _.filter(this.$InventoryList.getValue(), (inventory) => inventory.school === school._id);
            const filteredEvents = _.filter(this.$EventList.getValue(), (Event) => Event.school === school._id);
            const inventories = this.VerifyAndMapInventoryData(filteredInventories, noOfTeachers, reach, classrooms.length);
            const events = this.VerifyAndMapEventData(filteredEvents);
            return {
                _id: school._id,
                schoolName: school.schoolName,
                category: school.category,
                noOfTeachers: school.noOfTeachers,
                pinCode: school.pincode,
                city: school.city,
                address: school.address,
                state: school.state,
                floors: school.floors,
                classrooms,
                totalNoOfBoys,
                totalNoOfGirls,
                reach,
                inventories,
                events,
            };
        });
    };
    VerifyAndMapClassroomData = (classroomData) => {
        return _.filter(classroomData, (classroomObj) => classroomObj._id &&
            classroomObj.ageByStandard &&
            classroomObj.avgAnnualFee &&
            classroomObj.school &&
            (classroomObj.boys > 0 || classroomObj.girls > 0)).map((classroom) => ({
            _id: classroom._id,
            ageByStandard: classroom.ageByStandard,
            avgAnnualFee: classroom.avgAnnualFee,
            school: classroom.school,
            boys: classroom.boys ? classroom.boys : 0,
            girls: classroom.girls ? classroom.girls : 0,
            totalStudents: (classroom.boys ? classroom.boys : 0) +
                (classroom.girls ? classroom.girls : 0),
        }));
    };
    VerifyAndMapInventoryData = (InventoryData, noOfTeachers, noOfStudents, noOfClassrooms) => {
        return _.filter(_.filter(InventoryData, (InventoryObj) => InventoryObj._id &&
            InventoryObj.type &&
            InventoryObj.name &&
            InventoryObj.school &&
            InventoryObj.parentName &&
            InventoryObj.attributes &&
            InventoryObj.attributes.length > 0).map((Inventory) => ({
            _id: Inventory._id,
            type: Inventory.type,
            name: Inventory.name,
            school: Inventory.school,
            _custom: Inventory._custom,
            parentName: Inventory.parentName,
            attributes: this.VerifyAndMapInventoryAttributeData(Inventory.attributes, Inventory.parentName, noOfTeachers, noOfStudents, noOfClassrooms),
        })), (Inventory) => Inventory.attributes.length > 0);
    };
    VerifyAndMapInventoryAttributeData = (InventoryAttributeData, InventoryName, noOfTeachers, noOfStudents, noOfClassrooms) => {
        return _.filter(InventoryAttributeData, (AttributeObj) => AttributeObj._id &&
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
            AttributeObj.brandOutlay &&
            AttributeObj.netRevenue &&
            AttributeObj.costPerSchool).map((Attribute) => {
            const inventoryName = InventoryName.toLowerCase().trim();
            const multiplyBy = this.inventoryNOPAffectedBy(inventoryName);
            const materialCost = Attribute.materialCost;
            const noOfChanges = this.SetNoOfChanges(Attribute.noOfChangesYearly);
            const netRevenueByDuration = this.SetNetRevenueByDuration(Attribute.netRevenue);
            const costPerSchoolByDuration = multiplyBy !== 'ByNoOne' ? (materialCost * noOfChanges + (multiplyBy === 'ByStudents' ? noOfStudents : multiplyBy === "ByTeachers" ? noOfTeachers : noOfClassrooms) + 417.07)
                : (Attribute.costPerSchool / Attribute.noOfChangesYearly) * noOfChanges;
            const brandOutlayByDuration = Math.round(netRevenueByDuration + costPerSchoolByDuration);
            return {
                _id: Attribute._id,
                name: Attribute.name,
                units: Attribute.units,
                length: Attribute.length <= 0 ? 1 : Attribute.length,
                breadth: Attribute.breadth <= 0 ? 1 : Attribute.breadth,
                height: Attribute.height <= 0 ? 1 : Attribute.height,
                inventory: Attribute.inventory,
                opportunitiesToSee: Attribute.opportunitiesToSee,
                materialCost,
                noOfChangesYearly: Attribute.noOfChangesYearly,
                noOfChanges,
                quantity: Attribute.quantity,
                brandOutlay: Attribute.brandOutlay,
                netRevenue: Attribute.netRevenue,
                netRevenueByDuration,
                costPerSchool: Attribute.costPerSchool,
                costPerSchoolByDuration,
                brandOutlayByDuration
            };
        });
    };
    SetNoOfChanges = (noOfChangesYearly) => {
        return Math.ceil(this.$CampaignDurationInDays.getValue() /
            (this.$NoOfDaysInYear.getValue() / noOfChangesYearly));
    };
    SetNetRevenueByDuration = (netRevenue) => {
        return (netRevenue /
            (this.$NoOfDaysInYear.getValue() /
                this.$CampaignDurationInDays.getValue()));
    };
    VerifyAndMapEventData = (EventData) => {
        return _.filter(_.filter(EventData, (EventObj) => EventObj._id &&
            EventObj.name &&
            EventObj.school &&
            EventObj.attributes &&
            EventObj.attributes.length > 0).map((Event) => ({
            _id: Event._id,
            name: Event.name,
            school: Event.school,
            attributes: this.VerifyAndMapEventAttributeData(Event.attributes),
        })), (Event) => Event.attributes.length > 0);
    };
    VerifyAndMapEventAttributeData = (EventAttributeData) => {
        return _.filter(EventAttributeData, (AttributeObj) => AttributeObj._id &&
            AttributeObj.name &&
            AttributeObj.units &&
            ((AttributeObj.length && AttributeObj.breadth) ||
                (AttributeObj.length && AttributeObj.height) ||
                (AttributeObj.breadth && AttributeObj.height)) &&
            AttributeObj.opportunitiesToSee &&
            AttributeObj.materialCost &&
            AttributeObj.quantity &&
            AttributeObj.brandOutlay &&
            AttributeObj.netRevenue).map((Attribute) => ({
            _id: Attribute._id,
            name: Attribute.name,
            isCustom: Attribute.isCustom,
            units: Attribute.units,
            length: Attribute.length <= 0 ? 1 : Attribute.length,
            breadth: Attribute.breadth <= 0 ? 1 : Attribute.breadth,
            height: Attribute.height <= 0 ? 1 : Attribute.height,
            opportunitiesToSee: Attribute.opportunitiesToSee,
            materialCost: Attribute.materialCost,
            noOfChangesYearly: Attribute.noOfChangesYearly,
            noOfChanges: this.SetNoOfChanges(Attribute.noOfChangesYearly),
            quantity: Attribute.quantity,
            netRevenue: Attribute.netRevenue,
            brandOutlay: Attribute.brandOutlay,
            brandOutlayByDuration: Math.round(Attribute.netRevenue),
        }));
    };
    mapSchoolWithReachDataAndBrandOutlay = (schoolData) => {
        return this.OptimizeSchoolData(schoolData).map((school) => {
            const totalBrandOutlay = Math.round(this.calculateTotalBrandOutlayInASchool(school.inventories, school.events));
            return {
                ...school,
                totalBrandOutlay,
            };
        });
    };
    calculateTotalBrandOutlayInASchool = (inventories, events) => {
        return (_.sumBy(inventories, (inventory) => _.sumBy(inventory.attributes, (attribute) => attribute.brandOutlayByDuration)) +
            _.sumBy(events, (event) => _.sumBy(event.attributes, (attribute) => attribute.brandOutlayByDuration)));
    };
    mapWithCostOfProduction = (schoolsData) => {
        return this.mapSchoolWithReachDataAndBrandOutlay(schoolsData).map((school) => ({
            ...school,
            inventories: this.calculateInventoriesImpression(school.inventories, school.reach, school.noOfTeachers),
            events: this.calculateEventsImpression(school.events, school.reach),
        }));
    };
    calculateInventoriesImpression = (inventories, reach, noOfTeachers) => {
        const totalAttributes = _.sumBy(inventories, (inventory) => inventory.attributes.length);
        const internalCostPerAttribute = this.$TotalInternalCostPerSchool.getValue() / totalAttributes;
        return inventories.map((inventory) => {
            const multiplyBy = this.inventoryNOPAffectedBy(inventory.parentName);
            return {
                ...inventory,
                attributes: inventory.attributes.map((attribute) => ({
                    ...attribute,
                    internalCostPerSchool: internalCostPerAttribute,
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
    calculateEventsImpression = (events, reach) => {
        return events.map((event) => {
            return {
                ...event,
                attributes: event.attributes.map((attribute) => ({
                    ...attribute,
                    impressions: reach * 0.9 * attribute.opportunitiesToSee * attribute.quantity,
                })),
            };
        });
    };
    inventoryNOPAffectedBy = (inventoryParentName) => {
        return _.includes(this.$InventoryNOP_AffectedByNoOfStudent.getValue(), inventoryParentName)
            ? 'ByStudents'
            : _.includes(this.$InventoryNOP_AffectedByNoOfTeacher.getValue(), inventoryParentName)
                ? 'ByTeachers'
                : _.includes(this.$InventoryNOP_AffectedByNoOfClassroom.getValue(), inventoryParentName)
                    ? 'ByClassrooms'
                    : 'ByNoOne';
    };
    calculateTotalImpressionsInASchool = (inventories, events) => {
        return Math.round(_.sumBy(inventories, (inventory) => _.sumBy(inventory.attributes, (attribute) => attribute.impressions)) +
            _.sumBy(events, (event) => _.sumBy(event.attributes, (attribute) => attribute.impressions)));
    };
    mapWithTotalImpressions = (schoolsData) => {
        return this.mapWithCostOfProduction(schoolsData).map((school) => ({
            ...school,
            impressions: this.calculateTotalImpressionsInASchool(school.inventories, school.events),
        }));
    };
    calculateMinMaxReachImpressionsBudget = (schoolData) => {
        const minBudgetSchoolData = _.minBy(schoolData, (school) => school.totalBrandOutlay);
        const MinBudget = minBudgetSchoolData
            ? minBudgetSchoolData.totalBrandOutlay
            : 0;
        const MaxBudget = _.sumBy(schoolData, (school) => school.totalBrandOutlay);
        const minReachSchoolData = _.minBy(schoolData, (school) => school.reach);
        const minReach = minReachSchoolData ? minReachSchoolData.reach : 0;
        const maxReach = _.sumBy(schoolData, (school) => school.reach);
        const minImpressionsSchoolData = _.minBy(schoolData, (school) => school.impressions);
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
    getReachWithTargetAudience = (noOfBoys, noOfGirls) => {
        return this.$TargetAudience.getValue() == 'co-ed'
            ? noOfBoys + noOfGirls
            : this.$TargetAudience.getValue() == 'boys'
                ? noOfBoys
                : noOfGirls;
    };
    sortSchoolsByBudget = (schoolData, orderBy) => {
        return _.orderBy(schoolData, [
            (school) => school.events.length,
            (school) => school.category,
            (school) => school.totalBrandOutlay,
        ], ['desc', 'asc', orderBy]);
    };
    sortSchoolsByReach = (schoolData, orderBy) => {
        return _.orderBy(schoolData, [(school) => school.category, (school) => school.reach], ['desc', orderBy]);
    };
    sortSchoolsByInventoryAndEvents = (schoolData, orderBy) => {
        return _.orderBy(schoolData, [
            (school) => _.uniq(_.map(school.events, (event) => event.name)).length,
            (school) => _.uniq(_.map(school.inventories, (inventory) => inventory.parentName))
                .length,
        ], [orderBy, orderBy]);
    };
    sortSchoolsByReachForWisrOption = (schoolData, orderBy, mode = 'mode1') => {
        return mode === 'mode1' ?
            _.orderBy(schoolData, [(school) => school.category, (school) => school.reach, (school) => school.totalBrandOutlay], ["desc", orderBy, 'asc'])
            : _.orderBy(schoolData, [(school) => school.category, (school) => school.totalBrandOutlay, (school) => school.reach], ["desc", 'asc', orderBy,]);
    };
    sortSchoolsByImpressions = (schoolData, orderBy) => {
        return _.orderBy(schoolData, [(school) => school.category, (school) => school.impressions], ['desc', orderBy]);
    };
    categorizationOfSchool = (schools) => {
        this.$CatASchool.next(_.filter(schools, (school) => school.category === 'A'));
        this.$CatBSchool.next(_.filter(schools, (school) => school.category === 'B'));
        this.$CatCSchool.next(_.filter(schools, (school) => school.category === 'C'));
    };
}
class OrganizeSchool {
    data;
    CatA = [];
    CatB = [];
    CatC = [];
    ExtraBudget = 0;
    constructor(data) {
        this.data = data;
        const { Schools, BudgetData } = data;
        const { CatA, CatB, CatC } = BudgetData;
        this.filterSchoolByCategory(Schools);
        const schoolA = this.shortSchoolData(this.CatA);
        const schoolB = this.shortSchoolData(this.CatB);
        const schoolC = this.shortSchoolData(this.CatC);
        const budgetA = _.sumBy(schoolA, (school) => school.totalBrandOutlay);
        const budgetB = _.sumBy(schoolB, (school) => school.totalBrandOutlay);
        const budgetC = _.sumBy(schoolC, (school) => school.totalBrandOutlay);
        let finalBudgetA;
        let finalBudgetB;
        let finalBudgetC;
        if (CatA >= budgetA) {
            this.CatA = this.filterSchoolData(schoolA, budgetA);
            finalBudgetA = _.sumBy(this.CatA, (school) => school.totalBrandOutlay);
            this.ExtraBudget = CatA - finalBudgetA;
        }
        else {
            this.CatA = this.filterSchoolData(schoolA, CatA);
            finalBudgetA = _.sumBy(this.CatA, (school) => school.totalBrandOutlay);
            this.ExtraBudget = CatA - finalBudgetA;
        }
        if (CatB + this.ExtraBudget >= budgetB) {
            this.CatB = this.filterSchoolData(schoolB, budgetB);
            finalBudgetB = _.sumBy(this.CatB, (school) => school.totalBrandOutlay);
            this.ExtraBudget = CatB + this.ExtraBudget - finalBudgetB;
        }
        else {
            this.CatB = this.filterSchoolData(schoolB, CatB + this.ExtraBudget);
            finalBudgetB = _.sumBy(this.CatB, (school) => school.totalBrandOutlay);
            this.ExtraBudget = CatB + this.ExtraBudget - finalBudgetB;
        }
        if (CatC + this.ExtraBudget >= budgetC) {
            this.CatC = this.filterSchoolData(schoolC, budgetC);
            finalBudgetC = _.sumBy(this.CatC, (school) => school.totalBrandOutlay);
            this.ExtraBudget = CatC + this.ExtraBudget - finalBudgetC;
        }
        else {
            this.CatC = this.filterSchoolData(schoolC, CatC + this.ExtraBudget);
            finalBudgetC = _.sumBy(this.CatC, (school) => school.totalBrandOutlay);
            this.ExtraBudget = CatC + this.ExtraBudget - finalBudgetC;
        }
        if ((this.CatA.length + this.CatB.length + this.CatC.length) === 0 || this.ExtraBudget > 0) {
            if ((this.CatA.length + this.CatB.length + this.CatC.length) === 0) {
                const minBudgetSchool = _.minBy(Schools, (school) => school.totalBrandOutlay);
                if (minBudgetSchool) {
                    if (minBudgetSchool.category === 'A') {
                        this.CatA.push(minBudgetSchool);
                    }
                    else if (minBudgetSchool.category === 'B') {
                        this.CatB.push(minBudgetSchool);
                    }
                    else if (minBudgetSchool.category === 'C') {
                        this.CatC.push(minBudgetSchool);
                    }
                }
            }
            else if (this.ExtraBudget > 0) {
                const uniqSchool = _.differenceBy(Schools, [...this.CatA, ...this.CatB, ...this.CatC], (school) => school._id);
                const clearfixSchoolByBudget = this.clearfixExtraBudgetWithSchool(uniqSchool, this.ExtraBudget);
                _.forEach(clearfixSchoolByBudget, (school) => {
                    if (school.category === 'A') {
                        this.CatA.push(school);
                    }
                    else if (school.category === 'B') {
                        this.CatB.push(school);
                    }
                    else if (school.category === 'C') {
                        this.CatC.push(school);
                    }
                });
            }
        }
    }
    clearfixExtraBudgetWithSchool = (schools, extraBudget) => {
        const schoolsByLowBudget = _.orderBy(schools, (school) => school.totalBrandOutlay, 'asc');
        let budget = 0;
        return _.takeWhile(schoolsByLowBudget, (school) => {
            budget += school.totalBrandOutlay;
            return budget <= extraBudget;
        });
    };
    filterSchoolByCategory = (schools) => {
        _.forEach(schools, (school) => {
            school.category === 'A'
                ? this.CatA.push(school)
                : school.category === 'B'
                    ? this.CatB.push(school)
                    : school.category === 'C' && this.CatC.push(school);
        });
    };
    shortSchoolData = (schools) => {
        return _.orderBy(schools, [
            (school) => _.uniq(_.map(school.events, (event) => event.name)).length,
            (school) => _.uniq(_.map(school.inventories, (inventory) => inventory.parentName))
                .length,
        ], ['desc', 'desc']);
    };
    filterSchoolData = (schools, budget) => {
        let Budget = 0;
        const schoolsByPriority = _.takeWhile(schools, (school) => {
            Budget += school.totalBrandOutlay;
            return Budget <= budget;
        });
        Budget = _.sumBy(schoolsByPriority, (school) => school.totalBrandOutlay);
        const schoolsByReach = _.takeWhile(_.orderBy(_.differenceBy(schools, schoolsByPriority, (school) => school._id), [(school) => school.reach], ['desc']), (school) => {
            Budget += school.totalBrandOutlay;
            return Budget <= budget;
        });
        Budget = _.sum([
            _.sumBy(schoolsByReach, (school) => school.totalBrandOutlay),
            _.sumBy(schoolsByPriority, (school) => school.totalBrandOutlay),
        ]);
        const schoolsByBudget = _.takeWhile(_.orderBy(_.differenceBy(schools, [...schoolsByPriority, ...schoolsByReach], (school) => school._id), [(school) => school.totalBrandOutlay], ['asc']), (school) => {
            Budget += school.totalBrandOutlay;
            return Budget <= budget;
        });
        return _.concat(schoolsByPriority, schoolsByReach, schoolsByBudget);
    };
    schoolEventsList = (school) => {
        return _.map(school.events, (event) => event.name);
    };
    schoolInventoriesList = (school) => {
        return _.map(school.inventories, (inventory) => inventory.parentName);
    };
}
