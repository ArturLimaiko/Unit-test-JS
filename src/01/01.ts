

export function sum (a:number, b:number) {
    return a + b
}

export function mult (a:number, b:number) {
    return a * b
}

export function splitIntoWords (sentense:string) {
    const words =  sentense.toLowerCase()

    return words.split(" ") // по пробелу разбей на массив слов
                .filter(w => w !== "" && w !== "-")//нужны слова которые если не равны пустой строке то проходи дальше в map
                .map(w => w  //пробегаемся по каждому слову методом map и говорим замени ! . , на "" пустую строку
                    .replace("!", "")
                    .replace(".", "")
                    .replace(",", ""));
}