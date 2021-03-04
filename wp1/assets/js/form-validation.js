document.getElementById('contact').addEventListener('submit', function(event){
    event.preventDefault();


    var validated = true;

    var name = $('#name');
    var email = $('#email');
    var phone = $('#phone');
    var company = $('#company');
    var message = $('#message');
    var service = $('#service');


    var nameValue = name.val();
    var emailValue = email.val();
    var phoneValue = phone.val();
    var companyValue = company.val();
    var messageValue = message.val();
    var serviceValue = service.val();

    const regexName = /^[A-ZČĆĐŠŽ][a-zčćđšž]{2,29}$/
    const regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    const regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

    const regexString = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/
    const regexCompany = /^((?![\^!@#$*~ <>?]).)((?![\^!@#$*~<>?]).){0,73}((?![\^!@#$*~ <>?]).)$/;

    //validacija za name
    if(validateForm(nameValue, regexName))
    {
        removeError(name);
    }
    else{
        addError(name); validated = false;
        }


    // validacija za email
    if(validateForm(emailValue, regexEmail))
    {
        removeError(email);
    }
    else{
        addError(email); validated = false;
        }


    //validacija za phone
    if(validateForm(phoneValue, regexPhone))
    {
        removeError(phone);
    }
    else{
        addError(phone); validated = false;
        }


    //validacija za company
    if(validateForm(companyValue, regexCompany))
    {
        removeError(company);
    }
    else{
        addError(company); validated = false;
        }
    
    //validacija za message
    if(validateForm(messageValue, regexString))
    {
        removeError(message);
    }
    else{
        addError(message); validated = false;
        }
    //validacija za service
    if(serviceValue >=0 && serviceValue<=3){
        removeError(service);

    }else{
        addError(service); validated = false;

    }

    function validateForm(value, regularExpression)
    {
     return regularExpression.test(value);
    }


    function addError(input){ 
        input.prev().removeClass('error-message-hidden');
        input.prev().addClass('error-message-show');
        input.addClass('error');
    }
    function removeError(input){
        input.prev().removeClass('error-message-show');
        input.prev().addClass('error-message-hidden');
        input.removeClass('error');
        }



    if(validated){
        console.log('Forma predata')
        document.getElementById('contact').submit();
    }else{
        console.log('Validation Failed.')
    }

    });