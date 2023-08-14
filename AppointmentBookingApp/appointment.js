var item = document.getElementById("Submit");
var itemList = document.getElementById('items');

document.addEventListener('DOMContentLoaded', addlist);

function addlist() {
    axios.get("https://crudcrud.com/api/bc9448e2993b41dda59d887ac58ccd7b/appointmentData")
    .then((response)=>{
        console.log(response);
        for(var i=0;i<response.data.length;i++){
            createListItem(response.data[i].Email,response.data[i]);
        }
    })
    .catch((error)=>{
        console.log(error);
    })
    /*for (let i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var storedData = localStorage.getItem(key);
        var Data = JSON.parse(storedData);
        if (Data) {
            createListItem(key, Data);
        }
    }*/
}

item.addEventListener('click', printDetail);

function printDetail(e) {
    var Name = document.getElementById('name').value;
    var Email = document.getElementById('Email').value;
    var phone = document.getElementById('Phoneno').value

    var obj = {
        Name: Name,
        Email: Email,
        Phone:phone
    };
    //var myobjSerialize = JSON.stringify(obj);
    //localStorage.setItem(Email, myobjSerialize);
   axios.post("https://crudcrud.com/api/bc9448e2993b41dda59d887ac58ccd7b/appointmentData",obj)
   .then((Response)=>{
    createListItem(Response.data.Email, Response.data);
    //console.log(Response);
   })
   .catch((err)=>{
    console.log(err);
   })
  //  var storedData = localStorage.getItem(Email);
  //  var userData = JSON.parse(storedData);
  //  createListItem(Email,userData);
    
}

function createListItem(email, userData) { // Changed 'cate' to 'email'

    var li = document.createElement('li');
    li.appendChild(document.createTextNode(`Name: ${userData.Name}, Email: ${userData.Email},Phone Number :${userData.Phone}`));

    var delbutton = document.createElement('button');
    delbutton.appendChild(document.createTextNode('DELETE'));
    delbutton.className = "btn btn-dark mr-2";

    var editbutton = document.createElement('button');
    editbutton.appendChild(document.createTextNode('Edit'));
    editbutton.className = "btn btn-success mr-2";

    editbutton.addEventListener('click', function () {
        document.querySelector("#name").value = userData.Name;
        document.querySelector("#Email").value = userData.Email;
        document.querySelector('#Phoneno').value = userData.Phone;
        localStorage.removeItem(email); // Used 'email' instead of 'Email'
        li.remove();
    });

    delbutton.addEventListener('click', function () {
        localStorage.removeItem(email); // Used 'email' instead of 'Email'
        li.remove();
    });

    li.appendChild(editbutton);
    li.appendChild(delbutton);
    itemList.appendChild(li);
}

