const ages =[ 18, 29, 33, 21, 100, 11, 17]

const predicate = (age: number) => {
return  age > 90;
}

const oldAges = [100];



type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: "CSS",price: 110},
    {title: "js",price: 200},
    {title: "REACT",price: 150}
]

// функция проверки при которой если курс который стоит менее < 160 то он пропускает - если больше то отсеивает
const chipPredicate= (courses : CourseType) => {
    return courses.price < 160
}

const chipCourses = [
    {title: "CSS",price: 110},
    {title: "REACT",price: 150}
];