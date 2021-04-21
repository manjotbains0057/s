//check if a var is empty
function emptyInput(str) {
    if(str == '' || str == null) {
        return true;
    }

    return false;
}

//check if two vars match
function doesNotMatch(str, str1) {
    if(str !== str1) {
        return true;
    }

    return false;
}

//check if the url contains query
function checkResponse() {
    var url = window.location.href;
    var success = url.split('?'); //split url into url and query
    var error = document.getElementById('errorMessage');

    //if a query was found
    if(success.length > 1) {
        if(doesNotMatch(success[success.length -1], 'success')) { //if the query was success
            error.setAttribute('name', 'unsuccess');
            error.innerText = "An error occured. Account not created";
            error.hidden = false;
        }
        else {
            error.setAttribute('name', 'success');
            error.innerText = "Account created";
            error.hidden = false;
        }
    }
}

//check if a username already exists
function alreadyExists(str) {
    if(str == 'user@email.com') {
        return true;
    }

    return false;
}

//check if a password is valid length
function invalidPassword(str) {
    if(str.length < 6) {
        return true;
    }

    return false;
}

//displays a message in the errorMessage element and makes it visible
function display(element, message) {
    element.innerText = message;
    element.hidden = false;
}

//function for checking validation of form inputs
function validate() {
    var username = document.getElementById('username');
    var conusername = document.getElementById('conusername');
    var password = document.getElementById('password');
    var conpassword = document.getElementById('conpassword');
    var error = document.getElementById('errorMessage');

    if(emptyInput(username.value.trim())) {
        //display error message
        display(error, 'Username is required');
        username.focus();
        return false;
    }
    else if(emptyInput(conusername.value.trim())) {
        //display error message
        display(error, 'Please re-enter username');
        conusername.focus();
        return false;
    }
    else if(doesNotMatch(username.value.trim(), conusername.value.trim())) {
        //display error message
        display(error, 'The usernames do not match');
        username.focus();
        conusername.focus();
        return false;
    }
    else if(alreadyExists(username.value.trim())) {
        //display error message
        display(error, 'The username is taken');
        username.focus();
        return false;
    }
    else if(emptyInput(password.value.trim())) {
        //display error message
        display(error, 'Password is required');
        password.focus();
        return false;
    }
    else if(emptyInput(conpassword.value.trim())) {
        //display error message
        display(error, 'Please re-enter password');
        conpassword.focus();
        return false;
    }
    else if(doesNotMatch(password.value.trim(), conpassword.value.trim())) {
        //display error message
        display(error, 'The passwords do not match');
        password.focus();
        conpassword.focus();
        return false;
    }
    else if(invalidPassword(password.value.trim())) {
        //display error message
        display(error, 'Password must be a minimum of 6 characters');
        password.focus();
        return false;
    }
    else {
        return true;
    }
}