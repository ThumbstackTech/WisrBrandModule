"use strict";
exports.__esModule = true;
var school_1 = require("./data/school");
var inventories_1 = require("./data/inventories");
var SchoolFilter = /** @class */ (function () {
    function SchoolFilter(AllSchoolCampaignData) {
        var _this = this;
        this.getSelectedOptions = function (OptionName, FilteredLocation, FilteredMedium, FilteredInventory) {
            if (OptionName === 'Locations') {
                return _this.filterLocation(FilteredLocation);
            }
            if (OptionName === 'Medium') {
                return _this.filterMedium(FilteredMedium);
            }
            if (OptionName === 'Inventory') {
                return _this.filterInventory(FilteredInventory);
            }
        };
        this.filterLocation = function (location) {
            var State = location.State, City = location.City;
            var filteredSchool = [];
            if (State.length !== 0 && City.length !== 0) {
                for (var i = 0; i < school_1["default"].length; i++) {
                    if (school_1["default"][i].state === State && school_1["default"][i].city === City) {
                        filteredSchool.push(school_1["default"][i]);
                    }
                }
            }
            return filteredSchool;
        };
        this.filterMedium = function (medium) {
            var language = medium.language;
            var filteredSchool = [];
            for (var i = 0; i < school_1["default"].length; i++) {
                if (school_1["default"][i].language === language) {
                    filteredSchool.push(school_1["default"][i]);
                }
            }
            return filteredSchool;
        };
        this.filterInventory = function (inventoryname) {
            var inventoryName = inventoryname.inventoryName;
            var filteredSchool = [];
            for (var i = 0; i < inventories_1["default"].length; i++) {
                if (inventories_1["default"][i].name === inventoryName) {
                    for (var j = 0; j < school_1["default"].length; j++) {
                        if (school_1["default"][j]._id.$oid === inventories_1["default"][i].school.$oid) {
                            filteredSchool.push(school_1["default"][j]);
                        }
                    }
                }
            }
            return filteredSchool;
        };
        this.AllSchoolCampaignData = AllSchoolCampaignData;
        var _a = this.AllSchoolCampaignData, BrandList = _a.BrandList, BrandsSubCategory = _a.BrandsSubCategory, SchoolList = _a.SchoolList, ClassroomList = _a.ClassroomList, Inventories = _a.Inventories, InventoryAttributes = _a.InventoryAttributes, Activities = _a.Activities, ActivitiesAttributes = _a.ActivitiesAttributes, CampaignList = _a.CampaignList;
    }
    SchoolFilter.prototype.data = function () {
        return this.AllSchoolCampaignData;
    };
    ;
    return SchoolFilter;
}());
exports["default"] = SchoolFilter;
// let filterSchools = new SchoolFilter(
// BrandList: BrandData,
// SchoolList: SchoolData,
// Classroom: ClassroomData,
// Inventories: InventoryData,
// InventoryAttributes: InventoryAttributesData,
// Activities: ActivitiesData,
// ActivitiesAttributes: ActivitiesAttributesData
// )
var filteredSchools = new SchoolFilter({});
console.log(filteredSchools.getSelectedOptions('Locations', { City: 'thane', State: 'Maharashtra' }, { language: '' }));
// console.log(filterSchools.getSelectedOptions('Medium',{City: '',State: ''},{language: 'Hindi'}))
// console.log(filterSchools.getSelectedOptions('Inventory',{City: '',State: ''},{language: ''},{inventoryName: 'Uniform'}))
// console.log(filterSchools.filterInventory({inventoryName: 'Auditorium 1'}))
// console.log(filterSchools.filterLocation({City: 'thane', State: 'Maharashtra'}))
// console.log(filterSchools.filterMedium({language: 'English'}))
