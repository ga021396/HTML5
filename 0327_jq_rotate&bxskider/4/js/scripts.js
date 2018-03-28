$(function(){	
    //儲存現在的導覽器狀態
    var isOpened=true;

    //-----------------
    // 如果圖示被滑鼠移入
    //-----------------
    $('.header .logo').mousedown(function(){
        if(!isOpened){		
            //將導覽列打開
            $(this).parent().stop().animate({marginTop:0}, {duration:400, easing:'easeOutBounce'});
            $(this).stop().animate({top:20}, {duration:400, easing:'easeOutBounce'});
			$(this).rotate({angle: 180,animateTo:360,duration:400});	
            isOpened=true;
        }
		else{$(this).parent().stop().animate({marginTop:-80}, {duration:400, easing:'easeOutBounce'});
            $(this).stop().animate({top:40}, {duration:400, easing:'easeOutBounce'});	       
           	$(this).rotate({angle: 0,animateTo:180,duration:400});	  
			isOpened=false;
		
			}
    });
	
  
});