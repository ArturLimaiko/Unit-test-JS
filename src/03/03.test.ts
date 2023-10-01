import {StydentType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student : StydentType
beforeEach(() => {
    student = {
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
})

//01. Создайте тип CityType
//02. Заполните объект city , что бы тесты ниже прошли

test("test skill should be added to student", () => {
   // вначале мы знаем что технологий у студента 3
   expect(student.technologies.length).toBe(3)

    //вызываем функцию addSkill  с переданным в параметры объектом student и добавялем студенту скилл
    addSkill (student, "JS");

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("JS")
    expect(student.technologies[3].id).toBeDefined()

})


test("student should be made active", () => {
   // вначале мы знаем что технологий у студента 3
   expect(student.isActive).toBe(false)

    //вызываем функцию addSkill  с переданным в параметры объектом student и добавялем студенту скилл
    makeStudentActive (student);

    expect(student.isActive).toBe(true)
})

//проверяем живет ли студент в городе Yaroslavl
test("student lives in city?", () => {
   // вначале мы знаем что технологий у студента 3
   expect(student.isActive).toBe(false)

    //вызываем функцию doesStudentLiveIn  с переданным в параметры объектом student и добавялем студенту город для проверки
   let result1 = doesStudentLiveIn(student, "Moscow")
   let result2 = doesStudentLiveIn(student, "Yaroslavl")

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})

