
const cat=[
    {
        id:1,
        title:"Beverages"
    },

    {
        id:2,
        title:"Crisps/Savoury"
    },

    {
        id:3,
        title:"Confectionary"
    },

    {
        id:4,
        title:"Pharmacy"
    },
    {
        id:5,
        title:"Hygeine"
    },
    {
        id:6,
        title:"Spices"
    },
    {
        id:7,
        title:"Cosmetics"
    },
    {
        id:8,
        title:"Electronics"
    },
    {
        id:9,
        title:"Stationary"
    },
    {
        id:10,
        title:"Toys/Games"
    },
    {
        id:11,
        title:"Cleaning Supplies"
    },
    {
        id:12,
        title:"Dairy"
    }
]
const obj=[
    {
        idn:1, 
        title: "Milk",
        price:200, 
        quantity:0,
        catg:"Dairy"
    }, 

    {
        idn:2, 
        title: "Surface Cleaner",
        price:150,
        quantity:0,
        catg:"Cleaning Supplies"
    }, 

    {
        idn:3, 
        title: "Ludo",
        price:300,
        quantity:0,
        catg:"Toys/Games"
    }, 

    {
        idn:4, 
        title: "Markers",
        price:350,
        quantity:0,
        catg:"Stationary"
    }, 

    {   
        idn:5, 
        title: "Electric Kettle",
        price:450,
        quantity:0,
        catg:"Electronics"
    }, 
    
    {   
        idn:6, 
        title: "Lipgloss",
        price:320,
        quantity:0,
        catg:"Cosmetics"
    }, 
    
    {
        idn:7, 
        title: "Turmeric",
        price:120,
        quantity:0,
        catg:"Spices"
    }, 
    
    {
        idn:8, 
        title: "Doritos",
        price:620,
        quantity:0,
        catg:"Crisps/Savoury"
    }, 

    {
        idn:9, 
        title: "Shampoo",
        price:80,
        quantity:0,
        catg:"Hygeine"
    }, 

    {
        idn:10, 
        title: "Panadol",
        price:20,
        quantity:0,
        catg:"Pharmacy"
    }, 

    {
        idn:11, 
        title: "Chocolate",
        price:40,
        quantity:0,
        catg:"Confectionary"
    }, 

    {   
        idn:12, 
        title: "Coca Cola",
        price:50,
        quantity:0,
        catg:"Beverages"
    },

    {   
        idn:13, 
        title: "7up",
        price:50,
        quantity:0,
        catg:"Beverages"
    },
    {   
        idn:14, 
        title: "Fanta",
        price:50,
        quantity:0,
        catg:"Beverages"
    },
    {   
        idn:15, 
        title: "Orange juice",
        price:50,
        quantity:0,
        catg:"Beverages"
    },
    {   
        idn:16, 
        title: "Toothbrush",
        price:30,
        quantity:0,
        catg:"Hygeine"
    },
    {   
        idn:17, 
        title: "Toothpaste",
        price:70,
        quantity:0,
        catg:"Hygeine"
    },

        
]

let cart=[];
const itemsPerLine = 3; // Number of items per line
const itemWidthPercent = 60 / itemsPerLine;
let prev_length=0;

cat.forEach((item)=>
{
  
    var iden= item.id+"cat";
    w_width=itemWidthPercent + "%";

    document.getElementById("shop-area").insertAdjacentHTML('beforeend',
    ` 
        <div class="cat_title" id="${iden}" style="width:${w_width};">
            ${item.title}

            <div class="disp" id="${item.title}" style="display:none;"> </div>
        </div>`
    )

    document.getElementById(iden).addEventListener('mouseover', function handleClick(e) {

        if(e.target.id.includes("cat"))
        {   let cat_id= parseInt( e.target.id.replace("cat",""));
            console.log('box hovered', e);
            console.log(cat_id)
            
            var to_disp=document.getElementById(cat[parseInt(cat_id)-1].title);
            to_disp.style.display="inline";
           
    
            to_disp.addEventListener('mouseover', function handleClick(e) 
            
            {
                
                //to make menu of items visible
                to_disp.style.zIndex=2;
                to_disp.style.display="block";
    
    
                to_disp.addEventListener('mouseout', function handleClick(e) 
                {
                
                    to_disp.style.zIndex=0;
                    to_disp.style.display="none";
                
                });
        
            
            });
    
            document.getElementById(iden).addEventListener('mouseout', function handleClick(e) 
              {
    
            
                to_disp.style.zIndex=0;
                to_disp.style.display="none";
              })
    
    
        }
    
      
      });
    
   
})

