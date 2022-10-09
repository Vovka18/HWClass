//1. Сделать зоопарк на классах

/*
Реализовать зоопарк
У каждого животного есть своя кличка, cвоя клетка, свой возраст
В зоопарке могут быть птицы, волки, медведи, дельфины
У птиц так же есть скорость полета и дальность зрения
у волков есть статус вожак стаи или нет у волков есть надресирован он или нет
у медведей есть старана обитания и статус в спячке он или нет
у дельфинов скорость плавания и дальность слуха
Максимально может быть 5 клеток

реализовать меню
1 - добавить животное
//
> Вид
> Имя
> Возраст
> Способность
2 - удалить животное
> Вид
> Имя
3 - посмотреть всех животных по определенному типу
> Вид
4 - посмотреть вообще всех животных
5 - показать 3 самых старых животных в зоопарке

6 - показать сколько клеток еще свободно
7 - показать информацию об конкретном животном по имени
> Имя
>> Медведь Сергей Место обитания  Сейчас находится в спячке
8 - выйти

ООП + Инкапсуляция Наследование и Полиморфизм
*/



/*
class Zoopark{
    #case = []
    addAnimal(animal){this.#case.push(animal)}
    removeAnimal(name, kind){
        this.#case.forEach((animal, idx)=>{
            if(animal.name == name && animal.kind == kind){ this.#case.splice(idx, 1) }
        })}
    translateKind(kind){
        if(kind == 1) return `Птица`
        if(kind == 2) return `Волк`
        if(kind == 3) return `Медведь`
        if(kind == 4) return `Дельфин`
    }
    translateAbility(kind, ability){
        if(kind == 1){
            return `Максимальная скорость полета: ${ability[0]} км/ч, дальность зрения: ${ability[1]}`
        }
        if(kind == 2){
            let status = 'Статус: '
            let training = '';
            if(ability[0] == 1) status += 'Вожак' 
            else if(ability[0] == 2) status += 'Не вожак'
            
            if(ability[1] == 1) training += 'Надресирован' 
            else if(ability[1] == 2) training += 'Не дресирован' 
            else {return `Ошибка`}
            return `${status}, ${training}`
        }
        if(kind == 3){
            let info = `Обитает в: ${ability[0]}, Сейчас `
            if(ability[1] == 1) info += `в спячке` 
            else if(ability[1] == 2) info += `не в спячке` 
            return info
        }
        if(kind == 4){
            return `максимальная скорость ${ability[0]}, а услышать своих сверстников он может на расстоянии ${ability[1]} метров`
        }
    }
    showSpecialKind(kind){
        let result = ``
        this.#case.forEach(animal=>{
            if(animal.kind == kind){
                result += `${this.translateKind(kind)} - ${animal.name}, ${animal.age} лет, ${this.translateAbility(kind, animal.ability)} \n`
            }
        })
        return result
    }
    showAllAnimal(){
        let result = ``
        this.#case.forEach(animal=>{
                result += `${this.translateKind(animal.kind)} - ${animal.name}, ${animal.age} лет, ${this.translateAbility(animal.kind, animal.ability)}\n\n`
        })
        return result
    }
    showTreeOld(){
        let result = ``
        this.#case.sort((a1, a2)=>a2.age - a1.age)
        result+=`${this.translateKind(this.#case[0].kind)}: ${this.#case[0].name} - ${this.#case[0].age}\n`
        result+=`${this.translateKind(this.#case[1].kind)}: ${this.#case[1].name} - ${this.#case[1].age}\n`
        result+=`${this.translateKind(this.#case[2].kind)}: ${this.#case[2].name} - ${this.#case[2].age}\n`
        return result
    }
    infoAnimal(name){
        let searchAnimal = this.#case.find(animal=>animal.name == name)
        return  `${this.translateKind(searchAnimal.kind)} - ${searchAnimal.name}, ${searchAnimal.age} лет, ${this.translateAbility(searchAnimal.kind, searchAnimal.ability)}`
    }
    get caseLength(){return this.#case.length}
}

class Animal{
    #name
    #age
    #kind
    constructor(name, age, kind){
        this.#name = name
        this.#age = age
        this.#kind = kind
    }
    get name(){return this.#name}
    get age(){return this.#age}
    get kind(){return this.#kind}
}

class Bird extends Animal{
    #ability
    constructor(name, age, kind, ability){
        super(name, age, kind, ability)
        this.#ability = ability
    }
    get ability(){return this.#ability}
}
class Wolf extends Animal{
    #ability
    constructor(name, age, kind, ability){
        super(name, age, kind)
        this.#ability = ability
    }
    get ability(){return this.#ability}
}
class Bear extends Animal{
    #ability
    constructor(name, age, kind, ability){
        super(name, age, kind)
        this.#ability = ability
    }
    get ability(){return this.#ability}
}
class Dolphin extends Animal{
    #ability
    constructor(name, age, kind, ability){
        super(name, age, kind)
        this.#ability = ability
    }
    get ability(){return this.#ability}
}





let zoopark = new Zoopark()

//test
// zoopark.addAnimal(new Bird('Bird', 3, 1, [30, 1000]))
// zoopark.addAnimal(new Wolf('Wolf', 5, 2, [1, 2]))
// zoopark.addAnimal(new Dolphin('Dolphin', 6, 4, [50, 1000]))
// zoopark.addAnimal(new Bear('Bear', 4, 3, ['Флориде', 2]))


let menu


do{
    menu = +prompt('Зоопарк\n 1 - добавить животное\n 2 - удалить животное\n 3 - посмотреть всех животных по определенному типу\n 4 - посмотреть вообще всех животных\n 5 - показать 3 самых старых животных в зоопарке\n 6 - показать сколько клеток еще свободно\n 7 - показать информацию об конкретном животном по имени\n 8 - выйти\n')
    switch(menu){
        case 1:{    //add Animal
            if(zoopark.caseLength >= 5) break
            let name = prompt('Кличка')
            let age = +prompt('Возраст')
            let kind = prompt('Вид\n 1 - Птица\n 2 - Волк\n 3 - Медведь\n 4 - Дельфин')
            if(kind == 1) {
                let ability1 = +prompt('Введите максимальную скорость полета км/ч')
                let ability2 = +prompt('Введите дальность зрения в m')
                let ability = [ability1, ability2]
                zoopark.addAnimal(new Bird(name, age, kind, ability))
            }
            if(kind == 2) {
                let ability1 = +prompt('Статус:\n 1 - Вожак\n 1 - Не вожак')
                let ability2 = +prompt(' 1 - Надресирован\n 2 - Не надресирован')
                let ability = [ability1, ability2]
                zoopark.addAnimal(new Wolf(name, age, kind, ability))
            }
            if(kind == 3) {
                let ability1 = prompt('Обитает в:')
                let ability2 = +prompt('Статус: \n 1 - В спячке \n 2 - Не в спячке')
                let ability = [ability1, ability2]
                zoopark.addAnimal(new Bear(name, age, kind, ability))
            }
            if(kind == 4) {
                let ability1 = +prompt('Введите скорость плавания')
                let ability2 = +prompt('Введите дальность слуха')
                let ability = [ability1, ability2]
                zoopark.addAnimal(new Dolphin(name, age, kind, ability))    
            }
            break
        }
        case 2:{    //remove Animal
            if(zoopark.LengthCase == 0) break
            let name = prompt('Имя животного')
            let kind = prompt('Вид\n 1 - Птица\n 2 - Волк\n 3 - Медведь\n 5 - Дельфин')
            zoopark.removeAnimal(name, kind)
            break
        }
        case 3:{    //show Type Animal
            let kind = +prompt('Вид\n 1 - Птица\n 2 - Волк\n 3 - Медведь\n 4 - Дельфин')
            if(kind == 1 || kind == 2 || kind == 3 || kind == 4) console.log(zoopark.showSpecialKind(kind))
            break
        }
        case 4:{
            if(zoopark.caseLength != 0) console.log(zoopark.showAllAnimal())
            break
        }
        case 5:{
            if(zoopark.caseLength >= 3) console.log(zoopark.showTreeOld())
            break
        }
        case 6:{
            console.log(`клеток свободно ${5 - zoopark.caseLength}`)
            break
        }
        case 7:{
            if(zoopark.CaseLength == 0) break
            let name = prompt('Имя животного')
            console.log(zoopark.infoAnimal(name))
            break
        }
    }
}while(menu != 8)
*/




//2.Вывести какого слова сколько в предложении и отсортировать по возрастанию
/*
Привет, как твои дела ? Привет, дела хорошо, а твои ? Привет,

Вывод:

Привет, - 3 
твои - 2
дела - 2
как - 1
хорошо - 1 
*/

/*
let text = 'Привет, как твои дела ? Привет, дела хорошо, а твои ?'
let result = ``

text = text.split(' ')
text.forEach(words=>{
    let chek = 0
    text.forEach(words2=>{ if(words == words2) chek++ })
    result += `${words} - ${chek}\n`
})

console.log(result)
*/



// **3.Запросить у пользователя предложение, вывести этоже предложение где каждое слово будет написанно в большй буквы
// >>что делаешь ?
// <<Что Делаешь ?

/*
let text = prompt('Введи Текст')

text = text.split(' ')
text = text.map(word=>word[0] = word[0].toLocaleUpperCase() + word.substring(1, word.length)) 
text = text.join(' ')

console.log(text)
*/