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