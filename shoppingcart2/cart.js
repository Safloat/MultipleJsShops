// const items_arr=[]
// const obj = [{
//     id: 1,
//     title: "item 1",
//     price: "20"
// },
// ]
const obj=[
    {
        idn:1, 
        title: "Item 1",
        price:200, 
        quantity:0
    }, 

    {
        idn:2, 
        title: "Item 2",
        price:150,
        quantity:0
    }, 

    {
        idn:3, 
        title: "Item 3",
        price:300,
        quantity:0
    }, 

    {
        idn:4, 
        title: "Item 4",
        price:350,
        quantity:0
    }, 

    {   
        idn:5, 
        title: "Item 5",
        price:450,
        quantity:0
    }, 
    
    {   
        idn:6, 
        title: "Item 6",
        price:320,
        quantity:0
    }, 
    
    {
        idn:7, 
        title: "Item 7",
        price:120,
        quantity:0
    }, 
    
    {
        idn:8, 
        title: "Item 8",
        price:620,
        quantity:0
    }, 

    {
        idn:9, 
        title: "Item 9",
        price:80,
        quantity:0
    }, 

    {
        idn:10, 
        title: "Item 10",
        price:20,
        quantity:0
    }, 

    {
        idn:11, 
        title: "Item 11",
        price:40,
        quantity:0
    }, 

    {   
        idn:12, 
        title: "Item 12",
        price:50,
        quantity:0
    }
        
]
let cart=[];
let quantity = new Array(13).fill(0);
var shop_area= document.getElementById("shop-area")
const itemsPerLine = 3; // Number of items per line
const itemWidthPercent = 60 / itemsPerLine;
prev_length=0;


obj.forEach((item)=>
{
    var item_box= document.createElement("div");
    item_box.setAttribute("class","item_title");
    item_box.setAttribute("id",item.idn);
    item_box.innerHTML="Item "+(item.idn);
    item_box.style.width = itemWidthPercent + "%";
    shop_area.appendChild(item_box);
})

//listener for clicks


//for item boxes

const boxes = document.getElementsByClassName('item_title');

for (const box of boxes) {
  box.addEventListener('click', function handleClick(event) {
    console.log('box clicked', event);
    var curr_id= parseInt(event.target.id);
        if (cart.length==0)
        {
            console.log("I am making cart now")
            makeCart();
        }
        cart.push(curr_id)
        UpdateCart(parseInt(event.target.id))
        console.log(cart);
  });
}


// function newEventListeners(){


//     let trashbutton = document.getElementsByClassName('trash');

//     for (const button of trashbutton) {
        
//     button.addEventListener('click', (e)=> {
//         let to_del= e.target.id.replace("trash","");
//         cart=cart.join("").replaceAll(String(5),"").split("").map(Number)
//         console.log("Updated cart: "+ cart)
//         quantity[to_del-1]=0;
//         removeItemfromCart(to_del)

//         updateTotal()
//     });
//     }


//     let addbutton = document.getElementsByClassName('add');
//     console.log("I am in addition")
//     for (const button of addbutton) {
//         console.log("I am in addition")
//         button.addEventListener('click', (e)=> {
//         let to_add= e.target.id.replace("add","");
//         cart.push(to_add)
//         //obj[parseInt(to_add)-1].quantity+=1
//         console.log("Updated cart:" + obj[parseInt(to_add)-1].quantity)
//         UpdateCart(parseInt(to_add))
//         updateDiv(to_add)
        
//         updateTotal()
//     });
//     }

//     let subbutton = document.getElementsByClassName('sub');
//     for (const button of subbutton) {
//     button.addEventListener('click', (e)=> {
//         let to_del= e.target.id.replace("sub","");
//         if( obj[parseInt(to_del)-1].quantity>=1)
//         {
//             obj[parseInt(to_del)-1].quantity-=1;
//             if (obj[parseInt(to_del)-1].quantity==0)
//                 {
//                     removeItemfromCart(to_del)
//                 }
//             else
//                 {
//                     updateDiv(to_del)
//                 }
                
//         updateTotal()
//         console.log(obj)
//         }
//         else
//         {
//             obj[parseInt(to_del)-1].quantity=0;
//         }
       

        
//         console.log("Updated cart : "+to_del+ obj[parseInt(to_del)-1].quantity);
        
//     });

     
    // }

 
// }

   
// document.addEventListener('click', (e) =>
// {
//     // if (parseInt(e.target.id))
//     // {
//     //     var curr_id= parseInt(e.target.id);
//     //     if (cart.length==0)
//     //     {
//     //         console.log("I am making cart now")
//     //         makeCart();
//     //     }
//     //     cart.push(curr_id)
//     //     UpdateCart(parseInt(e.target.id))
//     //     console.log(cart);
//     // }
    
//     if(e.target.id==="del_button")
//     {
//         // let poof= document.getElementById("cart_style");
//         // var entire_shop= document.getElementById("shopping");
//         // entire_shop.removeChild(poof);
//         // quantity.fill(0)
//         // cart.length=0;
//         // prev_length=0;
//     }
   
//     if(e.target.className==="trash")
//     {
//         // let to_del= e.target.id.replace("trash","");
//         // cart=cart.join("").replaceAll(String(5),"").split("").map(Number)
//         // console.log("Updated cart: "+ cart)
//         // quantity[to_del-1]=0;
//         // removeItemfromCart(to_del)

