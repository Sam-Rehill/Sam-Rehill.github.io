// JavaScript Document
window.onload = function() {
  console.log("Page loaded") 
  
};

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('#slideshow');
},  3000);


function ffchange(){
	var colour = "colour";
	var accent = "accent";	
	colour = document.getElementById("colour").value;
	accent = document.getElementById("accent").value;
	var img = "Assets/Ff/"+colour+accent+".png";
	console.log(img);
	document.getElementById("suit").src = img;
}
function fschange(){
	var colour = "colour";
	var accent = "accent";	
	colour = document.getElementById("colour").value;
	accent = document.getElementById("accent").value;
	var img = "Assets/fs/"+colour+accent+".png";
	console.log(img);
	document.getElementById("suit").src = img;
}
function wjchange(){
	var colour = "colour";
	var accent = "accent";	
	colour = document.getElementById("colour").value;
	accent = document.getElementById("accent").value;
	var img = "Assets/wj/"+colour+accent+".png";
	console.log(img);
	document.getElementById("suit").src = img;
}
