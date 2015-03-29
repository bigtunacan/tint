$(document).ready(function() {
  $.ajaxSetup({ cache: true });
  $.getScript('//connect.facebook.net/en_UK/all.js', function(){
    FB.init({
      appId: '1489150401355340',
    });     
    $('#loginbutton,#feedbutton').removeAttr('disabled');
  });
  
  $.fn.checkFBLogin = function (){
    FB.login(function(response){
      console.log('after login');    
    });
  };
});