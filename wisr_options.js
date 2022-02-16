"use strict";
exports.__esModule = true;
var school_json_1 = require("./school.json");
var SchoolFilter = /** @class */ (function () {
    function SchoolFilter() {
        var _this = this;
        this.getSelectedOptions = function (OptionName, FilteredLocation, FilteredMedium) {
            if (OptionName === 'Locations') {
                return _this.filterLocation(FilteredLocation);
            }
            if (OptionName === 'Medium') {
                return _this.filterMedium(FilteredMedium);
            }
        };
        this.filterLocation = function (location) {
            var State = location.State, City = location.City;
            var filteredSchool = [];
            if (State.length !== 0 && City.length !== 0) {
                for (var i = 0; i < school_json_1["default"].length; i++) {
                    if (school_json_1["default"][i].state === State && school_json_1["default"][i].city === City) {
                        filteredSchool.push(school_json_1["default"][i]);
                    }
                }
            }
            return filteredSchool;
        };
        this.filterMedium = function (medium) {
        };
    }
    return SchoolFilter;
}());
exports["default"] = SchoolFilter;
var filterSchools = new SchoolFilter();
console.log(filterSchools.getSelectedOptions('Locations', { City: 'thane', State: 'Maharashtra' }, { language: 'English' }));
