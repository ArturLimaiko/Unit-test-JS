import React from 'react';
import './App.css';

function App() {


    const names = ["Artur", "Valera", "katya", "Tanya", "Gena"]
    // const users = [ {name :"Artur"}, {name: "Valera"},{name: "katya"}, {name: "Tanya"}, {name: "Gena"}]

    //С id
    const users3 = [
        {id: 1, name: "Artur"},
        {id: 2, name: "Valera"},
        {id: 3, name: "katya"},
        {id: 4, name: "Tanya"},
        {id: 5, name: "Gena"}
    ]


    //каждый элемент внутри li содержит name
    const liElements = names.map(name => <li>{name}</li>)

    // каждый элемент внутри li содержит user. name ( юзер у которого есть имя)
    // а так же index- порядковый номер элемента в массиве
    // если мапимся то каждой лишке должны давать key
    // const liElements2 = users.map( (user, index) => <li>{index} - {user.name}</li>)

    //НО ЧАЩЕ ВСЕГО БУДЕМ ИСПОЛЬЗОВАТЬ ВОТ ТАК
    //так же чаще всего есть id у любого элемента . и в качестве index мы будем использовать ее
    const liElements2 = users3.map(u =>
        <div key={u.id}>
            <li> -- {u.name} --</li>
        </div>)


    return (
        <div className="App">
            <ul>
                {liElements2}
            </ul>
        </div>
    );
}

export default App;
