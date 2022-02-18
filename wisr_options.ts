export {}
import SchoolData from './data/school'
import InventoryData from './data/inventories'
import ClassroomData from './data/classrooms'
import BrandData from './data/brand'
import BrandSubCategoryData from './data/brandCategoryMaster'
import InventoryAttributesData from './data/inventoryAttributes'
import ActivitiesAttributesData from './data/activitiesAttribute'
import ActivitiesData from './data/activities'
import CampaignData from './data/campaign'


import {Activities} from './Interfaces/activities'
import {School} from './Interfaces/School'
import {Classroom} from './Interfaces/classroom'
import {Inventory} from './Interfaces/inventory'
import {Brand} from './Interfaces/brand'
import {BrandsSubCategory} from './Interfaces/brandsSubCategory'
import {InventoryAttributes} from './Interfaces/InventoryAttribute'
import { ActivitiesAttributes } from './Interfaces/activitiesAttributes'
import {Campaign} from './Interfaces/campaign'

type OptionName =
    | 'Locations'
    | 'Medium'
    | 'Inventory';

export interface FilteredLocation{
    State : string,
    City: string,
}
export interface FilteredMedium{
    language: string
}
export interface FilteredInventory{
    inventoryName: string
}
export interface AllSchoolCampaignData{
    // BrandList?: Brand[];
    // BrandsSubCategory? : BrandsSubCategory[];
    // SchoolList?: School[];
    // ClassroomList?: Classroom[];
    // Inventories?: Inventory[];
    // InventoryAttributes?: InventoryAttributes[];
    // Activities?: Activities[];
    // ActivitiesAttributes?: ActivitiesAttributes[];
    Campaign?: Campaign[];
}
export default class SchoolFilter {
    private AllSchoolCampaignData : AllSchoolCampaignData;
    public data(): AllSchoolCampaignData{
      return this.AllSchoolCampaignData;
    }
    constructor(AllSchoolCampaignData: AllSchoolCampaignData){
        this.AllSchoolCampaignData = AllSchoolCampaignData;
        const {
            // BrandList,
            // BrandsSubCategory,
            // SchoolList,
            // ClassroomList,
            // Inventories,
            // InventoryAttributes,
            // Activities,
            // ActivitiesAttributes,
            Campaign
        } = this.AllSchoolCampaignData;

    };
    
    public getSelectedOptions = (OptionName : OptionName,
        FilteredLocation? : FilteredLocation,
        FilteredMedium? : FilteredMedium,
        FilteredInventory? : FilteredInventory) =>{
        if(OptionName === 'Locations'){
            return this.filterLocation(FilteredLocation!)
        }
        if(OptionName === 'Medium'){
            return this.filterMedium(FilteredMedium!)
        }
        if(OptionName === 'Inventory'){
            return this.filterInventory(FilteredInventory!)
        }
    }
    public filterLocation = (location : FilteredLocation) =>{
        const {State,City} = location;
        let {Campaign} = this.AllSchoolCampaignData;
        let allLocations = [Campaign?.forEach(campaign =>{
            campaign.locations
        }),City]
        let filteredSchool = [];
        if(State.length !==0 && City.length !==0){
            for(let i=0; i<SchoolData.length;i++){
                    if(SchoolData[i].state === State || allLocations.indexOf(SchoolData[i].city) > -1){
                        filteredSchool.push(SchoolData[i])
                    }
            }
        }
        return filteredSchool
    }
    public filterMedium = (medium : FilteredMedium) =>{
        const {language} = medium;
        
        let filteredSchool = [];
        for(let i=0; i<SchoolData.length;i++){
            if(SchoolData[i].language === language){
                filteredSchool.push(SchoolData[i])
            }
        }
        return filteredSchool
    }
    public filterInventory = (inventoryname : FilteredInventory) =>{
        const {inventoryName} = inventoryname;
        let filteredSchool = [];
        for(let i=0; i<InventoryData.length; i++){
            if(InventoryData[i].name === inventoryName){
                for(let j=0; j<SchoolData.length;j++){
                    if(SchoolData[j]._id.$oid === InventoryData[i].school.$oid){
                        filteredSchool.push(SchoolData[j])
                    }
                }
                
            }
        }
        return filteredSchool
    }
}

// let filteredSchools = new SchoolFilter(
// BrandList: BrandData,
// SchoolList: SchoolData,
// Classroom: ClassroomData,
// Inventories: InventoryData,
// InventoryAttributes: InventoryAttributesData,
// Activities: ActivitiesData,
// ActivitiesAttributes: ActivitiesAttributesData
// )
let filteredSchools = new SchoolFilter({Campaign: CampaignData[0]})
// console.log(filteredSchools.getSelectedOptions('Locations',{City: 'thane',State: 'Maharashtra'},{language: ''}))

console.log(filteredSchools.getSelectedOptions('Medium',{City: '',State: ''},{language: 'Hindi'}))

// console.log(filteredSchools.getSelectedOptions('Inventory',{City: '',State: ''},{language: ''},{inventoryName: 'Uniform'}))

// console.log(filteredSchools.filterInventory({inventoryName: 'Auditorium 1'}))

// console.log(filteredSchools.filterLocation({City: 'thane', State: 'Maharashtra'}))

// console.log(filteredSchools.filterMedium({language: 'English'}))

