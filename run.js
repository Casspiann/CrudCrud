var item = document.getElementById("Submit");
var itemList = document.getElementById('items');
document.addEventListener('DOMContentLoaded',addlist)
    
function addlist() {
  for (let i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var storedData = localStorage.getItem(key);
    var Data = JSON.parse(storedData);
    if(Data){
    
      createListItem(key, Data);
    }
    
  }
}

item.addEventListener('click', printDetail);

    function printDetail(e) {
        var expen = document.querySelector("#ExpenscaAmmount").value;
        var desc = document.querySelector("#description").value;
        var cate = document.querySelector("#catagory").value;
       // console.log(expen+desc+cate);
       var obj = {
        Expen :expen,
        Desc :desc,
        Cate:cate
       };
       var myobjSerialize = JSON.stringify(obj);
       localStorage.setItem(cate,myobjSerialize);
       var storedData = localStorage.getItem(cate);
       var userData = JSON.parse(storedData);
       createListItem(cate,userData);
      
  }
  function createListItem(cate,userData){

    var li = document.createElement('li');
    li.appendChild(document.createTextNode(`Expences:${userData.Expen}, Description:${userData.Desc} , Category:${userData.Cate}`));
      var delbutton = document.createElement('button');
      delbutton.appendChild(document.createTextNode('DELETE EXPENSE'));
      delbutton.className = "btn btn-dark mr-2";
      var editbutton = document.createElement('button');
      editbutton.appendChild(document.createTextNode('Edit EXPENSE'));
      editbutton.className = "btn btn-success mr-2";
      editbutton.addEventListener('click',function(){
      
        document.querySelector("#ExpenscaAmmount").value = userData.Expen;
        document.querySelector("#description").value = userData.Desc;
        document.querySelector("#catagory").value = userData.Cate;
        localStorage.removeItem(cate);
        li.remove();
    });
    delbutton.addEventListener('click', function () {
        // Delete user when the delete button is clicked
        localStorage.removeItem(cate);
        li.remove();
      });
      li.appendChild(editbutton);
      li.appendChild(delbutton);
      
      itemList.appendChild(li);
}
