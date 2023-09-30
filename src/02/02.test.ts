import {cityType} from "./02_02";

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

// 01. Создайте тип CityType
// 02. Заполните объект city , что бы тесты ниже прошли

test("test should be contains 3 houses", () => {
    expect(city.houses.length).toBe(3)

    expect(city.houses[0].buildedAt).toBe(2012)
    expect(city.houses[0].repaired).toBe(false)
    expect(city.houses[0].address.number).toBe(100)
    expect(city.houses[0].address.street.title).toBe("White Street")

    expect(city.houses[1].buildedAt).toBe(2008)
    expect(city.houses[1].repaired).toBe(false)
    expect(city.houses[1].address.number).toBe(100)
    expect(city.houses[1].address.street.title).toBe("Happy Street")

    expect(city.houses[2].buildedAt).toBe(2020)
    expect(city.houses[2].repaired).toBe(false)
    expect(city.houses[2].address.number).toBe(101)
    expect(city.houses[2].address.street.title).toBe("Happy Street")

})



// 01.Дополните тип GovernmentBuildingType2
// 02. Заполните объект city , что бы тесты ниже прошли

test("test should be contains hospital and fire station", () => {
    expect(city.governmentBuilding.length).toBe(2)

    expect(city.governmentBuilding[0].type).toBe("HOSPITAL")
    expect(city.governmentBuilding[0].budget).toBe(200000)
    expect(city.governmentBuilding[0].staffCount).toBe(200)
    expect(city.governmentBuilding[0].address.street.title).toBe("Central Str")

    expect(city.governmentBuilding[1].type).toBe("FIRE-STATION")
    expect(city.governmentBuilding[1].budget).toBe(500000)
    expect(city.governmentBuilding[1].staffCount).toBe(1000)
    expect(city.governmentBuilding[1].address.street.title).toBe("South Str")


})
