$(document).ready(function() {
    $('#autoWidth').boutique( {
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});