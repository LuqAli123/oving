function valideteEpost(){
    const email = $("#email").val();
    const regex = /^[a-z A-Z0-9.-]+@[a-z]+\.[a-zA-Z]{2,}$/;
    const ok = regex.test(email);
    if (!ok){
        $("#wrongEmail").html("Please enter a valid email");
        return false;
    }else{
        $("#wrongEmail").html("");
        return true;
    }
}
function validatePhone(){
    const phoneNo = $("#phoneNo").val();
    const regex = /^[0-9]{8}$/;
    const ok = regex.test(phoneNo);
    if (!ok){
        $("#phoneNo").html("Phone number should only be 8 digits");
        return false;
    }else {
        $("#phoneNo").html("");
        return true;
    }
}
function sendForm(){
    const citizen = {
    firstname: $("#firstname").val(),
    surname: $("#surname").val(),
    dateofbirth: $("#dateOfBirth").val(),
    ssn: $("#SSN").val(),
    phonenumber: $("#phoneNo").val(),
    email: $("#email").val(),
    city: $("#city").val(),
    street: $("#street").val()
    };
    console.log(citizen)
    if (validerFirstname() && validerSurname() && validerDoB && validerSSN &&
    validatePhone() && valideteEpost() && validerCity() && validerStreet){
        $.post("/saveCitizen",citizen,function (){

        });
    }
}