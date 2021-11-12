$(document).ready(function()
{
    let body = $(document.body);
    $('#backgrounds').bind('change', function(event){
     let bg = $(this).val();
        if(bg == null || typeof bg === 'undefined' || $.trim(bg) === '')
            body.css('background', 'none transparent');
        else
            body.css('background', bg);
    });
});