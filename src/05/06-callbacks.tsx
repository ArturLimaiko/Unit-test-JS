import React from "react";

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
const deleteUser = () => {
    alert('User should be deleted')
}

const saveUser = () => {
    alert('User have been saved')
}

    return (
        <div>Artur
            {/*когда будет клик вызови нашу функцию deleteUser*/}
            <button onClick={deleteUser}>delete</button>
            <button onClick={saveUser} >save</button>
        </div>
    )
}