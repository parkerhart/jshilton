var hhonors = {

    noticeInvalidEmail: 'Please enter a valid email address.',

    successHandler: function(form) {
        form.submit();
    },    

    submitHandler: function(e) {
        e.preventDefault();
        $('.contact form').submit();
    },

    emailValidation: function(value, element){
        var regexpr = /^\s*(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/;
        return regexpr.test(value);
    },

    changeCountryHandler: function(e){
        $('.contact form #state_province').empty();
        $('.contact form #state_province').prepend('<option value="no_state">No State Required</option>');
        $('.contact form #state_province').selected = 'no_state';

        switch($('.contact form #country').val()) {
            case 'US':
                 $('.contact form #state_province').append($('.contact optgroup.US').clone()); 
                break;
            case 'GB':
                $('.contact form optgroup.GB').each(function(index){
                $('.contact form #state_province').append($(this).clone());
            });
            break;
        }
    },

    main: function ($) {
        $('.contact form .button').on('click', hhonors.submitHandler);
        $('.contact form #country').on('change', hhonors.changeCountryHandler);
        $('.contact form').validate({submitHandler: (hhonors.successHandler)});
        $.validator.addMethod('emailIndividual', hhonors.emailValidation, hhonors.noticeInvalidEmail);
    }   
}

$( document ).ready( hhonors.main );