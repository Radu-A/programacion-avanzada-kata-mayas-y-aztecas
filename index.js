class Warrior {
  constructor(name, life, power) {
    this.name = name;
    this.life = life;
    this.power = power;
  }
  attack() {
    console.log(`${this.name} has attacked with ${this.power} of power.`);
    return this.power;
  }
  defend(damage) {
    this.life -= damage;
    console.log(
      `${this.name} has received ${damage} of damage and his life is ${this.life} now.`
    );
  }
}

class Maya extends Warrior {
  constructor(name, life, power) {
    super(name, life, power);
  }
  drinkColaCao() {
    this.power += 10;
    console.log(
      `${this.name} has drinked ColaCacao and his power is ${this.power} now.`
    );
  }
}

class Aztek extends Warrior {
  constructor(name, life, power) {
    super(name, life, power);
  }
  drinkNesquik() {
    this.life += 10;
    console.log(
      `${this.name} has drinked Nesquik and his life is ${this.life} now.`
    );
  }
}

const rebeAztek = new Aztek("RebeAztek", 60, 20);
const vitiMaya = new Maya("VitiMaya", 60, 20);

rebeAztek.drinkNesquik();
vitiMaya.drinkColaCao();

rebeAztek.defend(vitiMaya.attack());
vitiMaya.defend(rebeAztek.attack());

rebeAztek.drinkNesquik();
vitiMaya.drinkColaCao();

rebeAztek.defend(vitiMaya.attack());
vitiMaya.defend(rebeAztek.attack());
