console.log('scripts working');

class Tomagotchi {
	constructor(){
		this.name = '',
		this.hunger = 1,
		this.boredom = 1,
		this.sleepiness = 1,
		this.age = 1

	}
	setName(){
		const name = prompt('Please enter your name')

		this.name = name;

	}
};

const increaseHunger = () => {
	toma.hunger += 1;
	$('#tomaHunger').text('Hunger: ' + toma.hunger);
	if (toma.hunger === 10){
		alert(toma.name + ' has fallen to the hungerside')
		increaseHunger.clearInterval()
	}
};

setInterval(increaseHunger, 60000);

const increaseBoredom = () => {
	toma.boredom += 1;
	$('#tomaBoredom').text('Boredom: ' + toma.boredom);
	if (toma.boredom === 10){
		alert(toma.name + ' has died please try again')
		increaseBoredom.clearInterval()
	}
};

setInterval(increaseBoredom, 60000);

const increaseSleepines = () => {
	toma.sleepiness += 1;
	$('#tomaSleepiness').text('Sleepiness: ' + toma.sleepiness);
	if (toma.sleepiness === 10){
		alert(toma.name + ' has died please try again')
		increaseSleepiness.clearInterval(toma.sleepiness)
	}
};

setInterval(increaseSleepines, 60000);

const increaseAge = () => {
	toma.age += 1;
	$('#tomaAge').text('Age: ' + toma.age);
	if (toma.age === 10){

	}
};

setInterval(increaseAge, 60000);

const decreaseHunger = () => {
	console.log ('click!!!')
	if (toma.hunger >= 2){
		toma.hunger -=1;
		$('#tomaHunger').text('Hunger: ' + toma.hunger);
	}
	else{
		$('#tomaHunger').text('Hunger: ' + toma.hunger);
	}

}

const decreaseBoredom = () => {
		console.log ('click!!!')
	if (toma.boredom >= 2){
		toma.boredom -=1;
		$('#tomaBoredom').text('Boredom: ' + toma.boredom);
	}
	else{
		$('#tomaBoredom').text('Boredom: ' + toma.boredom);
	}
}

const decreaseSleepiness = () => {
		console.log ('click!!!')
	if (toma.sleepiness >= 2){
		toma.sleepiness -= toma.sleepiness;
		$('body').toggleClass('toggleSleep');
		$('#tomaSleepiness').text('Sleepiness: ' + toma.sleepiness);
	}
	else if (toma.sleepiness === 0){
		$('body').toggleClass('toggleSleep');
	}
}

const evolveAkin = () => {
	if (toma.age > 20 && $('#youngAnakin').attr('src') === "styles/images/youngAnakinSprite.png"){
			$('body').css('background-image', 'url(styles/images/mustaBackground.png)');
			$('#youngAnakin').fadeOut(1000, function(){
				$('#youngAnakin').attr('src', 'styles/images/anakinSprite.png').fadeIn(1000);
			});
	}
	else if (toma.hunger >= 8 && $('#youngAnakin').attr('src') === "styles/images/youngAnakinSprite.png"){
			$('body').css('background-image', 'url(styles/images/deathStarCorridor.png)');
			$('#youngAnakin').fadeOut(1000, function(){
				$('#youngAnakin').attr('src', 'styles/images/dVaderSprite.png').fadeIn(1000);
			});
		}
}


setInterval(evolveAkin, 5000);

const toma = new Tomagotchi();
console.log(toma);
toma.setName();
$('#theme')[0].play();

$('#tomaName').text('Name: ' + toma.name);
$('#tomaAge').text('Age: ' + toma.age);
$('#tomaHunger').text('Hunger: ' + toma.hunger);
$('#tomaBoredom').text('Boredom: ' + toma.boredom);
$('#tomaSleepiness').text('Sleepiness: ' + toma.sleepiness);



  $('#hungerButton').on('click', decreaseHunger);
  $('#boredomButton').on('click', decreaseBoredom);
  $('#sleepinessButton').on('click', decreaseSleepiness);
 





















