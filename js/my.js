$(function(){
    var num=0;
    var timee;
    var p=0;
    function zou(){
        timee=setInterval(function(event){
        	num=num+1;
        	if(num>7)
        	{
        		num=0; 
                $('.lunbotu ul').css('left', -100*num+'%'); 
                num=1;
        	}		
        	$('.lunbotu ul').animate({'left':-100*num+'%'},600)
            $('.lunbotu ol')
        	console.log(num);	
        },2000);	
    }
    zou();
    $('.lunbotu').hover(function(){		
        clearInterval(timee);
    },function(){
        zou();
    });






    $('.topul li').children().mouseenter(function(){
        $('.xiala').slideDown(500);
    });
    $('.xiala').mouseleave(function(){
        $(this).slideUp(500);
    });


    // $('.topul li').children().mouseenter(function(){
    //     $('.xialatwo').slideDown(500);
    // });
    // $('.xialatwo').mouseleave(function(){
    //     $(this).slideUp(500);
    // });





    $('.denglu').mouseenter(function(event) {
        $('.dengluul').slideDown(300);
    });
    $('.denglu').mouseleave(function(){
        $('.dengluul').slideUp(300);
    })







})

