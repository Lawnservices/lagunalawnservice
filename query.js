$(document).ready(function() {
    $('ul.tabs li a:first').addClass('active');
    $('secciones article').hide();
    $('seccciones aticle:frist').show();

    $('ul.tabs li a').click(function() {
        $('ul.tabs li a').removeclass('active');
        $(this).addClass('active');

        var activeTab = $this.attr('href');
        $(activeTab).show();
        return false;
    });

});