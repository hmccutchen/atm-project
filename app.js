
var cities = [ "city1.jpg", "city2.jpg", "city3.jpg", "city4.jpg", "city5.jpg" ];

var gallery = document.getElementById("gallery");



/*
declare counter variable, access cities array indices with for loop, print each indice to console via console.log
*/
var count = 0;
var newImage = document.createElement("img");

newImage.src = "images/" + cities[count];
newImage.width = "200";
gallery.appendChild(newImage);
count = count + 1;


