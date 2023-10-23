import {ManType} from "./Destructuring";

test("", () => {


    let props = {
        name: "Art",
        age: 32,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: "Nezavisimosty Street"
            }
        }
    }

// const age = props.age;
// const lessons = props.lessons;
//деструктурируем
    const {age, lessons} = props;
    const {title} = props.address.street

    expect(age).toBe(32);
    expect(lessons.length).toBe(2);
    expect(title).toBe("Nezavisimosty Street");

})




let props: ManType;
beforeEach(() => {
    props = {
        name: "Art",
        age: 32,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: "Nezavisimosty Street"
            }
        }
    }
})


test("", () => {


// const age = props.age;
// const lessons = props.lessons;
//деструктурируем
    const {age, lessons} = props;
    const {title} = props.address.street

    expect(age).toBe(32);
    expect(lessons.length).toBe(2);

    expect(title).toBe("Nezavisimosty Street");

})