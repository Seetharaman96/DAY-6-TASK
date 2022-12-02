// DAY 6
// 1) Question
// The class Movie is stated below. An instance of class Movie represents a film. 
// This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

// a) Write a constructor for the class Movie, which takes a String representing the title of the movie,a
// String representing the studio, and a String representing the rating as its arguments, and sets 
// the respective class properties to these values.
class Movies{

    constructor(movie, studio, rating){

        this.movie = movie;

        this.studio = studio;

        this.rating = rating;

    }

}

var class1 = new Movies("Thor", "Marvel", "PG13");

console.log(class1.movie);

console.log(class1.studio);

console.log(class1.rating);
// OUTPUT
// Thor
// Marvel
// PG13

// -----------------------------------------------------------------------


// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating
// is provided.
class Movies1{

    constructor(movie, studio, rating){

        this.movie = movie;

        this.studio = studio;

        if(rating == undefined){

            this.rating = "PG";

        } else{

            this.rating = rating;

        }

    }

}

var result = new Movies1("One piece film red", "Animetv");

console.log(result.movie);

console.log(result.studio);

console.log(result.rating);
// OUTPUT =>
// One piece film red
// Animetv
// PG

// ------------------------------------------------------------------------------


// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of
// only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie
// instances. The returned array need not be full.
class Movies2{

    constructor(movie, studio, rating){

        this.movie = movie;

        this.studio = studio;

        this.rating = rating;

    }

    getPG(review){

        var res = [];

        for(var i = 0; i < review.length; i++){

            if(review[i].rating === "PG"){

                res.push(review[i]);

            }

        }

        return res;

    }

}

var movie1 = new Movies2("Parasyte", "VRV", "PG");

var movie2 = new Movies2("Batman", "DC", "PG13");

var movie3 = new Movies2("Blackpanther", "Marvel", "PG13");

var movie4 = new Movies2("Pursuit of happiness", "Disney", "PG");

var result = (movie1.getPG([movie1, movie2, movie3, movie4]));

console.log(result);
// OUTPUT =>
// 0:Movies2 {movie: 'Parasyte', studio: 'VRV', rating: 'PG'} 
// 1:Movies2 {movie: 'Pursuit of happiness', studio: 'Disney', rating: 'PG'}


// --------------------------------------------------------------------------------


// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
// the studio “Eon Productions”, and the rating “PG­13”
class Movies3{

    constructor(movie, studio, rating){

        this.movie = movie;

        this.studio = studio;

        this.rating = rating;

    }

}

var res = new Movies3("Casino Royale", "Eon Productions", "PG13");

console.log(res.movie);

console.log(res.studio);

console.log(res.rating);
// OUTPUT
// Casino Royale
// Eon Productions
// PG13


// --------------------------------------------------------------------------------------------------------


// 2) Question
// Convert the UML diagram to Typescript class. - use number for double
class Circle{
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }
    get radiuscircle(){
        return this.radius;
    }
    get colorcircle(){
        return this.color;
    }
    set radiuscircle(radius){
        this.radius = radius;
    }
    set colorcircle(color){
        this.color = color;
    }
    get toString() {
        return `"Circle[radius=${this.radius}, color=${this.color}]"`;
    }
    get areacircle(){
        return Math.PI * this.radius * this.radius;
    }
    get circumferencecircle(){
        return 2 * Math.PI * this.radius;
    }
}
var obj = new Circle(1.0, "red");

// getters----------------------------
console.log(obj.radiuscircle);
// OUTPUT => 1
console.log(obj.colorcircle);
// OUTPUT => red

// SETTERS----------------------------
obj.radiuscircle = 2.2;
console.log(obj.radiuscircle);
// OUTPUT => 2.2
obj.colorcircle = "blue";
console.log(obj.colorcircle);
// OUTPUT => blue

// toString----------------------------
console.log(obj.toString);
// OUTPUT => "Circle[radius=2.2, color=blue]"

// area---------------------------------
console.log(obj.areacircle);
// OUTPUT =>15.205308443374602

// circumference------------------------
console.log(obj.circumferencecircle);
// OUTPUT =>13.823007675795091


// --------------------------------------------------------------------------------------------------------


// 3) Question
// Write a “person” class to hold all the details
class Person{

    constructor(name, gender, age){

        this.name = name;

        this.gender = gender;

        this.age = age;

    }

}

var obj = new Person("Goku", "Male", 45);

console.log(obj.name);

console.log(obj.gender);

console.log(obj.age);
// OUTPUT =>
// Goku
// Male
// 45


// -----------------------------------------------------------------------------------------------------


// 4) Question
// write a class to calculate the uber price?
class Uber{

    constructor(perkmprice, distancetravelled){

        this.perkmprice = perkmprice;

        this.distancetravelled = distancetravelled;

    }

    get uberprice(){

        return this.perkmprice * this.distancetravelled;

    }

}

var res = new Uber(10, 5);

console.log(res.uberprice);
// OUTPUT => 50