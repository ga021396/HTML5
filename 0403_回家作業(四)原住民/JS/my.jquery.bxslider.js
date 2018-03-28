// JavaScript Document
$(document).ready(function(){
  $('.bxslider').bxSlider();
});

$('.navbar li').mouseenter(function(){
		$(this).stop.animate(this.style.color ="#F00")
		})		
 	$('.navbar li').mouseleave(function(){
		$(this).stop.animate(this.style.color = "#000")
		})			