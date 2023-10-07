import {cityType, GovernmentBuildingType} from "../02/02_02";


export function demolishHousesOnTheStreet(city: cityType, street: string) {
    //фильтруем - что бы выражение вернуло true дом не должен быть равен этой street
 city.houses = city.houses.filter(house => house.address.street.title !== street)
}

export function getBuildingsWithStaffCountGreaterThen(buildings: Array<GovernmentBuildingType>, staffCount: number) {
    //
    return buildings.filter(building => building.staffCount > staffCount)
}