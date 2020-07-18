class Animal {
    constructor(name, voice) {
        this.name = name;
        this.voice = voice;
    }

    say() {
        console.log(this.name, 'says', this.voice);
    }
}
// sparrow -> Bird.prototype -> Animal prptotype -> Object.prototype -> null
class Bird extends Animal{
    constructor(name, voice, canFly) {
        super(name, voice);
        this.canFly = canFly;
    }
}

class Pets extends Animal{
}

const cat = new Pets('cat', 'myauu');
cat.say();
const sparrow = new Bird('sparrow', 'chik chirik', true);
sparrow.say();


// -----------CLASS PROPERTIES