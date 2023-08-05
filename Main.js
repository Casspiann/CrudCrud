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
      delbutton.className = "btn btn-dark mr-2";
      var editbutton = document.createElement('button');
      editbutton.appendChild(document.createTextNode('Edit'));
      editbutton.className = "btn btn-success mr-2";
      editbutton.addEventListener('click',function(){
        var storedData = localStorage.getItem(Email);
        var userData = JSON.parse(storedData);

        // Update the form fields with the stored data
        document.getElementById("firstName").value = userData.FirstName;
        document.getElementById("lastName").value = userData.LastName;
        document.getElementById("gender").value = userData.Gender;
        document.getElementById("email").value = userData.Email;
        document.getElementById("Password").value = userData.Password;
        document.getElementById("Phone").value = userData.PhoneNumber;
        
        // Remove the entry from local storage
        localStorage.removeItem(Email);
        // Remove the list item from the display
        li.remove();

      })
    
      delbutton.addEventListener('click', function () {
        // Delete user when the delete button is clicked
        localStorage.removeItem(Email);
        li.remove();
      });
      li.appendChild(editbutton);
      li.appendChild(delbutton);
      
      itemList.appendChild(li);
    }
    
   
    //console.log(myObjectSerialize);
    //console.log(myobjSerialize);

   // console.log(firstName+" "+lastName+" "+Gender+" "+Email+" "+Password+" "+phoneNumber)
   
   

