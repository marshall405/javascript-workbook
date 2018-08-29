'use strict';

let assert = require('assert');

let jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

// Your code here

// Create a class CrewMember that takes a name, job and specialSkill. set this.ship to null
  // create a method on CrewMember called enterShip()
    // enterShip() takes one argument, an object, and sets CrewMember ship to that object
    // enterShip() will also push CrewMember onto the objects crew array
// Create a class Ship that takes a name, type and ability. set this.crew to []
  // create a method on Ship called missionStatement() 
  // missionStatement() will determine if that ship has a crew,
  // if so return this.ability, else return 'Can't perform a mission yet'

  class CrewMember {
    constructor(name, job, specialSkill) {
      this.name = name;
      this.job = job;
      this.specialSkill = specialSkill;
      this.ship = null;
    }
    enterShip(Ship) {
      if(Ship.type === jobTypes[this.job] || this.job === 'programmer'){
        this.ship = Ship;
        Ship.crew.push(this);
      } else {
        return `Crewmember ${this.name} does not have access to ${Ship.name}`;
      }
    }
  }

  class Ship {
    constructor(name, type, ability) {
      this.name = name;
      this.type = type;
      this.ability = ability;
      this.crew = [];
    }
    missionStatement() {
      if(this.crew.length) {
        return this.ability;
      }
      return 'Can\'t perform a mission yet.';
    }
  }


//tests
if (typeof describe === 'function'){
  describe('CrewMember', function(){
    it('should have a name, a job, a specialSkill and ship upon instantiation', function(){
      var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
    });

    it('can enter a ship', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
    it('should keep from assigning the wrong ship', () => {
      const mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      const crewMember1 = new CrewMember('Commander Lewis', 'commander', 'geology');
      assert.equal(crewMember1.enterShip(mav), `Crewmember ${crewMember1.name} does not have access to ${mav.name}`);
    });
    it('should allow a programmer to enter any ship', () => {
      const mainShip = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
      const mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      const programmer1 = new CrewMember('Michael Jordan', 'programmer', 'Basketball');
      programmer1.enterShip(mainShip);
      assert.equal(programmer1.ship, mainShip);
      assert.equal(mainShip.crew.length, 1);
      assert.equal(mainShip.crew[0], programmer1);
    });
  });

  describe('Ship', function(){
    it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    });

    it('can return a mission statement correctly', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
      let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}
