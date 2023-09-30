import {cityType} from "./02_02";

type LocalcityType = {
    title: string
    countryTitle: string
}

type addressType = {
    streetTitle: string
    city: LocalcityType
}

type TechType = {
    id: number
    title: string
}

type StydentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: addressType
    technologies: Array<TechType>
}

const student:StydentType = {     //присваиваем переменной student какой то создаваемый объект
    id: 1,
    name: "Artur",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Slepneva 15",
        city: {
            title: "Yaroslavl",
            countryTitle: "Russia",
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 3,
            title: "CSS"
        },
        {
            id: 2,
            title: "React"
        },
    ]

}

console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.technologies[2].title)