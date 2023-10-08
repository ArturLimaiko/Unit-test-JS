export type ManType = {
    name: string;
    age: number;
};

const people: Array<ManType> = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexander Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18},
];


//создаем функцию которая получает на входе отдельного человека man: ManType
// а после возвращает другой объект . разделяя при этом имя и фамилию с помощью метода split
const dimychTransformator = (man: ManType) => (
    {
        stack: ['css, htnl', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1],
    }
)


const devs = [
    {
        stack: ['css, htnl', 'js', 'tdd', 'react'],
        firstName: 'Andrew',
        lastName: 'Ivanov',
    },
    {
        stack: ['css, htnl', 'js', 'tdd', 'react'],
        firstName: 'Alexander',
        lastName: 'Petrov',
    },
    {
        stack: ['css, htnl', 'js', 'tdd', 'react'],
        firstName: 'Dmitry',
        lastName: 'Sidorov',
    },
];

const dev2 = [

    // вызываем функцию dimychTransformator и засовываем туда каждого отдельного человека.
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2]),
];


//САМЫЙ ВЕРНЫЙ СПОСОБ ЭТО ЧЕРЕЗ МЕТОД .map () - он выкидывает новый массив
// в котором будут сидеть элементы полученные на основе каждого элемента внутри переменной people
// .map () пробегает по каждому элементу people
// и вызывает функцию dimychTransformator которую мы передаем в .map() и map возвратит новый элемент в новом массиве devs3
const devs3 = people.map(dimychTransformator)


//здесь напрямую закидываем people в переменную devs4 и с помощью метода .map () пробегаемся по массиву
const devs4 = people.map(man => ({
    stack: ['css, htnl', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1],
}))


// сделаем 3 приветственных сообщения.
// для каждого people с помощью метода .map() преобразуем один объект в другой объект или строку или другой тип данных
// из 3х people получим 3 сообщения
// man.name.split(" ")[0] подставляем значение из массива и разделяем по пробелу 1 слово из 1 массива
// в messages тип данных каждого элемента  в массиве  это - строка.
//по скольку функция преобразователь man => возвращает строку на основе данных из people
const messages = people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-INCUBATOR`)


//создадим функцию которая будет создавать greeting сообщение
//передаем массив людей а мы на основе массива людей пробежимся .map и return то что возвращает map
// и экспортируем эту функцию в test
export const createGreetingMessage = (people: Array<ManType>) => {
    return people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-INCUBATOR`)
}