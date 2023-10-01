import {StydentType} from "../02/02";
import {GovernmentBuildingType} from "../02/02_02";
import {HouseType} from "../02/02_02";

export const sum  = (a:number,b: number) => {
    return a + b;
}

export function sum2  (a:number,b: number) {
    return a + b;
}

const res = sum(2,3) //5

const res2 = sum(2,4) //6

const res3 = sum(sum(1,2), sum(3,4)) //10


export const addSkill = ( student: StydentType, skill: string)  => { //в параметрах не обязательно называть student можем назвать st или еще как то
    student.technologies.push({   //добавим через пуш новый объект с случайным id
        id: new Date().getDate(), //новый объект с случайным id
        title: skill              // в  title
    })
}

export function addSkill2 ( student: StydentType, skill: string) { //в параметрах не обязательно называть student можем назвать st или еще как то
    student.technologies.push({   //добавим через пуш новый объект с случайным id
        id: new Date().getDate(), //новый объект с случайным id
        title: skill              // в  title
    })
}


export function makeStudentActive(s: StydentType) {
    s.isActive = true;
}

// чистая функция обязана что то вернуть
export const doesStudentLiveIn = (s: StydentType, cityName:string) => {
    return s.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget
}

export const repairHouse = (repair: HouseType) => {
    repair.repaired = true
}

export const toFireStaff = (building: GovernmentBuildingType, staffFire: number) => {
    building.staffCount -= staffFire
}

export const toHireStaff = (building: GovernmentBuildingType, staffFire: number) => {
    building.staffCount += staffFire
}