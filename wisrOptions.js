"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.WisrOptionService = exports.Units = void 0;
var rxjs_1 = require("rxjs");
var lodash_1 = __importDefault(require("lodash"));
var Units;
(function (Units) {
    Units["Feet"] = "feet";
    Units["Inches"] = "inches";
})(Units = exports.Units || (exports.Units = {}));
var WisrOptionService = /** @class */ (function () {
    function WisrOptionService(Data) {
        var _this = this;
        this.Data = Data;
        this.$BudgetRatio = new rxjs_1.BehaviorSubject({
            CatA: 0.3,
            CatB: 0.3,
            CatC: 0.4
        });
        this.$FilteredSchool = new rxjs_1.BehaviorSubject([]);
        this.$SchoolsForWisrOptions = new rxjs_1.BehaviorSubject([]);
        this.$OptimizedSchool = new rxjs_1.BehaviorSubject([]);
        this.$SchoolList = new rxjs_1.BehaviorSubject([]);
        this.$ClassroomList = new rxjs_1.BehaviorSubject([]);
        this.$InventoryList = new rxjs_1.BehaviorSubject([]);
        this.$EventList = new rxjs_1.BehaviorSubject([]);
        this.$PercentageIncreaseInReach = new rxjs_1.BehaviorSubject(0.3);
        this.$PercentageDiscountInWISR = new rxjs_1.BehaviorSubject(0.1);
        this.$InventoriesNames = new rxjs_1.BehaviorSubject([]);
        this.$EventsNames = new rxjs_1.BehaviorSubject([]);
        this.$SetBudget = new rxjs_1.BehaviorSubject(3000000);
        this.$GetBudget = new rxjs_1.BehaviorSubject(0);
        this.$CampaignDurationInDays = new rxjs_1.BehaviorSubject(100);
        this.$SetReach = new rxjs_1.BehaviorSubject(0);
        this.$GetReach = new rxjs_1.BehaviorSubject(0);
        this.$SetImpressions = new rxjs_1.BehaviorSubject(0);
        this.$GetImpression = new rxjs_1.BehaviorSubject(0);
        this.$TotalInternalCostPerSchool = new rxjs_1.BehaviorSubject(0);
        this.$CatASchool = new rxjs_1.BehaviorSubject([]);
        this.$CatBSchool = new rxjs_1.BehaviorSubject([]);
        this.$CatCSchool = new rxjs_1.BehaviorSubject([]);
        this.$NoOfDaysInYear = new rxjs_1.BehaviorSubject(210);
        this.$MinBudget = new rxjs_1.BehaviorSubject(0);
        this.$MaxBudget = new rxjs_1.BehaviorSubject(0);
        this.$IncreasedBudget = new rxjs_1.BehaviorSubject(0);
        this.$MinReach = new rxjs_1.BehaviorSubject(0);
        this.$MaxReach = new rxjs_1.BehaviorSubject(0);
        this.$IncreasedReach = new rxjs_1.BehaviorSubject(0);
        this.$MinImpressions = new rxjs_1.BehaviorSubject(0);
        this.$MaxImpressions = new rxjs_1.BehaviorSubject(0);
        this.$IncreasedImpressions = new rxjs_1.BehaviorSubject(0);
        this.$InventoryNOP_AffectedByNoOfTeacher = new rxjs_1.BehaviorSubject([
            'Staff Uniforms',
        ]);
        this.$InventoryNOP_AffectedByNoOfStudent = new rxjs_1.BehaviorSubject([
            'Uniforms',
            'Sports Uniforms',
            'School Bag',
            'Hallway',
        ]);
        this.$InventoryNOP_AffectedByNoOfClassroom = new rxjs_1.BehaviorSubject([
            'Classroom',
        ]);
        this.setWisrOptionSchoolList = function (IncreasedReach, FilteredSchools) {
            if (IncreasedReach >= _this.$MinReach.value &&
                IncreasedReach <= _this.$MaxReach.value) {
                var schoolsReach_1 = lodash_1["default"].sumBy(_this.$FilteredSchool.getValue(), function (school) { return school.totalNoOfGirls + school.totalNoOfBoys; });
                var schoolsAddedByReach = lodash_1["default"].takeWhile(_this.sortSchoolsByReach(lodash_1["default"].filter(lodash_1["default"].differenceBy(FilteredSchools, _this.$FilteredSchool.getValue(), function (school) { return school._id; }), function (school) {
                    return school.totalNoOfGirls + school.totalNoOfBoys <=
                        IncreasedReach - schoolsReach_1;
                }), 'asc'), function (school) {
                    schoolsReach_1 += school.totalNoOfGirls + school.totalNoOfBoys;
                    return schoolsReach_1 <= IncreasedReach;
                });
                _this.$SchoolsForWisrOptions.next(lodash_1["default"].unionBy(_this.$FilteredSchool.getValue(), lodash_1["default"].uniqBy(schoolsAddedByReach, function (school) { return school._id; })));
            }
        };
        this.OptimizeSchoolData = function (schoolData) {
            return _this.VerifyAndMapSchoolData(schoolData).filter(function (school) {
                return (school.classrooms.length > 0 &&
                    school.inventories.length > 0 &&
                    lodash_1["default"].filter(school.inventories, function (inventory) { return inventory.attributes.length > 0; }).length > 0);
            });
        };
        this.VerifyAndMapSchoolData = function (schoolData) {
            return lodash_1["default"].filter(schoolData, function (schoolObj) {
                return schoolObj._id &&
                    schoolObj.schoolName &&
                    schoolObj.category &&
                    schoolObj.noOfTeachers;
            }).map(function (school) { return ({
                _id: school._id,
                schoolName: school.schoolName,
                category: school.category,
                noOfTeachers: school.noOfTeachers,
                classrooms: _this.FilterClassroomBySchoolId(school._id),
                inventories: _this.FilterInventoryBySchoolId(school._id),
                events: _this.FilterEventBySchoolId(school._id)
            }); });
        };
        this.FilterClassroomBySchoolId = function (schoolId) {
            return _this.VerifyAndMapClassroomData(lodash_1["default"].filter(_this.$ClassroomList.getValue(), function (classroom) { return classroom.school === schoolId; }));
        };
        this.VerifyAndMapClassroomData = function (classroomData) {
            return lodash_1["default"].filter(classroomData, function (classroomObj) {
                return classroomObj._id &&
                    classroomObj.ageByStandard &&
                    classroomObj.avgAnnualFee &&
                    classroomObj.school &&
                    (classroomObj.boys > 0 || classroomObj.girls > 0);
            }).map(function (classroom) { return ({
                _id: classroom._id,
                ageByStandard: classroom.ageByStandard,
                avgAnnualFee: classroom.avgAnnualFee,
                school: classroom.school,
                boys: classroom.boys ? classroom.boys : 0,
                girls: classroom.girls ? classroom.girls : 0,
                totalStudents: (classroom.boys ? classroom.boys : 0) +
                    (classroom.girls ? classroom.girls : 0)
            }); });
        };
        this.FilterInventoryBySchoolId = function (schoolId) {
            return _this.VerifyAndMapInventoryData(lodash_1["default"].filter(_this.$InventoryList.getValue(), function (inventory) { return inventory.school === schoolId; }));
        };
        this.VerifyAndMapInventoryData = function (InventoryData) {
            return lodash_1["default"].filter(lodash_1["default"].filter(InventoryData, function (InventoryObj) {
                return InventoryObj._id &&
                    InventoryObj.type &&
                    InventoryObj.name &&
                    InventoryObj.school &&
                    InventoryObj.parentName &&
                    InventoryObj.attributes &&
                    InventoryObj.attributes.length > 0;
            }).map(function (Inventory) { return ({
                _id: Inventory._id,
                type: Inventory.type,
                name: Inventory.name,
                school: Inventory.school,
                parentName: Inventory.parentName,
                attributes: _this.VerifyAndMapInventoryAttributeData(Inventory.attributes)
            }); }), function (Inventory) { return Inventory.attributes.length > 0; });
        };
        this.VerifyAndMapInventoryAttributeData = function (InventoryAttributeData) {
            return lodash_1["default"].filter(InventoryAttributeData, function (AttributeObj) {
                return AttributeObj._id &&
                    AttributeObj.name &&
                    AttributeObj.units &&
                    AttributeObj.length &&
                    AttributeObj.breadth &&
                    AttributeObj.height &&
                    AttributeObj.inventory &&
                    AttributeObj.opportunitiesToSee &&
                    AttributeObj.materialCost &&
                    AttributeObj.noOfChangesYearly &&
                    AttributeObj.quantity &&
                    AttributeObj.brandOutlay;
            }).map(function (Attribute) { return ({
                _id: Attribute._id,
                name: Attribute.name,
                units: Attribute.units,
                length: Attribute.length,
                breadth: Attribute.breadth,
                height: Attribute.height,
                inventory: Attribute.inventory,
                opportunitiesToSee: Attribute.opportunitiesToSee,
                materialCost: Attribute.materialCost,
                noOfChangesYearly: Attribute.noOfChangesYearly,
                noOfChanges: _this.SetNoOfChanges(Attribute.noOfChangesYearly),
                quantity: Attribute.quantity,
                brandOutlay: Attribute.brandOutlay,
                brandOutlayByDuration: _this.SetBrandOutlayByDuration(Attribute.brandOutlay)
            }); });
        };
        this.SetNoOfChanges = function (noOfChangesYearly) {
            return Math.ceil(_this.$CampaignDurationInDays.getValue() / (365 / noOfChangesYearly));
        };
        this.SetBrandOutlayByDuration = function (brandOutlay) {
            return (brandOutlay /
                (_this.$NoOfDaysInYear.getValue() /
                    _this.$CampaignDurationInDays.getValue()));
        };
        this.FilterEventBySchoolId = function (schoolId) {
            return _this.VerifyAndMapEventData(lodash_1["default"].filter(_this.$EventList.getValue(), function (Event) { return Event.school === schoolId; }));
        };
        this.VerifyAndMapEventData = function (EventData) {
            return lodash_1["default"].filter(lodash_1["default"].filter(EventData, function (EventObj) {
                return EventObj._id &&
                    EventObj.name &&
                    EventObj.school &&
                    EventObj.attributes &&
                    EventObj.attributes.length > 0;
            }).map(function (Event) { return ({
                _id: Event._id,
                name: Event.name,
                school: Event.school,
                attributes: _this.VerifyAndMapEventAttributeData(Event.attributes)
            }); }), function (Event) { return Event.attributes.length > 0; });
        };
        this.VerifyAndMapEventAttributeData = function (EventAttributeData) {
            return lodash_1["default"].filter(EventAttributeData, function (AttributeObj) {
                return AttributeObj._id &&
                    AttributeObj.name &&
                    AttributeObj.units &&
                    AttributeObj.length &&
                    AttributeObj.breadth &&
                    AttributeObj.height &&
                    AttributeObj.opportunitiesToSee &&
                    AttributeObj.materialCost &&
                    AttributeObj.quantity &&
                    AttributeObj.brandOutlay;
            }).map(function (Attribute) { return ({
                _id: Attribute._id,
                name: Attribute.name,
                units: Attribute.units,
                length: Attribute.length,
                breadth: Attribute.breadth,
                height: Attribute.height,
                opportunitiesToSee: Attribute.opportunitiesToSee,
                materialCost: Attribute.materialCost,
                noOfChangesYearly: Attribute.noOfChangesYearly,
                quantity: Attribute.quantity,
                noOfChanges: _this.SetNoOfChanges(Attribute.noOfChangesYearly),
                brandOutlay: Attribute.brandOutlay,
                brandOutlayByDuration: _this.SetBrandOutlayByDuration(Attribute.brandOutlay)
            }); });
        };
        this.mapSchoolWithReachDataAndBrandOutlay = function (schoolData) {
            return _this.OptimizeSchoolData(schoolData).map(function (school) { return (__assign(__assign({}, school), { totalNoOfBoys: _this.calculateTotalBoysInASchool(school.classrooms), totalNoOfGirls: _this.calculateTotalGirlsInASchool(school.classrooms), totalBrandOutlay: _this.calculateTotalBrandOutlayInASchool(school.inventories, school.events) })); });
        };
        this.calculateTotalBoysInASchool = function (classrooms) {
            return lodash_1["default"].sumBy(classrooms, function (classroom) { return classroom.boys; });
        };
        this.calculateTotalGirlsInASchool = function (classrooms) {
            return lodash_1["default"].sumBy(classrooms, function (classroom) { return classroom.girls; });
        };
        this.calculateTotalBrandOutlayInASchool = function (inventories, events) {
            return (lodash_1["default"].sumBy(inventories, function (inventory) {
                return lodash_1["default"].sumBy(inventory.attributes, function (attribute) { return attribute.brandOutlayByDuration; });
            }) +
                lodash_1["default"].sumBy(events, function (event) {
                    return lodash_1["default"].sumBy(event.attributes, function (attribute) { return attribute.brandOutlayByDuration; });
                }));
        };
        this.mapWithCostOfProduction = function (schoolsData) {
            return _this.mapSchoolWithReachDataAndBrandOutlay(schoolsData).map(function (school) { return (__assign(__assign({}, school), { inventories: _this.calculateInventoriesCostPerSchoolAndImpression(school.inventories, school.totalNoOfBoys, school.totalNoOfGirls, school.noOfTeachers, school.classrooms.length), events: _this.calculateEventsCostPerSchoolAndImpression(school.events, school.totalNoOfBoys, school.totalNoOfGirls, school.noOfTeachers, school.classrooms.length) })); });
        };
        this.calculateInventoriesCostPerSchoolAndImpression = function (inventories, noOfBoys, noOfGirls, noOfTeachers, noOfClassroom) {
            var totalAttributes = lodash_1["default"].sumBy(inventories, function (inventory) { return inventory.attributes.length; });
            var internalCostPerAttribute = _this.$TotalInternalCostPerSchool.getValue() / totalAttributes;
            return inventories.map(function (inventory) {
                var multiplyBy = _this.inventoryNOPAffectedBy(inventory.parentName);
                return __assign(__assign({}, inventory), { attributes: inventory.attributes.map(function (attribute) { return (__assign(__assign({}, attribute), { internalCostPerSchool: internalCostPerAttribute, costPerSchool: _this.calculateInventoriesAttributeCostOfProduction(multiplyBy, attribute, noOfBoys, noOfGirls, noOfTeachers, noOfClassroom) + internalCostPerAttribute, impressions: multiplyBy === 'ByTeachers'
                            ? noOfTeachers * 0.95 + _this.$CampaignDurationInDays.getValue()
                            : (noOfBoys + noOfGirls) *
                                0.9 *
                                _this.$CampaignDurationInDays.getValue() *
                                attribute.opportunitiesToSee })); }) });
            });
        };
        this.calculateEventsCostPerSchoolAndImpression = function (events, noOfBoys, noOfGirls, noOfTeachers, noOfClassroom) {
            return events.map(function (event) {
                return __assign(__assign({}, event), { attributes: event.attributes.map(function (attribute) { return (__assign(__assign({}, attribute), { costPerSchool: _this.calculateEventsAttributeCostOfProduction(attribute.noOfChanges, attribute), impressions: (noOfBoys + noOfGirls) *
                            0.9 *
                            attribute.opportunitiesToSee *
                            attribute.quantity })); }) });
            });
        };
        this.inventoryNOPAffectedBy = function (inventoryParentName) {
            return lodash_1["default"].includes(_this.$InventoryNOP_AffectedByNoOfStudent.getValue(), inventoryParentName)
                ? 'ByStudents'
                : lodash_1["default"].includes(_this.$InventoryNOP_AffectedByNoOfTeacher.getValue(), inventoryParentName)
                    ? 'ByTeachers'
                    : lodash_1["default"].includes(_this.$InventoryNOP_AffectedByNoOfClassroom.getValue(), inventoryParentName)
                        ? 'ByClassrooms'
                        : 'ByNoOne';
        };
        this.calculateInventoriesAttributeCostOfProduction = function (multiplyBy, attribute, noOfBoys, noOfGirls, noOfTeachers, noOfClassroom) {
            var SOP = attribute.units === 'feet' ? attribute.length * attribute.breadth : 1;
            var totalStudents = noOfBoys + noOfGirls;
            var NOP = multiplyBy === 'ByStudents'
                ? attribute.quantity * totalStudents
                : multiplyBy === 'ByTeachers'
                    ? attribute.quantity * noOfTeachers
                    : multiplyBy === 'ByClassrooms'
                        ? attribute.quantity * noOfClassroom
                        : attribute.quantity;
            return SOP * NOP * attribute.noOfChanges * attribute.materialCost;
        };
        this.calculateEventsAttributeCostOfProduction = function (noOfPlacement, attribute) {
            var SOP = attribute.units === 'feet' ? attribute.length * attribute.breadth : 1;
            return SOP * attribute.quantity * attribute.materialCost;
        };
        this.calculateTotalImpressionsInASchool = function (inventories, events) {
            return (lodash_1["default"].sumBy(inventories, function (inventory) {
                return lodash_1["default"].sumBy(inventory.attributes, function (attribute) { return attribute.impressions; });
            }) +
                lodash_1["default"].sumBy(events, function (event) {
                    return lodash_1["default"].sumBy(event.attributes, function (attribute) { return attribute.impressions; });
                }));
        };
        this.calculateTotalCostPerSchool = function (inventories, events) {
            return (lodash_1["default"].sumBy(inventories, function (inventory) {
                return lodash_1["default"].sumBy(inventory.attributes, function (attribute) { return attribute.costPerSchool; });
            }) +
                lodash_1["default"].sumBy(events, function (event) {
                    return lodash_1["default"].sumBy(event.attributes, function (attribute) { return attribute.costPerSchool; });
                }));
        };
        this.mapWithTotalImpressionsAndCostPerSchool = function (schoolsData) {
            return _this.mapWithCostOfProduction(schoolsData).map(function (school) { return (__assign(__assign({}, school), { impressions: _this.calculateTotalImpressionsInASchool(school.inventories, school.events), costPerSchool: _this.calculateTotalCostPerSchool(school.inventories, school.events) })); });
        };
        this.calculateMinMaxReachImpressionsBudget = function (schoolData) {
            var minBudgetSchoolData = lodash_1["default"].minBy(schoolData, function (school) { return school.totalBrandOutlay; });
            var MinBudget = minBudgetSchoolData
                ? minBudgetSchoolData.totalBrandOutlay
                : 0;
            var MaxBudget = lodash_1["default"].sumBy(schoolData, function (school) { return school.totalBrandOutlay; });
            var minReachSchoolData = lodash_1["default"].minBy(schoolData, function (school) { return school.totalNoOfBoys + school.totalNoOfGirls; });
            var minReach = minReachSchoolData
                ? minReachSchoolData.totalNoOfBoys + minReachSchoolData.totalNoOfGirls
                : 0;
            var maxReach = lodash_1["default"].sumBy(schoolData, function (school) { return school.totalNoOfBoys + school.totalNoOfGirls; });
            var minImpressionsSchoolData = lodash_1["default"].minBy(schoolData, function (school) { return school.impressions; });
            var minImpressions = minImpressionsSchoolData
                ? minImpressionsSchoolData.impressions
                : 0;
            var maxImpressions = lodash_1["default"].sumBy(schoolData, function (school) { return school.impressions; });
            _this.$MinBudget.next(MinBudget);
            _this.$MaxBudget.next(MaxBudget);
            _this.$MaxReach.next(maxReach);
            _this.$MinReach.next(minReach);
            _this.$MaxImpressions.next(maxImpressions);
            _this.$MinImpressions.next(minImpressions);
        };
        this.sortSchoolsByBudget = function (schoolData, orderBy) {
            return lodash_1["default"].orderBy(schoolData, [
                function (school) { return school.events.length > 0; },
                function (school) { return school.category; },
                function (school) { return school.totalBrandOutlay; },
            ], ['desc', 'asc', orderBy]);
        };
        this.sortSchoolsByReach = function (schoolData, orderBy) {
            return lodash_1["default"].orderBy(schoolData, [
                function (school) { return school.events.length > 0; },
                function (school) { return school.category; },
                function (school) { return school.totalNoOfBoys + school.totalNoOfGirls; },
            ], ['desc', 'desc', orderBy]);
        };
        this.sortSchoolsByImpressions = function (schoolData, orderBy) {
            return lodash_1["default"].orderBy(schoolData, [
                function (school) { return school.events.length > 0; },
                function (school) { return school.category; },
                function (school) { return school.impressions; },
            ], ['desc', 'asc', orderBy]);
        };
        this.categorizationOfSchool = function (schools) {
            _this.$CatASchool.next(lodash_1["default"].filter(schools, function (school) { return school.category === 'A'; }));
            _this.$CatBSchool.next(lodash_1["default"].filter(schools, function (school) { return school.category === 'B'; }));
            _this.$CatCSchool.next(lodash_1["default"].filter(schools, function (school) { return school.category === 'C'; }));
        };
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
            next: function (data) {
                var CatA = data.CatA, CatB = data.CatB, CatC = data.CatC;
                if (CatA + CatB + CatC > 1) {
                    throw ('Budget Ratio is Not Correct { CatA = ' +
                        CatA +
                        ', CatB = ' +
                        CatB +
                        ', CatC = ' +
                        CatC +
                        ' } The sum of category ratio must be less or equal to 1');
                }
            }
        });
        this.$FilteredSchool.subscribe(function (schools) {
            var budget = lodash_1["default"].sumBy(schools, function (school) { return school.totalBrandOutlay; });
            var reach = lodash_1["default"].sumBy(schools, function (school) { return school.totalNoOfGirls + school.totalNoOfBoys; });
            var impressions = lodash_1["default"].sumBy(schools, function (school) { return school.impressions; });
            _this.$GetBudget.next(budget);
            _this.$GetReach.next(reach);
            _this.$GetImpression.next(impressions);
            var calculateReach = reach + reach * _this.$PercentageIncreaseInReach.getValue();
            var IncreasedReach = calculateReach > _this.$MaxReach.getValue()
                ? _this.$MaxReach.getValue()
                : calculateReach;
            _this.setWisrOptionSchoolList(IncreasedReach, _this.$OptimizedSchool.getValue());
        });
        this.$SchoolsForWisrOptions.subscribe(function (schools) {
            var grossRevenue = lodash_1["default"].sumBy(schools, function (school) { return school.totalBrandOutlay; });
            var NetRevenue = grossRevenue;
            var SchoolShare = NetRevenue * 0.7;
            var WisrShare = NetRevenue * 0.3;
            var finalBudget = SchoolShare +
                WisrShare -
                WisrShare * _this.$PercentageDiscountInWISR.getValue();
            var reach = lodash_1["default"].sumBy(schools, function (school) { return school.totalNoOfGirls + school.totalNoOfBoys; });
            var impressions = lodash_1["default"].sumBy(schools, function (school) { return school.impressions; });
            _this.$IncreasedBudget.next(finalBudget < grossRevenue ? grossRevenue : finalBudget);
            _this.$IncreasedReach.next(reach);
            _this.$IncreasedImpressions.next(impressions);
        });
        this.$OptimizedSchool.next(this.mapWithTotalImpressionsAndCostPerSchool(this.$SchoolList.getValue()));
        this.$OptimizedSchool.subscribe(function (schools) {
            _this.calculateMinMaxReachImpressionsBudget(schools);
            _this.categorizationOfSchool(schools);
        });
        this.$SetBudget.subscribe(function (setBudget) {
            if (setBudget >= _this.$MinBudget.value &&
                setBudget <= _this.$MaxBudget.value) {
                var _a = _this.$BudgetRatio.getValue(), CatA = _a.CatA, CatB = _a.CatB, CatC = _a.CatC;
                var BudgetData = {
                    CatA: setBudget * CatA,
                    CatB: setBudget * CatB,
                    CatC: setBudget * CatC
                };
                var OrganizedSchool = new OrganizeSchool({
                    Schools: _this.$OptimizedSchool.getValue(),
                    InventoriesNames: _this.$InventoriesNames.getValue(),
                    EventsNames: _this.$EventsNames.getValue(),
                    BudgetData: BudgetData
                });
                var SchoolCatA = OrganizedSchool.CatA;
                var SchoolCatB = OrganizedSchool.CatB;
                var SchoolCatC = OrganizedSchool.CatC;
                var AllFilteredSchools = lodash_1["default"].uniqBy(lodash_1["default"].concat(SchoolCatA, SchoolCatB, SchoolCatC), function (school) { return school._id; });
                _this.$FilteredSchool.next(AllFilteredSchools);
            }
        });
        this.$SetReach.subscribe(function (setReach) {
            if (setReach >= _this.$MinReach.value &&
                setReach <= _this.$MaxReach.value) {
                var schoolsReach_2 = lodash_1["default"].sumBy(_this.$FilteredSchool.getValue(), function (school) { return school.totalNoOfGirls + school.totalNoOfBoys; });
                if (schoolsReach_2 < setReach) {
                    var schoolsAddedByReach = lodash_1["default"].takeWhile(_this.sortSchoolsByReach(lodash_1["default"].differenceBy(_this.$OptimizedSchool.getValue(), _this.$FilteredSchool.getValue(), function (school) { return school._id; }), 'asc'), function (school) {
                        schoolsReach_2 += school.totalNoOfGirls + school.totalNoOfBoys;
                        return schoolsReach_2 <= setReach;
                    });
                    _this.$FilteredSchool.next(lodash_1["default"].unionBy(_this.$FilteredSchool.getValue(), lodash_1["default"].uniqBy(schoolsAddedByReach, function (school) { return school._id; }), function (school) { return school._id; }));
                }
                else {
                    var ElseSchoolsReach_1 = 0;
                    var ElseSchoolsAddedByReach = lodash_1["default"].takeWhile(_this.sortSchoolsByReach(_this.$OptimizedSchool.getValue(), 'asc'), function (school) {
                        ElseSchoolsReach_1 += school.totalNoOfGirls + school.totalNoOfBoys;
                        return ElseSchoolsReach_1 <= setReach;
                    });
                    _this.$FilteredSchool.next(lodash_1["default"].uniqBy(ElseSchoolsAddedByReach, function (school) { return school._id; }));
                }
            }
        });
        this.$SetImpressions.subscribe(function (setImpressions) {
            if (setImpressions >= _this.$MinImpressions.value &&
                setImpressions <= _this.$MaxImpressions.value) {
                var schoolsImpressions_1 = lodash_1["default"].sumBy(_this.$FilteredSchool.getValue(), function (school) { return school.impressions; });
                var schoolsAddedByImpressions = lodash_1["default"].takeWhile(_this.sortSchoolsByImpressions(lodash_1["default"].differenceBy(_this.$OptimizedSchool.getValue(), _this.$FilteredSchool.getValue(), function (school) { return school._id; }), 'asc'), function (school) {
                    schoolsImpressions_1 += school.impressions;
                    return schoolsImpressions_1 <= setImpressions;
                });
                _this.$FilteredSchool.next(lodash_1["default"].unionBy(_this.$FilteredSchool.getValue(), lodash_1["default"].uniqBy(schoolsAddedByImpressions, function (school) { return school._id; }), function (school) { return school._id; }));
            }
        });
        this.$SetBudget.next(this.Data.campaignBudget);
    }
    return WisrOptionService;
}());
exports.WisrOptionService = WisrOptionService;
var OrganizeSchool = /** @class */ (function () {
    function OrganizeSchool(data) {
        var _this = this;
        this.data = data;
        this.CatA = [];
        this.CatB = [];
        this.CatC = [];
        this.ExtraBudget = 0;
        this.filterSchoolByCategory = function (schools) {
            lodash_1["default"].forEach(schools, function (school) {
                school.category === 'A'
                    ? _this.CatA.push(school)
                    : school.category === 'B'
                        ? _this.CatB.push(school)
                        : school.category === 'C'
                            ? _this.CatC.push(school)
                            : false;
            });
        };
        this.shortSchoolData = function (schools) {
            var EI;
            var ei;
            var I;
            var i;
            var E;
            var e;
            EI = lodash_1["default"].filter(schools, function (school) {
                var eventsList = _this.schoolEventsList(school);
                var inventoriesList = _this.schoolInventoriesList(school);
                var eventsCheck = lodash_1["default"].every(_this.data.EventsNames, function (event) {
                    return lodash_1["default"].includes(eventsList, event);
                });
                var inventoriesCheck = lodash_1["default"].every(_this.data.InventoriesNames, function (inventory) { return lodash_1["default"].includes(inventoriesList, inventory); });
                return eventsCheck && inventoriesCheck;
            });
            ei = lodash_1["default"].filter(schools, function (school) {
                var eventsList = _this.schoolEventsList(school);
                var inventoriesList = _this.schoolInventoriesList(school);
                var eventsCheck = lodash_1["default"].every(_this.data.EventsNames, function (event) {
                    return lodash_1["default"].includes(eventsList, event);
                });
                var inventoriesCheck = lodash_1["default"].every(_this.data.InventoriesNames, function (inventory) { return lodash_1["default"].includes(inventoriesList, inventory); });
                return ((eventsList.length > 0 &&
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
                        inventoriesCheck));
            });
            I = lodash_1["default"].filter(schools, function (school) {
                var eventsList = _this.schoolEventsList(school);
                var inventoriesList = _this.schoolInventoriesList(school);
                var eventsCheck = lodash_1["default"].every(_this.data.EventsNames, function (event) {
                    return lodash_1["default"].includes(eventsList, event);
                });
                var inventoriesCheck = lodash_1["default"].every(_this.data.InventoriesNames, function (inventory) { return lodash_1["default"].includes(inventoriesList, inventory); });
                return eventsList.length === 0 && inventoriesCheck;
            });
            i = lodash_1["default"].filter(schools, function (school) {
                var eventsList = _this.schoolEventsList(school);
                var inventoriesList = _this.schoolInventoriesList(school);
                var eventsCheck = lodash_1["default"].every(_this.data.EventsNames, function (event) {
                    return lodash_1["default"].includes(eventsList, event);
                });
                var inventoriesCheck = lodash_1["default"].every(_this.data.InventoriesNames, function (inventory) { return lodash_1["default"].includes(inventoriesList, inventory); });
                return (eventsList.length === 0 &&
                    inventoriesList.length > 0 &&
                    !inventoriesCheck);
            });
            E = lodash_1["default"].filter(schools, function (school) {
                var eventsList = _this.schoolEventsList(school);
                var inventoriesList = _this.schoolInventoriesList(school);
                var eventsCheck = lodash_1["default"].every(_this.data.EventsNames, function (event) {
                    return lodash_1["default"].includes(eventsList, event);
                });
                var inventoriesCheck = lodash_1["default"].every(_this.data.InventoriesNames, function (inventory) { return lodash_1["default"].includes(inventoriesList, inventory); });
                return eventsCheck && inventoriesList.length === 0;
            });
            e = lodash_1["default"].filter(schools, function (school) {
                var eventsList = _this.schoolEventsList(school);
                var inventoriesList = _this.schoolInventoriesList(school);
                var eventsCheck = lodash_1["default"].every(_this.data.EventsNames, function (event) {
                    return lodash_1["default"].includes(eventsList, event);
                });
                var inventoriesCheck = lodash_1["default"].every(_this.data.InventoriesNames, function (inventory) { return lodash_1["default"].includes(inventoriesList, inventory); });
                return (!eventsCheck && eventsList.length > 0 && inventoriesList.length === 0);
            });
            return lodash_1["default"].concat(EI, ei, I, i, E, e);
        };
        this.filterSchoolData = function (schools, budget) {
            var Budget = 0;
            return lodash_1["default"].takeWhile(schools, function (schools) {
                Budget += schools.totalBrandOutlay;
                return Budget <= budget;
            });
        };
        this.schoolEventsList = function (school) {
            return lodash_1["default"].map(school.events, function (event) { return event.name; });
        };
        this.schoolInventoriesList = function (school) {
            return lodash_1["default"].map(school.inventories, function (inventory) { return inventory.parentName; });
        };
        var Schools = data.Schools, BudgetData = data.BudgetData;
        var CatA = BudgetData.CatA, CatB = BudgetData.CatB, CatC = BudgetData.CatC;
        this.filterSchoolByCategory(Schools);
        var schoolA = this.shortSchoolData(this.CatA);
        var schoolB = this.shortSchoolData(this.CatB);
        var schoolC = this.shortSchoolData(this.CatC);
        var budgetA = lodash_1["default"].sumBy(schoolA, function (school) { return school.totalBrandOutlay; });
        var budgetB = lodash_1["default"].sumBy(schoolB, function (school) { return school.totalBrandOutlay; });
        var budgetC = lodash_1["default"].sumBy(schoolC, function (school) { return school.totalBrandOutlay; });
        var finalBudgetA;
        var finalBudgetB;
        var finalBudgetC;
        if (CatA > budgetA) {
            finalBudgetA = budgetA;
            this.ExtraBudget = CatA - finalBudgetA;
        }
        else {
            finalBudgetA = CatA;
        }
        if (CatB + this.ExtraBudget > budgetB) {
            finalBudgetB = budgetB;
            this.ExtraBudget = CatB + this.ExtraBudget - finalBudgetB;
        }
        else {
            finalBudgetB = CatB + this.ExtraBudget;
        }
        if (CatC + this.ExtraBudget > budgetC) {
            finalBudgetC = budgetC;
            this.ExtraBudget = CatC + this.ExtraBudget - finalBudgetC;
        }
        else {
            finalBudgetC = CatC + this.ExtraBudget;
        }
        this.CatA = this.filterSchoolData(schoolA, finalBudgetA);
        this.CatB = this.filterSchoolData(schoolB, finalBudgetB);
        this.CatC = this.filterSchoolData(schoolC, finalBudgetC);
    }
    return OrganizeSchool;
}());
