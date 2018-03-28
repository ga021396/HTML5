// JavaScript Document
$(function(){
	$('.navbar li').mouseenter(function(){
		$(this).stop.animate(this.style.color = "#F90")
		})		
 	$('.navbar li').mouseleave(function(){
		$(this).stop.animate(this.style.color = "#000")
		})			
		
	});