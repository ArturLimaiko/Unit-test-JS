import {cityType} from "../02/02_02";
import {createMessages, getStreetTitlesOfGovernmentsBuildings, getStreetTitlesOfHouses} from "./05_02";

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
// список заголовков улиц государственных зданий

test("list of streets titles of governments buildings" , () => {
    // вызываем функцию которая говорит дай мне названия улиц  зданий
 let streetsNames = getStreetTitlesOfGovernmentsBuildings (
     //внутрь передаем  массив объектов governmentBuilding
     //а нам должен вернуться массив строк
     city.governmentBuilding);


        //длина имен улиц 2
     expect(streetsNames.length).toBe(2);
     expect(streetsNames[0]).toBe("Central Str");
     expect(streetsNames[1]).toBe("South Str");
})




// 01.Создайте в отдельном файле функцию что бы тесты прошли
// список заголовков улиц государственных зданий
test("list of streets titles" , () => {
    // вызываем функцию которая говорит дай мне названия домов
 let streets = getStreetTitlesOfHouses (
     //внутрь передаем  массив домов
     //а нам должен вернуться массив строк
     city.houses);


        //длина имен улиц 2
     expect(streets.length).toBe(3);
     expect(streets[0]).toBe("White Street");
     expect(streets[1]).toBe("Happy Street");
     expect(streets[2]).toBe("Happy Street");
})



// 01.Создайте в отдельном файле функцию что бы тесты прошли
// создать приветственное сообщение для каждой из улиц
test("create greeting messages for streets" , () => {
    //вызываем функцию createMessages и передаем в нее (city.houses)
    //она возвращает messages
    let messages = createMessages(city.houses)


    //длина = 3
     expect(messages.length).toBe(3);
     expect(messages[0]).toBe("Hello guys from White Street");
     expect(messages[1]).toBe("Hello guys from Happy Street");
     expect(messages[2]).toBe("Hello guys from Happy Street");
})
