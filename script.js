class person {
    constructor(name, hp, ap, spd, m) {
        this.firstname = name;
        this.health = hp;
        this.armor = ap;
        this.speed = spd;
        this.mana = m;
    }
    inform() {
        console.log("Name: "+this.firstname)
        console.log("Health: "+this.health);
        console.log("Armor: "+this.armor);
        console.log("Speed: "+this.speed);
        console.log("Mana: "+this.mana);
    }
}

let arthur = new person("Arthur",40,30,20,10)
let sleveen = new person("Sleveen",30,15,30,15)
let wanda = new person("Wanda",10,20,30,40)

arthur.inform();
console.log("=====================");
sleveen.inform();
console.log("=====================");
wanda.inform();

function win(player) {
    if (player.health <= 10) {
        alert("Wizards cannot trespass!")
    }
}
