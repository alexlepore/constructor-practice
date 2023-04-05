function Pet(noise, sleepy){
    this.noise = noise;
    this.sleepy = sleepy;
    this.makeNoise = function(){
        if(this.sleepy === false){
            console.log(this.noise)
        } else{
            console.log("ZZZzzZzZzzz")
        }
    }
}

let dog = new Pet("woof", false);
dog.makeNoise();
let cat = new Pet("meow", false);
cat.makeNoise();
let bird = new Pet("chirp chirp", false)
bird.makeNoise();

let turtle = new Pet("meep", true)
turtle.makeNoise();