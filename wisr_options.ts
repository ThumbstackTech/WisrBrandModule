export {}
import SchoolData from './school.json'
type OptionName =
    | 'Locations'
    | 'Medium';


export interface FilteredLocation{
    State : String,
    City: String,
}
export interface FilteredMedium{
    language: String
}
export default class SchoolFilter {
    public getSelectedOptions = (OptionName : OptionName,
        FilteredLocation : FilteredLocation,
        FilteredMedium : FilteredMedium) =>{
        if(OptionName === 'Locations'){
            return this.filterLocation(FilteredLocation)
        }
        if(OptionName === 'Medium'){
            return this.filterMedium(FilteredMedium)
        }
    }
    private filterLocation = (location : FilteredLocation) =>{
        const {State,City} = location;
        let filteredSchool = [];
        if(State.length !==0 && City.length !==0){
            for(let i=0; i<SchoolData.length;i++){
                    if(SchoolData[i].state === State && SchoolData[i].city === City){
                        filteredSchool.push(SchoolData[i])
                    }
            }
        }
        
        return filteredSchool

    }
    private filterMedium = (medium : FilteredMedium) =>{
        const {language} = medium;
        let filteredSchool = [];
        for(let i=0; i<SchoolData.length;i++){
            if(SchoolData[i].language === language){
                filteredSchool.push(SchoolData[i])
            }
        }
    }
}



let filterSchools = new SchoolFilter()

console.log(filterSchools.getSelectedOptions('Locations',{City: 'thane',State: 'Maharashtra'},{language: 'English'}))