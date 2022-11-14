const yeti = {
    isNamed: "Freddy",
    isMysterious: true
}

yeti.isNamed = "Betty";
yeti.isMarried = true;

document.querySelector("h1").innerHTML = "The Yeti's name is " + yeti.isNamed + " " + yeti.isMarried;

function Animal(name, icon, legs, isEaten){
    this.name = name;
    this.icon = icon;
    this.legs = legs;
    this.isEaten = isEaten;
}

const dog = new Animal("dog", "🐕", 4, false);
const cat = new Animal("cat", "🐈", 4, false);
const chicken = new Animal("chicken", "🐔", 2, true);
const fish = new Animal("fish", "🐟", 0, true);
const cow = new Animal("cow", "🐄", 4, true);

const main = document.querySelector("main");

const a = [dog, cat, chicken, fish, cow];

const createParagraph = () => {
    for(let i of a){
        if(i.isEaten){
            main.innerHTML += "<p>"+ i.icon + " " + i.name + " has " + i.legs + " legs and it is delicious.</p>"
        }
        else{
            main.innerHTML += "<p>"+ i.icon + " " + i.name + " has " + i.legs + " legs and it is a friend to us.</p>" 
        }
    }
}

createParagraph();