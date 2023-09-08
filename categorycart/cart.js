
let cart=[];
let quantity = new Array(13).fill(0);
var shop_area= document.getElementById("shop-area")
const itemsPerLine = 3; // Number of items per line
const itemWidthPercent = 60 / itemsPerLine;
prev_length=0;


for (let i=1; i<13; i++)
{
    var item_box= document.createElement("div");
    item_box.setAttribute("class","cat_title");
    item_box.setAttribute("id","category"+i);
    item_box.innerHTML="category "+(i);
    item_box.style.width = itemWidthPercent + "%";
    shop_area.appendChild(item_box);
}

for(let j=1; j<13;j++ )
{
    let menu_drop=document.createElement("div")
    menu_drop.setAttribute("class","menu_style")
    menu_drop.setAttribute("id","menu"+j)
    menu_drop.style.display = "none";

    for(let i=1; i<10;i++)
    {
        var item_box= document.createElement("div");
        item_box.setAttribute("class","item_title");
        item_box.setAttribute("id",i);
        item_box.innerHTML="item "+(i);
        menu_drop.appendChild(item_box);
        // console.log(menu_drop)
    }
    //console.log(menu_drop)
    var cat= document.getElementById("category"+j);
    // console.log(document.getElementById("category"+j))
    cat.appendChild(menu_drop);

}

//listen for hovers
document.addEventListener("mouseover",(e)=>{
    
    if(e.target.id.includes("category"))
    {
        let hovered_over= e.target.id.replace("category","");
        var h_cat= document.getElementById("menu"+hovered_over)
        h_cat.style.display = "unset";


        // document.getElementById("menu"+hovered_over).addEventListener('mouseout', (e)=>{
           
        //     console.log("I am in hovered over")
        //     h_cat.style.display = "none";
        //   });
    }
})

//listener for clicks
document.addEventListener('click', (e) =>
{
    console.log(e.target.id)
    if (parseInt(e.target.id))
    {
        var curr_id= parseInt(e.target.id);
        if (cart.length==0)
        {
            console.log("I am making cart now")
            makeCart();
        }
        cart.push(curr_id)
        UpdateCart(parseInt(e.target.id))
        console.log(cart);
    }
    
    if(e.target.id==="del_button")
    {
        let poof= document.getElementById("cart_style");
        var entire_shop= document.getElementById("shopping");
        entire_shop.removeChild(poof);
        quantity.fill(0)
        cart.length=0;
        prev_length=0;
    }
   
    if(e.target.className==="trash")
    {
        let to_del= e.target.id.replace("trash","");
        cart=cart.join("").replaceAll(String(5),"").split("").map(Number)
        console.log("Updated cart: "+ cart)
        quantity[to_del-1]=0;
        removeItemfromCart(to_del)

        updateTotal()
    }

    if(e.target.className==="add")
    {
        let to_add= e.target.id.replace("add","");
        cart.push(to_add)
        console.log("Updated cart: "+ cart)
        UpdateCart(parseInt(parseInt(to_add)))
        updateDiv(to_add)

        updateTotal()
    
    }

    if(e.target.className==="sub")
    {
        let to_del= e.target.id.replace("sub","");
        console.log("Updated cart: "+ cart)
        cart=cart.join("").replace(String(5),"").split("").map(Number)
        if (quantity[to_del-1]==1)
        {
            removeItemfromCart(to_del)
        }
        else
        {
            quantity[to_del-1]-=1;
            updateDiv(to_del)
        }
            
        updateTotal()
    }

    

});

function makeCart(){
   var c_area= document.createElement("div");
   c_area.setAttribute("id",'cart_style');
   shop_area.setAttribute("width",'60%')

   var heading_cart= document.createElement("h1")
   heading_cart.innerHTML="Cart Items"
   c_area.appendChild(heading_cart)

   var entire_shop= document.getElementById("shopping");
   entire_shop.appendChild(c_area)
   console.log("I have added the cart")
   
    
    AddTotal()



}

//adds the total quantity div to the shopping cart
function AddTotal()
{
    var c_item= document.createElement("div");
    c_item.setAttribute("class","cart_internal")
    c_item.setAttribute("id","Total_Div")

    var item_name= document.createElement("h3");
    item_name.setAttribute("id","name");

    var quant_item= document.createElement("h3");
    quant_item.setAttribute("id","gtotal");
    quant_item.setAttribute("class","amt");
    item_name.innerHTML="Total: ";
    quant_item.innerHTML=quantity.reduce((sum, num) => sum + num);

    var item_del=document.createElement("button");
    item_del.setAttribute("id","del_button")
    item_del.innerHTML="Empty Cart"

    c_item.appendChild(item_name);
    c_item.appendChild(quant_item);
    c_item.appendChild(item_del);
 
    document.getElementById("cart_style").appendChild(c_item);
    
}

//controls which update function to call
function UpdateCart(item_no){
  
    if(cart.length>prev_length)
    {
        
        quantity[item_no-1]+=1

        if (quantity[item_no-1]==1)
            createNewDiv(item_no)
        else 
            updateDiv(item_no)
        
    }
    

    console.log("this is quantity")
    console.log(quantity)
}


//adds a new item to cart 
function createNewDiv(item_no)
{
    var c_item= document.createElement("div");
    c_item.setAttribute("class","cart_internal")
    c_item.setAttribute("id","cart_internal"+item_no)

    var item_name= document.createElement("h3");
    item_name.setAttribute("id","name");

    var quant_item= document.createElement("h3");
    quant_item.setAttribute("id","amt"+item_no);
    quant_item.setAttribute("class","amt");
    item_name.innerHTML="Item "+ item_no;
    quant_item.innerHTML=quantity[item_no-1];

    var item_del=document.createElement("img");
    item_del.src="trash.png";
    item_del.setAttribute("class","trash")
    item_del.setAttribute("id","trash"+item_no)

    var item_add=document.createElement("img");
    item_add.src="plus.png";
    item_add.setAttribute("class","add")
    item_add.setAttribute("id","add"+item_no)


    var item_sub=document.createElement("img");
    item_sub.src="minus.png";
    item_sub.setAttribute("class","sub")
    item_sub.setAttribute("id","sub"+item_no)

    

    c_item.appendChild(item_name);
    c_item.appendChild(quant_item);
    c_item.appendChild(item_del);
    c_item.appendChild(item_add);
    c_item.appendChild(item_sub);
    document.getElementById("cart_style").appendChild(c_item);
    let poof=document.getElementById("Total_Div")
    document.getElementById("cart_style").removeChild(poof)
     AddTotal()

    updateTotal()
}

//Updates Quantity on existing cart item
function updateDiv(item_no)                         
{
   
    document.getElementById("amt"+item_no).innerHTML=quantity[item_no-1];
    updateTotal()
}

//Removes an Item from cart (item id)
function removeItemfromCart(item_no)
{
    let rem= document.getElementById("cart_internal"+item_no)
    document.getElementById("cart_style").removeChild(rem)
}

//Update the total quantity when an existing item is incremented
function updateTotal()
{
    document.getElementById("gtotal").innerHTML=quantity.reduce((sum, num) => sum + num);
}




