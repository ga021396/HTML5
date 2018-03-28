// JavaScript Document
$(function(){
	$('.adver').mouseenter(function(){
		$(this).stop().animate({height:150},{duration:1000,easing:'easeOutElastic'});
		})		
	$('.adver').mouseleave(function(){
		$(this).stop().animate({height:30},{duration:400});
		})
		
		//------------------------
		
		$('.navbar li').mouseenter(function(){
		$(this).stop().animate({fontSize:24},{duration:400,easing:'easeOutElastic'});
		})		
		$('.navbar li').mouseleave(function(){
		$(this).stop().animate({fontSize:17},{duration:400,easing:'easeOutElastic'});
		})		
		
		//------------------------
		
		$('.header img.logo').mouseenter(function(){
		$(this).parent().stop().animate({marginTop:0},{duration:1000,easing:'easeOutElastic'});
		})		
		$('.header').mouseleave(function(){
		$(this).stop().animate({marginTop:-80},{duration:1000,easing:'easeOutElastic'});
		})			
		$('.header img.logo').mousedown(function(){
		$(this).stop().rotate({ angle: 0,animateTo:180})		
      })
	});