

$(document).ready(function(){
  
  $("#resolution").click(function() {
 
    var k = prompt("Enter a resolution that is between 1 and 100 Note: Over 65 may cause performance issues");
    while (k > 100 || k < 1 ){
    var k = prompt("Enter a resolution that is between 1 and 100 ");
    }
    $('.right').remove(); // remove all divs and start over


    for(i = 0; i < k * k; i++) {
    
      $('#middle').append('<div class="right"></div>');
      
        } // end for loop
    
    
    
  var width = ($('#middle').width()) / k;
  $('.right').css('width', width);
  $('.right').css('height', width);
   
 
    $('.right').hover(function(){
       var op = $(this).css("opacity");
	     var color =  $('#choose').val();
       var back = ["#ff0000","blue","gray", "blue", "pink", "orange", "green", "teal", 
       "purple","#99ff99", "3399ff", "#ff80bf", "#66ffff"];
       var random = back[Math.floor(Math.random() * back.length)];
      
        if(color == 'opacity'){
        
        $(this).css("background-color", "black");
		    $(this).css("opacity", ( op > 0.1 ) ? ( op - 0.1 ) : op );
        
      } // end if statemnet 
      
       if(color == 'opall'){
       
       $(this).css("opacity", ( op > 0.1 ) ? ( op - 0.1 ) : op );
         
       } // end statement 
      

      if(color == "random"){
          
        $(this).css('background-color', random);
        
      } // end if statement 
      
      else 
      
        $(this).css('background-color', color);
        
        }); // end hover function
    }); // end resolution
  });// end function
