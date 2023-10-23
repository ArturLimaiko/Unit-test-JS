import {GovernmentBuildingType, HouseType} from "../02/02_02";

// Задача нашей функции - получает на входе массив с объектами и
// вернуть массив строк
export const getStreetTitlesOfGovernmentsBuildings =
    (building: Array<GovernmentBuildingType>) => {
        //берем исходный массив и проходимся методом .map по нему
        // мы хотим получить новый массив в котором будет столько же элементов
        // сколько и в исходном но из каждого building мы достаем только address.street.title - заголовок!
        return building.map(building => building.address.street.title)
    }

// Задача нашей функции - получает на входе массив с объектами и
// вернуть массив строк
export const getStreetTitlesOfHouses =
    (houses: Array<HouseType>) => {
        return houses.map(house => house.address.street.title)
    }


// Задача нашей функции - получает на входе массив с объектами и
// вернуть массив строк
export const createMessages = (houses: Array<HouseType>) => {
    //и возвращаем строку
        return houses.map(house => `Hello guys from ${house.address.street.title}`)
    }


