function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false

    var email = document.forms['myForm']["femail"].value;
    if (email.length>25){
        seterror("email", "*Email length is too long");
        returnval = false;
    }
    
    var password = document.forms['myForm']["fpass"].value;
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(password.match(decimal)) 
    { 
    returnval = true;
    }
    else
    { 
    seterror("pass", "*Password should be more than 8 characters and it should contain one upper case, one lower case, one number and 1 special character");
    returnval = false;
    }

    return returnval;
}

