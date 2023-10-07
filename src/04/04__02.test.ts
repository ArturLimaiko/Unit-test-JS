import {cityType} from "../02/02_02";
import {demolishHousesOnTheStreet,getBuildingsWithStaffCountGreaterThen} from "./04_2";

let city: cityType;


beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {

                id: 1, buildedAt: 2012, repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White Street"
                    }
                }
            },
            {
                id: 2, buildedAt: 2008, repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy Street"
                    }
                }
            },
            {
                id: 3, buildedAt: 2020, repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: "Happy Street"
                    }
                }
            },
        ],
        governmentBuilding: [
            {
                type: "HOSPITAL", budget: 200000, staffCount: 200,
                address: {
                    street: {
                        title: "Central Str",
                    }
                }
            },
            {
                type: "FIRE-STATION", budget: 500000, staffCount: 1000,
                address: {
                    street: {
                        title: "South Str",
                    }
                }
            },
        ],
        citizenNumber: 100000,
    }
})



// 01.Создайте в отдельном файле функцию что бы тесты прошли
// Дополните  тип HouseType (добавьте порядковый id от 1 и по возврастанию)

test("Houses should be destroyed" , () => {
    //тут мы говорим функции - снеси дома на "Happy street"
   demolishHousesOnTheStreet(city, "Happy Street");

   expect(city.houses.length).toBe(1)
   expect(city.houses[0].id).toBe(1)
})


//дай мне здания с корректным чистом сотрудников
test("buildings with correct staff count" , () => {
    // получить buildings где людей работает больше чем 500
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuilding, 500)

    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe("FIRE-STATION")
})

