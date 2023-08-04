var item = document.getElementById("Submit");
    var itemList = document.getElementById('items');

    item.addEventListener('click', printDetail);

    function printDetail(e) {
      var firstName = document.getElementById("firstName").value;
      var lastName = document.getElementById("lastName").value;
      var Gender = document.getElementById("gender").value;
      var Email = document.getElementById("email").value;
      var Password = document.getElementById("Password").value;
      var phoneNumber = document.getElementById("Phone").value;

      var myobj = {
        FirstName: firstName,
        LastName: lastName,
        Gender: Gender,
        Email: Email,
        Password: Password,
        PhoneNumber: phoneNumber
      };

      var myobjSerialize = JSON.stringify(myobj);
      localStorage.setItem(Email, myobjSerialize);
      

      var li = document.createElement('li');
      li.appendChild(document.createTextNode(myobjSerialize));

      var delbutton = document.createElement('button');
      delbutton.appendChild(document.createTextNode('DELETE'));
      delbutton.className = "btn btn-dark";
    
      delbutton.addEventListener('click', function () {
        // Delete user when the delete button is clicked
        localStorage.removeItem(Email);
        li.remove();
      });

      li.appendChild(delbutton);
      itemList.appendChild(li);
    }
    
   
    //console.log(myObjectSerialize);
    //console.log(myobjSerialize);

   // console.log(firstName+" "+lastName+" "+Gender+" "+Email+" "+Password+" "+phoneNumber)
   
   

