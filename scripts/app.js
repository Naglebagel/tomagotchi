console.log('scripts working');

class Tomagotchi {
	constructor(){
		this.name = name,
		this.hunger = 1,
		this.boredom = 1,
		this.sleepiness = 1,
		this.age = 1

	}
	setName(){
		const name = prompt('Please enter your name')

		this.name = name;

	}
	chooseSprite(){

	}
};

const increaseHunger = () => {
	toma.hunger += 1;
	if (toma.hunger === 10){
		alert(toma.name + ' has died please try again')
	}
};

setInterval(increaseHunger, 60*60*1000);

const increaseBoredom = () => {
	toma.boredom += 1;
	if (toma.boredom === 10){
		alert(toma.name + ' has died please try again')
	}
};

setInterval(increaseBoredom, 60*60*1000);

const increaseSleepines = () => {
	toma.sleepiness += 1;
	if (toma.sleepiness === 10){
		alert(toma.name + ' has died please try again')
		clearInterval()
	}
};

setInterval(increaseSleepines, 60*60*1000);

const increaseAge = () => {
	toma.age += 1;
};

setInterval(increaseAge, 60*60*1000);

const toma = new Tomagotchi();
console.log(toma);
toma.setName();

$('#tomaName').text(toma.name);
$('#tomaAge').text(toma.age);
$('#tomaHunger').text(toma.hunger);
$('#tomaBoredom').text(toma.boredom);
$('#tomaSleepiness').text(toma.sleepiness);



















