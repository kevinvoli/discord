
    "use strict";


    /*==================================================================
    [ Validate ]*/
    var input = document.querySelector('.validate-input .input100');

    document.querySelector('.validate-form').addEventListener('onSubmit',(e)=>{
        var check = true;
        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    input.addEventListener('onFocus',(e)=>{
           hideValidate(e);
    });

    function validate (input) {
        if(input.attribut('type') == 'email' || $(input).attr('name') == 'email') {
            if(input.val.trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if(input.value.trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = document.querySelector(input).parent();

        thisAlert.addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = document.querySelector(input).parent();

        thisAlert.removeClass('alert-validate');
    }