//         // updateTotal()
//     }

//     if(e.target.className==="add")
//     {
//         // let to_add= e.target.id.replace("add","");
//         // cart.push(to_add)
//         // console.log("Updated cart: "+ cart)
//         // UpdateCart(parseInt(parseInt(to_add)))
//         // updateDiv(to_add)

//         // updateTotal()
    
//     }

//     if(e.target.className==="sub")
//     {
//         // let to_del= e.target.id.replace("sub","");
//         // console.log("Updated cart: "+ cart)
//         // cart=cart.join("").replace(String(5),"").split("").map(Number)
//         // if (quantity[to_del-1]==1)
//         // {
//         //     removeItemfromCart(to_del)
//         // }
//         // else
//         // {
//         //     quantity[to_del-1]-=1;
//         //     updateDiv(to_del)
//         // }
            
//         updateTotal()
//     }

    

// });

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

    document.getElementById("del_button").addEventListener('click', (e)=> {

        let poof= document.getElementById("cart_style");
        var entire_shop= document.getElementById("shopping");
        entire_shop.removeChild(poof);
        console.log("i am showing u the loop")
        obj.forEach((item) => 
        {
            console.log("hi")
            item.quantity = 0;

            // console.log(obj.quantity[key])
          })
        cart=[];
        cart.length=0;
        prev_length=0;

        console.log(cart)
        console.log(obj)
    });


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
    quant_item.innerHTML= getTotalCost();

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
        
        obj[item_no-1].quantity+=1;
        console.log("In update cart"+ obj[item_no-1].quantity)

        if (obj[item_no-1].quantity==1)
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
    
  
    //obj[item_no-1].quantity+=1;
    id_cart="cart_internal"+item_no;
    id_quant="amt"+item_no;
    id_trash="trash"+item_no;
    id_add="add"+item_no;
    id_sub="sub"+item_no;
    document.getElementById("cart_style").insertAdjacentHTML('beforeend',
       ` <div class="cart_internal" id="${id_cart}">
            <h3 class="name">
            Item ${item_no}
            </h3>
            <h3 class="amt" id="${id_quant}">
            ${obj[item_no-1].quantity}
            </h3>
            <img src="trash.png" class="trash" id="${id_trash}"/>
            <img src="plus.png" class="add" id="${id_add}"/>
            <img src="minus.png" class="sub"id="${id_sub}"/>
            </div> `
    )
    let poof=document.getElementById("Total_Div")
    document.getElementById("cart_style").removeChild(poof)
     AddTotal()

    updateTotal()

    document.getElementById(String(id_trash)).addEventListener('click', (e)=> {
                let to_del= e.target.id.replace("trash","");
                cart=cart.join("").replaceAll(String(5),"").split("").map(Number)
                console.log("Updated cart: "+ cart)
                quantity[to_del-1]=0;
                removeItemfromCart(to_del)
        
                updateTotal()
            });

    document.getElementById(String(id_add)).addEventListener('click', (e)=> {
            let to_add= e.target.id.replace("add","");
            cart.push(to_add)
            //obj[parseInt(to_add)-1].quantity+=1
            console.log("Updated cart:" + obj[parseInt(to_add)-1].quantity)
            UpdateCart(parseInt(to_add))
            updateDiv(to_add)
            
            updateTotal()
        });
        document.getElementById(String(id_sub)).addEventListener('click', (e)=> {
        let to_del= e.target.id.replace("sub","");
        if( obj[parseInt(to_del)-1].quantity>=1)
        {
            obj[parseInt(to_del)-1].quantity-=1;
            if (obj[parseInt(to_del)-1].quantity==0)
                {
                    removeItemfromCart(to_del)
                }
            else
                {
                    updateDiv(to_del)
                }
                
        updateTotal()
        console.log(obj)
        }
        else
        {
            obj[parseInt(to_del)-1].quantity=0;
        }
       

        
        console.log("Updated cart : "+to_del+ obj[parseInt(to_del)-1].quantity);
        
    });

    document.getElementById("del_button").addEventListener('click', (e)=> {

        let poof= document.getElementById("cart_style");
        var entire_shop= document.getElementById("shopping");
        entire_shop.removeChild(poof);
        console.log("i am showing u the loop")
        obj.forEach((item) => 
        {
            console.log("hi")
            item.quantity = 0;

            // console.log(obj.quantity[key])
          })
        cart=[];
        cart.length=0;
        prev_length=0;

        console.log(cart)
        console.log(obj)
    });
    // newEventListeners()
    getTotalCost()
   
}

//Updates Quantity on existing cart item
function updateDiv(item_no)                         
{
   
    document.getElementById("amt"+item_no).innerHTML=obj[item_no-1].quantity;
    updateTotal()
}

//Removes an Item from cart (item id)
function removeItemfromCart(item_no)
{
    obj[parseInt(item_no)-1].quantity=0;
    let rem= document.getElementById("cart_internal"+item_no)
    document.getElementById("cart_style").removeChild(rem)
}

//Update the total quantity when an existing item is incremented
function updateTotal()
{
    document.getElementById("gtotal").innerHTML=getTotalCost();
}

function getTotalCost()
{
    let total=0;
    obj.forEach((item)=>
    {
       total+= item.price*item.quantity;
    })
    console.log(total)
    return total;
}