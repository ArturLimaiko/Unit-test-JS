import React from "react";

type LessonType = {
    title: string
}

export type ManType = {
    name: string
    age: number
    lessons: Array<LessonType>
    address: { street: { title: string } }
}

type PropsType = {
    title: string
    man: ManType
    car: {model: string}
}

//деструктуризация объектов
//...props означает остаточные пропсы
export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {


    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {man.name}
            {man.age}
            {/*используем остаточные пропсы*/}
            {props.car.model}
        </div>
    </div>
}