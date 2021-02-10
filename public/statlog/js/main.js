

    "use strict";
    /*==================================================================
    [ Validate ]*/
    let input = document.querySelectorAll('.validate-input .input100');
    const form = document.querySelector('.validate-form')
    form.addEventListener('submit',(e)=>{
        
        e.preventDefault()
        var check = true;
        for(var i=0; i<input.length; i++) {
            console.log('le fameut event',validate(input[i]))
            if(validate(input[i]) == false){
          

                showValidate(input[i]);
                check=false;
            }
        }
        return check;
    });

 document.querySelector('.validate-input .input100')
    .addEventListener('focus',(e)=>{
        console.log('lele e :',e)
        hideValidate(e)
    })


    function validate (inputs) {
        console.log(inputs.attributes.type)
        if(inputs.attributes.type === 'email' || inputs.attributes.name === 'email') {
            if(inputs.value.trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if(inputs.value.trim() === ''){
                return false;
            }
        }
    }

    function showValidate(inputs) {
        let thisAlert = inputs.parentElement;
        thisAlert.classList.add('alert-validate');
    }

    function hideValidate(inputs) {
        console.log('le parent de Hide',inputs.parentElement)
        let thisAlert = inputs.parentElement;
        thisAlert.classList.remove('alert-validate');
    }
    
