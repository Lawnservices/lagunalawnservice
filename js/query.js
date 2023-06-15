var miParte = $('#vermas');
var mas = $('.lugares');
$(document).ready(function() {
    $('.btn').click(function() {
        $('.orario').slideToggle("slow");
        $('#mass').slideToggle("slow");
       miParte.css('color','#036');
       miParte.css('fontFamily','verdana');
       $('.lugares').text('FREE ESTIMATE.');
        mas.css('color','blue');
    });



});
document.getElementById('mass');