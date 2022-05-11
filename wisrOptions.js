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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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
        this.$TargetAudience = new rxjs_1.BehaviorSubject('co-ed');
        this.$PercentageIncreaseInReach = new rxjs_1.BehaviorSubject(0.3);
        this.$PercentageDiscountInWISR = new rxjs_1.BehaviorSubject(0.1);
        this.$InventoriesNames = new rxjs_1.BehaviorSubject([]);
        this.$EventsNames = new rxjs_1.BehaviorSubject([]);
        this.$SetBudget = new rxjs_1.BehaviorSubject(0);
        this.$GetBudget = new rxjs_1.BehaviorSubject(0);
        this.$CampaignDurationInDays = new rxjs_1.BehaviorSubject(0);
        this.$SetReach = new rxjs_1.BehaviorSubject(0);
        this.$GetReach = new rxjs_1.BehaviorSubject(0);
        this.$SetImpressions = new rxjs_1.BehaviorSubject(0);
        this.$GetImpression = new rxjs_1.BehaviorSubject(0);
        this.$TotalInternalCostPerSchool = new rxjs_1.BehaviorSubject(0);
        this.$CatASchool = new rxjs_1.BehaviorSubject([]);
        this.$CatBSchool = new rxjs_1.BehaviorSubject([]);
        this.$CatCSchool = new rxjs_1.BehaviorSubject([]);
        this.$NoOfDaysInYear = new rxjs_1.BehaviorSubject(365);
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
                var schoolsReach_1 = lodash_1["default"].sumBy(_this.$FilteredSchool.getValue(), function (school) { return school.reach; });
                var schoolsAddedByReach = lodash_1["default"].takeWhile(_this.sortSchoolsByReachForWisrOption(lodash_1["default"].filter(lodash_1["default"].differenceBy(FilteredSchools, _this.$FilteredSchool.getValue(), function (school) { return school._id; }), function (school) { return school.reach <= IncreasedReach - schoolsReach_1; }), 'desc'), function (school) {
                    schoolsReach_1 += school.reach;
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
                pinCode: school.pincode,
                city: school.city,
                address: school.address,
                state: school.state,
                floors: school.floors,
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
                    ((AttributeObj.length && AttributeObj.breadth) ||
                        (AttributeObj.length && AttributeObj.height) ||
                        (AttributeObj.breadth && AttributeObj.height)) &&
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
                length: Attribute.length <= 0 ? 1 : Attribute.length,
                breadth: Attribute.breadth <= 0 ? 1 : Attribute.breadth,
                height: Attribute.height <= 0 ? 1 : Attribute.height,
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
            return Math.ceil(_this.$CampaignDurationInDays.getValue() /
                (_this.$NoOfDaysInYear.getValue() / noOfChangesYearly));
        };
        this.SetBrandOutlayByDuration = function (brandOutlay) {
            return Math.ceil(brandOutlay /
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
                    ((AttributeObj.length && AttributeObj.breadth) ||
                        (AttributeObj.length && AttributeObj.height) ||
                        (AttributeObj.breadth && AttributeObj.height)) &&
                    AttributeObj.opportunitiesToSee &&
                    AttributeObj.materialCost &&
                    AttributeObj.quantity &&
                    AttributeObj.brandOutlay;
            }).map(function (Attribute) { return ({
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
                noOfChanges: _this.SetNoOfChanges(Attribute.noOfChangesYearly),
                brandOutlay: Attribute.brandOutlay,
                brandOutlayByDuration: Attribute.brandOutlay
            }); });
        };
        this.mapSchoolWithReachDataAndBrandOutlay = function (schoolData) {
            return _this.OptimizeSchoolData(schoolData).map(function (school) {
                var totalNoOfBoys = _this.calculateTotalBoysInASchool(school.classrooms);
                var totalNoOfGirls = _this.calculateTotalGirlsInASchool(school.classrooms);
                var reach = _this.getReachWithTargetAudience(totalNoOfBoys, totalNoOfGirls);
                var totalBrandOutlay = _this.calculateTotalBrandOutlayInASchool(school.inventories, school.events);
                return __assign(__assign({}, school), { totalNoOfBoys: totalNoOfBoys, totalNoOfGirls: totalNoOfGirls, reach: reach, totalBrandOutlay: totalBrandOutlay });
            });
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
            return _this.mapSchoolWithReachDataAndBrandOutlay(schoolsData).map(function (school) { return (__assign(__assign({}, school), { inventories: _this.calculateInventoriesCostPerSchoolAndImpression(school.inventories, school.reach, school.noOfTeachers, school.classrooms.length), events: _this.calculateEventsCostPerSchoolAndImpression(school.events, school.reach, school.noOfTeachers, school.classrooms.length) })); });
        };
        this.calculateInventoriesCostPerSchoolAndImpression = function (inventories, reach, noOfTeachers, noOfClassroom) {
            var totalAttributes = lodash_1["default"].sumBy(inventories, function (inventory) { return inventory.attributes.length; });
            var internalCostPerAttribute = _this.$TotalInternalCostPerSchool.getValue() / totalAttributes;
            return inventories.map(function (inventory) {
                var multiplyBy = _this.inventoryNOPAffectedBy(inventory.parentName);
                return __assign(__assign({}, inventory), { attributes: inventory.attributes.map(function (attribute) { return (__assign(__assign({}, attribute), { internalCostPerSchool: internalCostPerAttribute, costPerSchool: _this.calculateInventoriesAttributeCostOfProduction(multiplyBy, attribute, reach, noOfTeachers, noOfClassroom) + internalCostPerAttribute, impressions: Math.ceil(multiplyBy === 'ByTeachers'
                            ? noOfTeachers * 0.95 + _this.$CampaignDurationInDays.getValue()
                            : reach *
                                0.9 *
                                _this.$CampaignDurationInDays.getValue() *
                                attribute.opportunitiesToSee) })); }) });
            });
        };
        this.calculateEventsCostPerSchoolAndImpression = function (events, reach, noOfTeachers, noOfClassroom) {
            return events.map(function (event) {
                return __assign(__assign({}, event), { attributes: event.attributes.map(function (attribute) { return (__assign(__assign({}, attribute), { costPerSchool: _this.calculateEventsAttributeCostOfProduction(attribute.noOfChanges, attribute), impressions: Math.ceil(reach * 0.9 * attribute.opportunitiesToSee * attribute.quantity) })); }) });
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
        this.calculateInventoriesAttributeCostOfProduction = function (multiplyBy, attribute, reach, noOfTeachers, noOfClassroom) {
            var SOP = attribute.units === 'feet'
                ? (attribute.length > 0 ? attribute.length : attribute.height) *
                    (attribute.breadth > 0 ? attribute.breadth : attribute.height)
                : 1;
            var NOP = multiplyBy === 'ByStudents'
                ? reach
                : multiplyBy === 'ByTeachers'
                    ? noOfTeachers
                    : multiplyBy === 'ByClassrooms'
                        ? attribute.quantity * noOfClassroom
                        : attribute.quantity;
            return SOP * NOP * attribute.noOfChanges * attribute.materialCost;
        };
        this.calculateEventsAttributeCostOfProduction = function (noOfPlacement, attribute) {
            var SOP = attribute.units === 'feet'
                ? (attribute.length > 0 ? attribute.length : attribute.height) *
                    (attribute.breadth > 0 ? attribute.breadth : attribute.height)
                : 1;
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
            var minReachSchoolData = lodash_1["default"].minBy(schoolData, function (school) { return school.reach; });
            var minReach = minReachSchoolData ? minReachSchoolData.reach : 0;
            var maxReach = lodash_1["default"].sumBy(schoolData, function (school) { return school.reach; });
            var minImpressionsSchoolData = lodash_1["default"].minBy(schoolData, function (school) { return school.impressions; });
            var minImpressions = minImpressionsSchoolData
                ? minImpressionsSchoolData.impressions
                : 0;
            var maxImpressions = lodash_1["default"].sumBy(schoolData, function (school) { return school.impressions; });
            _this.$MinBudget.next(Math.ceil(MinBudget));
            _this.$MaxBudget.next(Math.ceil(MaxBudget));
            _this.$MaxReach.next(maxReach);
            _this.$MinReach.next(minReach);
            _this.$MaxImpressions.next(Math.ceil(maxImpressions));
            _this.$MinImpressions.next(Math.ceil(minImpressions));
        };
        this.getReachWithTargetAudience = function (noOfBoys, noOfGirls) {
            return _this.$TargetAudience.getValue() == 'co-ed'
                ? noOfBoys + noOfGirls
                : _this.$TargetAudience.getValue() == 'boys'
                    ? noOfBoys
                    : noOfGirls;
        };
        this.sortSchoolsByBudget = function (schoolData, orderBy) {
            return lodash_1["default"].orderBy(schoolData, [
                function (school) { return school.events.length; },
                function (school) { return school.category; },
                function (school) { return school.totalBrandOutlay; },
            ], ['desc', 'asc', orderBy]);
        };
        this.sortSchoolsByReach = function (schoolData, orderBy) {
            return lodash_1["default"].orderBy(schoolData, [function (school) { return school.category; }, function (school) { return school.reach; }], ['desc', orderBy]);
        };
        this.sortSchoolsByInventoryAndEvents = function (schoolData, orderBy) {
            return lodash_1["default"].orderBy(schoolData, [
                function (school) { return lodash_1["default"].uniq(lodash_1["default"].map(school.events, function (event) { return event.name; })).length; },
                function (school) {
                    return lodash_1["default"].uniq(lodash_1["default"].map(school.inventories, function (inventory) { return inventory.parentName; }))
                        .length;
                },
            ], [orderBy, orderBy]);
        };
        this.sortSchoolsByReachForWisrOption = function (schoolData, orderBy) {
            return lodash_1["default"].orderBy(schoolData, [
                function (school) { return school.category; },
                function (school) { return school.reach; },
                function (school) { return school.totalBrandOutlay; },
            ], ['desc', orderBy, 'asc']);
        };
        this.sortSchoolsByImpressions = function (schoolData, orderBy) {
            return lodash_1["default"].orderBy(schoolData, [function (school) { return school.category; }, function (school) { return school.impressions; }], ['desc', orderBy]);
        };
        this.categorizationOfSchool = function (schools) {
            _this.$CatASchool.next(lodash_1["default"].filter(schools, function (school) { return school.category === 'A'; }));
            _this.$CatBSchool.next(lodash_1["default"].filter(schools, function (school) { return school.category === 'B'; }));
            _this.$CatCSchool.next(lodash_1["default"].filter(schools, function (school) { return school.category === 'C'; }));
        };
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
            var reach = lodash_1["default"].sumBy(schools, function (school) { return school.reach; });
            var impressions = lodash_1["default"].sumBy(schools, function (school) { return school.impressions; });
            _this.$GetBudget.next(Math.ceil(budget));
            _this.$GetReach.next(reach);
            _this.$GetImpression.next(Math.ceil(impressions));
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
            var reach = lodash_1["default"].sumBy(schools, function (school) { return school.reach; });
            var impressions = lodash_1["default"].sumBy(schools, function (school) { return school.impressions; });
            _this.$IncreasedBudget.next(finalBudget < grossRevenue
                ? Math.ceil(grossRevenue)
                : Math.ceil(finalBudget));
            _this.$IncreasedReach.next(reach);
            _this.$IncreasedImpressions.next(Math.ceil(impressions));
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
                var schoolsReach_2 = _this.$GetReach.getValue();
                if (schoolsReach_2 < setReach) {
                    var schoolsAddedByReach = lodash_1["default"].takeWhile(_this.sortSchoolsByInventoryAndEvents(lodash_1["default"].differenceBy(_this.$OptimizedSchool.getValue(), _this.$FilteredSchool.getValue(), function (school) { return school._id; }), 'desc'), function (school) {
                        schoolsReach_2 += school.reach;
                        return schoolsReach_2 <= setReach;
                    });
                    _this.$FilteredSchool.next(lodash_1["default"].unionBy(_this.$FilteredSchool.getValue(), lodash_1["default"].uniqBy(schoolsAddedByReach, function (school) { return school._id; }), function (school) { return school._id; }));
                }
                else {
                    var ElseSchoolsReach_1 = 0;
                    var ElseSchoolsAddedByReach = lodash_1["default"].takeWhile(_this.sortSchoolsByInventoryAndEvents(_this.$FilteredSchool.getValue(), 'desc'), function (school) {
                        ElseSchoolsReach_1 += school.reach;
                        return ElseSchoolsReach_1 <= setReach;
                    });
                    _this.$FilteredSchool.next(lodash_1["default"].uniqBy(ElseSchoolsAddedByReach, function (school) { return school._id; }));
                }
            }
        });
        this.$SetImpressions.subscribe(function (setImpressions) {
            if (setImpressions >= _this.$MinImpressions.value &&
                setImpressions <= _this.$MaxImpressions.value) {
                var schoolsImpressions_1 = _this.$GetImpression.getValue();
                if (schoolsImpressions_1 < setImpressions) {
                    var schoolsAddedByImpressions = lodash_1["default"].takeWhile(_this.sortSchoolsByInventoryAndEvents(lodash_1["default"].differenceBy(_this.$OptimizedSchool.getValue(), _this.$FilteredSchool.getValue(), function (school) { return school._id; }), 'desc'), function (school) {
                        schoolsImpressions_1 += school.impressions;
                        return schoolsImpressions_1 <= setImpressions;
                    });
                    _this.$FilteredSchool.next(lodash_1["default"].unionBy(_this.$FilteredSchool.getValue(), lodash_1["default"].uniqBy(schoolsAddedByImpressions, function (school) { return school._id; }), function (school) { return school._id; }));
                }
                else {
                    var ElseSchoolsImpressions_1 = 0;
                    var ElseSchoolsAddedByImpressions = lodash_1["default"].takeWhile(_this.sortSchoolsByInventoryAndEvents(_this.$FilteredSchool.getValue(), 'desc'), function (school) {
                        ElseSchoolsImpressions_1 += school.impressions;
                        return ElseSchoolsImpressions_1 <= setImpressions;
                    });
                    _this.$FilteredSchool.next(lodash_1["default"].uniqBy(ElseSchoolsAddedByImpressions, function (school) { return school._id; }));
                }
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
                        : school.category === 'C' && _this.CatC.push(school);
            });
        };
        this.shortSchoolData = function (schools) {
            return lodash_1["default"].orderBy(schools, [
                function (school) { return lodash_1["default"].uniq(lodash_1["default"].map(school.events, function (event) { return event.name; })).length; },
                function (school) {
                    return lodash_1["default"].uniq(lodash_1["default"].map(school.inventories, function (inventory) { return inventory.parentName; }))
                        .length;
                },
            ], ['desc', 'desc']);
        };
        this.filterSchoolData = function (schools, budget) {
            var Budget = 0;
            var schoolsByPriority = lodash_1["default"].takeWhile(schools, function (school) {
                Budget += school.totalBrandOutlay;
                return Budget <= budget;
            });
            Budget = lodash_1["default"].sumBy(schoolsByPriority, function (school) { return school.totalBrandOutlay; });
            var schoolsByReach = lodash_1["default"].takeWhile(lodash_1["default"].orderBy(lodash_1["default"].differenceBy(schools, schoolsByPriority, function (school) { return school._id; }), [function (school) { return school.reach; }], ['desc']), function (school) {
                Budget += school.totalBrandOutlay;
                return Budget <= budget;
            });
            Budget = lodash_1["default"].sum([
                lodash_1["default"].sumBy(schoolsByReach, function (school) { return school.totalBrandOutlay; }),
                lodash_1["default"].sumBy(schoolsByPriority, function (school) { return school.totalBrandOutlay; }),
            ]);
            var schoolsByBudget = lodash_1["default"].takeWhile(lodash_1["default"].orderBy(lodash_1["default"].differenceBy(schools, __spreadArray(__spreadArray([], schoolsByPriority, true), schoolsByReach, true), function (school) { return school._id; }), [function (school) { return school.totalBrandOutlay; }], ['asc']), function (school) {
                Budget += school.totalBrandOutlay;
                return Budget <= budget;
            });
            return lodash_1["default"].concat(schoolsByPriority, schoolsByReach, schoolsByBudget);
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
        if (CatA >= budgetA) {
            this.CatA = this.filterSchoolData(schoolA, budgetA);
            finalBudgetA = lodash_1["default"].sumBy(this.CatA, function (school) { return school.totalBrandOutlay; });
            this.ExtraBudget = CatA - finalBudgetA;
        }
        else {
            this.CatA = this.filterSchoolData(schoolA, CatA);
            finalBudgetA = lodash_1["default"].sumBy(this.CatA, function (school) { return school.totalBrandOutlay; });
        }
        if (CatB + this.ExtraBudget >= budgetB) {
            this.CatB = this.filterSchoolData(schoolB, budgetB);
            finalBudgetB = lodash_1["default"].sumBy(this.CatB, function (school) { return school.totalBrandOutlay; });
            this.ExtraBudget = CatB + this.ExtraBudget - finalBudgetB;
        }
        else {
            this.CatB = this.filterSchoolData(schoolB, CatB + this.ExtraBudget);
            finalBudgetB = lodash_1["default"].sumBy(this.CatB, function (school) { return school.totalBrandOutlay; });
            this.ExtraBudget = CatB + this.ExtraBudget - finalBudgetB;
        }
        if (CatC + this.ExtraBudget >= budgetC) {
            this.CatC = this.filterSchoolData(schoolC, budgetC);
            finalBudgetC = lodash_1["default"].sumBy(this.CatC, function (school) { return school.totalBrandOutlay; });
            this.ExtraBudget = CatC + this.ExtraBudget - finalBudgetC;
        }
        else {
            this.CatC = this.filterSchoolData(schoolC, CatC + this.ExtraBudget);
            finalBudgetC = lodash_1["default"].sumBy(this.CatC, function (school) { return school.totalBrandOutlay; });
            this.ExtraBudget = CatC + this.ExtraBudget - finalBudgetC;
        }
    }
    return OrganizeSchool;
}());
