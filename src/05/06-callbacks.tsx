import React, {MouseEvent,ChangeEvent} from "react";

// const callback = () => {
//     alert('hey guys')
// };
//отдаем колбек callback функции setTimeout которая через секунду вызовет его
// window.setTimeout(callback, 1000);


//самый практичный случай это обраотка событий UI
//создадим компоненту User
export const User = () => {

// создадим логику удаления User
// эта функция не сработает пока мы ее не вызовем - вызывать ее будем в кнопке при клике
// и после она станет функцией колбеком т.к ее вызовет кнопка
const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
    alert(event.currentTarget.name)
    alert('User should be deleted')

}

// const saveUser = () => {
//     alert('User have been saved')
// }

const onNameChanged = () => {
    console.log("name changed")
}

const focusLostHandler = () => {
    console.log(" focus lost")
}

const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
    //что бы узнать на что изменился возвраст нужно протипизировать объект - event и ему добавить  ChangeEvent<HTMLInputElement>
    //что бы достучаться до элемента используем event.currentTarget это тот элемент с которым произошло событие и на который мы подписались и далее берем у input значение value . то значение которое новое, на которое изменилось значение почему наш обработчик и был вызван - потому что произошло событие onChange
    //age changed: 1 увидим в консоли и тд
    console.log(" age changed: " + event.currentTarget.value)
}

    return (

        <div>Artur
            {/*когда будет клик вызови нашу функцию deleteUser*/}
            <button name="delete" onClick={deleteUser}>delete</button>
            <button name="save" onClick={deleteUser} >save</button>

            {/*вместо кнопок можно использовать и дивки и так же вешать на них onClick*/}
            {/*<div onClick={saveUser} >save</div>*/}
            {/*<div onClick={saveUser} >save</div>*/}

        {/*    события бывают разные :*/}
        {/*    при каждом вызове события onChange будет выведено "name changed"*/}
            <div><textarea onChange={onNameChanged}>Artur</textarea></div>
            <div><textarea onBlur={focusLostHandler}>Valera</textarea></div>

            <input type={"number"} onChange={onAgeChanged}/>
        </div>
    )
}