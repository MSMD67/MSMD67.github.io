/*

Virtual Farm

Goal: You'll be creating a virtual farm whose animals can be clicked on to get an alert displaying their name and what sound they make

Instructions:

1) Create a top-level "FarmAnimal" object that all the other farm animals will inherit from
2) FarmAnimal must have "name", "sound", and "image" instance props, and a "talk" instance method (talk should alert the animal's name and its sound)
3) Create at least three different animals for your farm (remember to inherit from "FarmAnimal" by changing the "prototype" of your animals)

	- Give each animal a name, a sound, and an image (use the web and copy an image path)

4) Once you build your animal constructors, create an instance of each animal and push that instance into the "farmAnimals" array

	ex:

	new rooter = new Rooster('Roger');
	farmAnimals.push(rooster);

5) Lastly, iterate over the "farmAnimals" array and append each of your animals to the DOM
	- You will have to create a new DOM element (a <div> is recommended)
	- This new <div> needs to have the CSS class "animal"
	- Assign this <div> random "bottom" and "left" attributes (this is so animals do not overlap each other in the DOM)

		Hint: use %-based values (bottom: 50%; left: 25%)

	- This <div>'s background should be the animal's image

		Hint: background-image: url('http://some-url-here.com')

	- Each <div> should have a click event that alerts the name of the animal and the sound that it makes
	- Append each new <div> to the body

		Hint: $('body').append(yourElement)
*/


$(document).ready(function () {

	// push all animal instances here
	var farmAnimals = [];

		function farmAnimal(name, sound, image){
			this.name = name;
			this.sound = sound;
			this.image = image;	
			this.talk = function (){
				alert("My name is " + this.name + " and my sound is " +this.sound + ".");
			};
		}

		function Dog(name, sound, image){
			farmAnimal.call(this, name, sound, image);
		}
	 
		function Cow(name, sound, image){
			farmAnimal.call(this, name, sound, image);

		}

		function Rooster(name, sound, image){
			farmAnimal.call(this, name, sound, image);
		}

 		Rooster.prototype = new farmAnimal();
	 	Cow.prototype = new farmAnimal();
	 	Dog.prototype = new farmAnimal();

	 var rooster = new Rooster('Barb','cock-a-doodle-doo', 'https://upload.wikimedia.org/wikipedia/commons/5/52/Brown_Leghorn_rooster_in_Australia.jpg' );
	 var cow = new Cow('Betsy', 'moo', 'http://cdxdemo.dprm-lab.com/wp-content/uploads/2015/07/dairy_cow.jpg');
	 var dog = new Dog('Bubbles', 'woof', 'https://pixabay.com/static/uploads/photo/2014/04/05/11/38/dog-316459_960_720.jpg');
	 
	farmAnimals.push(rooster, cow, dog);
	console.log(farmAnimals);
      // height: 80px;
      // width: 80px;
      // position: absolute;
      // cursor: pointer;
      // background-size: cover;
      // background-position: center;
		for(var i =0; i < farmAnimals.length; i++){
		// 	$('body').append('<div class="animal" style="bottom: 10%; left: 25%; display: inline-block; position: relative; height: 80px; width:80px; background-image: url('+ farmAnimals[i].image+') "></div>');
		// }
			$('body').append('<div class="animal"' + 'id=' + i + ' '+' style="left: 25%; bottom: 10%; display: inline-block; background-size: cover; position: relative; height: 80px; width:80px; background-image: url('+ farmAnimals[i].image+') "></div>');
			// $('body').append('<div class="animal" id=0 style="left: 25%; bottom: 10%; display: inline-block; background-size: cover; position: relative; height: 80px; width:80px; background-image: url('+ farmAnimals[i].image+') "></div>');
		}

				$('#0').click(function(){
					rooster.talk();
				});

				$('#1').click(function(){
					cow.talk();
				});

				$('#2').click(function(){
					dog.talk();
				});
});
