$(document).ready(function() {


    $(window).click(function(e) {
        if (e.target.classList[0] === "modal-backdrop"){
            $('.portfolio-modal').modal('hide');
        }
    });
});