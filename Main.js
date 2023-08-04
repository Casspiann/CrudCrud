//All method localstorage and session storage methods are same
var item = document.getElementById("Submit");
 //cokiees
 //document.cookie = 'firstName=john; expires=' + new Date(2023, 0, 1).toUTCString();
//console.log(document.cookie);
//console.log(123);

item.addEventListener('click',printDetail);
function printDetail(e){
    
    var firstName = document.getElementById("firstName").value;
   // localStorage.setItem("firstName",firstName);
    //console.log(localStorage.getItem('firstName'));
    var lastName = document.getElementById("lastName").value;
   // localStorage.setItem("lastName",lastName);
   // console.log(localStorage.getItem('lastName'));
    var Gender = document.getElementById("gender").value;
    //localStorage.setItem("Gender",Gender);
    //console.log(localStorage.getItem('Gender'));

    var Email  = document.getElementById("email").value;
    //localStorage.setItem("Email",Email);
    //console.log(localStorage.getItem('Email'));
    var Password = document.getElementById("Password").value;
    //localStorage.setItem("password",Password);
    //console.log(localStorage.getItem('password'));
    var phoneNumber = document.getElementById("Phone").value;
    //localStorage.setItem("Phone.no",phoneNumber);
    //console.log(localStorage.getItem('Phone.no'));
    let myobj = {
        FirstName:firstName,
        LastName:lastName,
        Gender:Gender
    };
    let myobject ={
        Email:Email,
        Password:Password,
        PhoneNumber:phoneNumber
    };
    let myobjSerialize = JSON.stringify(myobj);
    localStorage.setItem('myobj',myobjSerialize);
    let myObjectSerialize = JSON.stringify(myobject);
    localStorage.setItem('myobject',myObjectSerialize);
    //console.log(myObjectSerialize);
    //console.log(myobjSerialize);

   // console.log(firstName+" "+lastName+" "+Gender+" "+Email+" "+Password+" "+phoneNumber)
   
   

}