obj.forEach((item)=>
{
    var item_box= document.createElement("div");
    item_box.setAttribute("class","item_title");
    item_box.setAttribute("id",item.idn);
    item_box.innerHTML=item.title;
    document.getElementById(item.catg).appendChild(item_box);
    item_box.addEventListener('click', function handleClick(event) 
    {
            var curr_id= parseInt(event.target.id);
                if (cart.length==0)
                {
                    makeCart();
                }
                cart.push(curr_id)
                UpdateCart(parseInt(event.target.id))
                console.log(cart);
    });
})


function makeCart()

{


   document.getElementById("shopping").insertAdjacentHTML('beforeend',
   `
        <div id="cart_style" style="width:60%" >
        <h1>Cart Items</h1>
        </div>
   `)

    AddTotal()

  


}

//adds the total quantity div to the shopping cart
function AddTotal()
{

    document.getElementById("cart_style").insertAdjacentHTML('beforeend',
    `
        <div class="cart_internal" id="Total_Div">
            <h3 id="gtotal" class="amt"> Total ${getTotalCost()}</h3>
            <button id="del_button"> Empty Cart</button>
        </div>
    `)
    document.getElementById("del_button").addEventListener('click', (e)=> {

        let poof= document.getElementById("cart_style");
        var entire_shop= document.getElementById("shopping");
        entire_shop.removeChild(poof);
        obj.forEach((item) => 
        {

            item.quantity = 0;

            
        })
        cart=[];
        cart.length=0;
        prev_length=0;

    });
}

//controls which update function to call
function UpdateCart(item_no)

{
  
    if(cart.length>prev_length)

    {
        obj[item_no-1].quantity+=1;

        if (obj[item_no-1].quantity==1)
            createNewDiv(item_no)

        else 
            updateDiv(item_no)
        
    }
}


//adds a new item to cart 
function createNewDiv(item_no)
{
    
    document.getElementById("cart_style").insertAdjacentHTML('beforeend',
       ` <div class="cart_internal" id="${"cart_internal"+item_no}">
            <h3 class="name">
             ${obj[parseInt(item_no)-1].title}
            </h3>
            <h3 class="amt" id="${"amt"+item_no}">
            ${obj[item_no-1].quantity}
            </h3>
            <img src="trash.png" class="trash" id="${"trash"+item_no}"/>
            <img src="plus.png" class="add" id="${"add"+item_no}"/>
            <img src="minus.png" class="sub"id="${"sub"+item_no}"/>
            </div> `
    )

    let poof=document.getElementById("Total_Div")
    document.getElementById("cart_style").removeChild(poof)
    AddTotal()
    updateTotal()

    //initialize event listeners for trash, add and substract

    document.getElementById(String("trash"+item_no)).addEventListener('click', (e)=> 

    {
                let to_del= e.target.id.replace("trash","");
                cart=cart.join("").replaceAll(String(to_del),"").split("").map(Number)
                console.log("Updated cart: "+ cart)
                removeItemfromCart(to_del)
        
                updateTotal()
    });

    document.getElementById(String("add"+item_no)).addEventListener('click', (e)=> 
    {
            let to_add= e.target.id.replace("add","");
            cart.push(to_add)
            UpdateCart(parseInt(to_add))
            updateDiv(to_add)
            
            updateTotal()
    });


    document.getElementById(String("sub"+item_no)).addEventListener('click', (e)=> 
    {
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
        
    });


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