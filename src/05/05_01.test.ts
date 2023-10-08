import {createGreetingMessage, ManType} from "./05_01";
import exp from "constants";

let people: Array<ManType> = []


beforeEach(() => {
    people = [
        { name: 'Andrew Ivanov', age: 33 },
        { name: 'Alexander Petrov', age: 24 },
        { name: 'Dmitry Sidorov', age: 18 },
    ];
})

test("should get array of greeting messages", () => {

        //функция вызывается столько раз сколько у нас людей в массиве people
    //достаем name у people // далее разделяем на часть методом split (" ") и получили строку результирующую
    // const messages = people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-INCUBATOR`)

    //более упрощенный вариант вызываем функциюю
    const messages = createGreetingMessage(people)


    //
    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello Andrew. Welcome to IT-INCUBATOR");
    expect(messages[1]).toBe("Hello Alexander. Welcome to IT-INCUBATOR");
    expect(messages[2]).toBe("Hello Dmitry. Welcome to IT-INCUBATOR");

})

