//--- Object.set.PrototypeOf

const animal = {
    say: function() {
        console.log(this.name, 'says', this.voice);
    }
};

const dog = {
    name: 'dog',
    voice: 'Gav!',
};
Object.setPrototypeOf(dog, animal);

const cat = {
    name: 'cat',
    voice: 'Myau!',
};
Object.setPrototypeOf(cat, animal);

dog.say();
cat.say();

//--- Object.create

const animal = {
    say: function() {
        console.log(this.name, 'says', this.voice);
    }
};

function createAnimal(name, voice) {
    const result = Object.create(animal);
    result.name = name;
    result.voice = voice;
    return result;
}

const dog = createAnimal('dog', 'wuuf!');
const cat = createAnimal('cat', 'myauu!');

dog.say();
cat.say();

//--- using new

function Animal(name, voice) {
    this.name = name;
    this.voice = voice;
}
// прототип создаваемых объектов
Animal.prototype.say = function() {
    console.log(this.name, 'says', this.voice); 
};

// создаваемые объекты 
const dog = new Animal('Dog', 'woof');
const cat = new Animal('Cat', 'myauuuu');

dog.say();
cat.say();