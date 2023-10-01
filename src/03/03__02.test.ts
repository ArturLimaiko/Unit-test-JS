import {cityType} from "../02/02_02";
import {addMoneyToBudget, repairHouse, toFireStaff, toHireStaff} from "./03";
let city: cityType;



beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012, repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White Street"
                    }
                }
            },
            {
                buildedAt: 2008, repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy Street"
                    }
                }
            },
            {
                buildedAt: 2020, repaired: false,
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
test("Budget chould be changed for HOSPITAL" , () => {
    addMoneyToBudget(city.governmentBuilding[0],  100000)

    expect(city.governmentBuilding[0].budget).toBe(300000)
})

// 01.Создайте в отдельном файле функцию что бы тесты прошли
test("Budget chould be changed for FIRE-STATION" , () => {
    addMoneyToBudget(city.governmentBuilding[1],  -100000)

    expect(city.governmentBuilding[1].budget).toBe(400000)
})

test("House should be repaired" , () => {
    repairHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy()
})

//проверяем увольнение персонала
test("Staff should be increased" , () => {
    toFireStaff(city.governmentBuilding[0] , 20);

    expect(city.governmentBuilding[0].staffCount).toBe(180)
})

test("Staff should be increased" , () => {
    toHireStaff(city.governmentBuilding[1] , 20);

    expect(city.governmentBuilding[1].staffCount).toBe(1020)
})
