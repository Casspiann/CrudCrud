var item = document.getElementById("Submit");

item.addEventListener('click', printDetail);
document.addEventListener('DOMContentLoaded', addlist);

function addlist(){
    axios.get("https://crudcrud.com/api/258b301853234b3c86708f1a5e28e297/addProduct")
    .then((responce)=>{
        for(let i=0;i<responce.data.length;i++){
            createListItem(responce.data[i]);
        }
    })
}

function printDetail(e){
    e.preventDefault(); 
    let selling = document.getElementById("selling").value;
    let product = document.getElementById("productName").value;
    let category = document.getElementById("category").value;
    var obj = {
        sellingPrice: selling,
        Product: product,
        Category:category
    };
    axios.post("https://crudcrud.com/api/258b301853234b3c86708f1a5e28e297/addProduct",obj)
    .then((responce)=>{
        createListItem(responce.data);
        console.log(responce);
    })
    .catch((error)=>{
        console.log(error);
    })

}
function createListItem(userData){
    var itemList = document.getElementById('items');
    var itemlists = document.getElementById("items1");
    var itemlistss = document.getElementById("items2");
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(`Selling Price: ${userData.sellingPrice}, Product: ${userData.Product},Category :${userData.Category}`));
    
    var delbutton = document.createElement('button');
    delbutton.appendChild(document.createTextNode('DELETE'));
    delbutton.className = "btn btn-dark mr-2";
    delbutton.addEventListener('click', function () {
        //localStorage.removeItem(email); // Used 'email' instead of 'Email'
        var id =userData._id;
        //console.log(id);
        axios.delete("https://crudcrud.com/api/258b301853234b3c86708f1a5e28e297/addProduct/"+id)
        .then((responce)=>{
            console.log(responce);
        })
        .catch((error)=>{
            console.log(error);
        })
        li.remove();
    });
    li.appendChild(delbutton);
  //  itemList.appendChild(li);
  if(userData.Category === "Electronic Items")
  {
    itemList.appendChild(li);
  }
  else if(userData.Category === "Food Items"){
    itemlists.appendChild(li);
  }
  else{
        itemlistss.appendChild(li);
  }  
    
}

