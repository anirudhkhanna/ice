$(document).ready(function(){

    /* HIDE DEMO NOTICE ON CLICK OF ITS CLOSE BUTTON */
    $('#close-demo-notice').click(function(){
        $('#demo-notice').fadeOut();
    });

    /* HIDE LOGIN MODAL AND SHOW REGISTER MODAL ON CLICK OF REGISTER LINK */
    $('#signup-link').click(function(e){
        e.preventDefault();
        $('#login-modal').modal('hide')
        .on('hidden.bs.modal', function (e) {
            $('#register-modal').modal('show');
            $(this).off('hidden.bs.modal'); // Remove the 'on' event binding
        });
    });

});