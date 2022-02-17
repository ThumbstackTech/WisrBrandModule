"use strict";
exports.__esModule = true;
var school_1 = require("./data/school");
var inventories_1 = require("./data/inventories");
var SchoolFilter = /** @class */ (function () {
    function SchoolFilter() {
        // private BrandList : Brand;
        // private BrandsSubCategory : BrandsSubCategory;
        // private SchoolList : School;
        // private ClassroomList: Classroom;
        // private Inventories: Inventory;
        // private InventoryAtributes: InventoryAttributes;
        // private Activities: Activities;
        // private ActivitiesAttributes: ActivitiesAttributes;
        // constructor(
        //     BrandList : Brand,
        //     BrandsSubCategory : BrandsSubCategory,
        //     SchoolList: School,
        //     ClassroomList: Classroom,
        //     Inventories: Inventory,
        //     InventoryAttributes : InventoryAttributes,
        //     Activities: Activities,
        //     ActivitiesAttributes: ActivitiesAttributes
        // ){
        //     this.BrandList = BrandList;
        //     this.BrandsSubCategory = BrandsSubCategory;
        //     this.SchoolList = SchoolList;
        //     this.ClassroomList = ClassroomList;
        //     this.Inventories = Inventories;
        //     this.InventoryAtributes = InventoryAttributes;
        //     this.Activities = Activities;
        //     this.ActivitiesAttributes = ActivitiesAttributes
        // };
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
    }
    return SchoolFilter;
}());
exports["default"] = SchoolFilter;
var filterSchools = new SchoolFilter();
// console.log(filterSchools.getSelectedOptions('Locations',{City: 'thane',State: 'Maharashtra'},{language: ''}))
// console.log(filterSchools.getSelectedOptions('Medium',{City: '',State: ''},{language: 'Hindi'}))
// console.log(filterSchools.getSelectedOptions('Inventory',{City: '',State: ''},{language: ''},{inventoryName: 'Uniform'}))
console.log(filterSchools.filterInventory({ inventoryName: 'Auditorium 1' }));
// console.log(filterSchools.filterLocation({City: 'thane', State: 'Maharashtra'}))
// console.log(filterSchools.filterMedium({language: 'English'}))
