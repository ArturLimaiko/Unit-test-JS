test("should take old man's older than 90", () => {
    const ages = [18, 29, 33, 21, 100, 11, 17];


    // const predicate = (age: number) => {
    //     return  age > 90;
    // }

    //упрощенный вариант
    //функция predicate принимает возвраст и возвращает значения  которые больше 90
    // const predicate = (age: number) => age > 90;


    //создаем переменную oldAges и приравниваем ей значение переменной ages
    //далее добавляем метод filter и передаем в параметры функцию которая фильтрует возвраст predicate
    // const oldAges = ages.filter(predicate)

    // упрощенный вариант
    // можно сразу функцию predicate поместить в массив ages и отфильтровать
    // пропустим только тех у кого age больше age > 90
    //НУЖНО ЗАПОМНИТЬ!!!!
    //ФУНКЦИЯ ПРЕДИКАТ - ФУНКЦИЯ "СМОТРИТЕЛЬ", КОТОРАЯ ПРИХОДИТ В  ФУНКЦИЮ FILTER!
    const oldAges = ages.filter(age => age > 90)


    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})


test("should take courses chipper 160", () => {
    const courses = [
        {title: "CSS", price: 110},
        {title: "js", price: 200},
        {title: "REACT", price: 150}
    ]


    // так же сократим и тут // не забываем что в filter передана функция !!!!!
    // фильтр - отфильтруй в новую переменную chipCourses в массиве courses только те курсы которые меньше 160 по прайсу
    const chipCourses = courses.filter(courses => courses.price < 160);


    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe("CSS");
    expect(chipCourses[1].title).toBe("REACT");

})


test("get only completed tasks", () => {
    const tasks = [
        {id: 1, title: "bread", isDone: false},
        {id: 2, title: "milk", isDone: true},
        {id: 3, title: "sold", isDone: false},
        {id: 4, title: "sugar", isDone: true},
    ]


    //
    // в функцию tasks приходит функция task и если у нее статус isDone ( возвращает true)
    // то тогда task попадает в completedTasks
    const completedTasks = tasks.filter(task => task.isDone)


    //длина completedTasks должна быть 2
    expect(completedTasks.length).toBe(2);
    //тут проверяем id у выполненых task
    expect(completedTasks[0].id).toBe(2);
    expect(completedTasks[1].id).toBe(4);
})



//получим теперь НЕ выполненые tasks
test("get only uncompleted tasks", () => {
    const tasks = [
        {id: 1, title: "bread", isDone: false},
        {id: 2, title: "milk", isDone: true},
        {id: 3, title: "sold", isDone: false},
        {id: 4, title: "sugar", isDone: true},
    ]


    // в функцию tasks приходит функция task и если у нее статус !isDone ( возвращает false)
    // то тогда task попадает в completedTasks
    const uncompletedTasks = tasks.filter(task => !task.isDone)


    //длина completedTasks должна быть 2
    expect(uncompletedTasks.length).toBe(2);
    //тут проверяем id у выполненых task
    expect(uncompletedTasks[0].id).toBe(1);
    expect(uncompletedTasks[1].id).toBe(3);
})