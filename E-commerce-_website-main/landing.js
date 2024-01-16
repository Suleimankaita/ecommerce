const product =[{
    id:0,
    Image:"../E-commerce-_website-main/motorcycle.JPG",
    title:"motor cycle",
    price:500,
},
{
    id:1,
    Image:"systemm.JPG",
    title:"laptop",
    price:200,
    },  {
        id:2,
        Image:"../E-commerce-_website-main/fashion2.JPG",
        title:"clothes",
        price:50
    },
     {
        id:3,
        Image:"../E-commerce-_website-main/properties/iphone12pro.JPG",
        title:"desktop all in one",
        price:600
    },
   
   {
        id:4,
        Image:"../E-commerce-_website-main/whitekit.JPG",
        title:"kitchen",
        price:2000
    }, 
    {
        id:5,
        Image:"../E-commerce-_website-main/fashiondesing.JPG",
        title:"kaftan fasion",
        price:70
    },
  {
        id:6,
        Image:"../E-commerce-_website-main/watch.JPG",
        title:"i watch s3",
        price:300
    },
    {
        id:7,
        Image:"../E-commerce-_website-main/iphone11.JPG",
        title:"iphone 11",
        price:400
    },
    {
        id:8,
        Image:"../E-commerce-_website-main/microship.JPG",
        title:"micro chip",
        price:400
    },
    {
        id:9,
        Image:"../E-commerce-_website-main/electricdoor.JPG",
        title:"electonic door",
        price:4000
    },
    {
        id:10,
        Image:"../E-commerce-_website-main/iphone13.JPG",
        title:"iphone13",
        price:1000
    },
    {
        id:11,
        Image:"../E-commerce-_website-main/iphones.JPG",
        title:"iphones",
        price:3000
    },
    {
        id:12,
        Image:"../E-commerce-_website-main/electricmoper.JPG",
        title:"electornic moper",
        price:750
    },
    {
        id:13,
        Image:"../E-commerce-_website-main/ac.JPG",
        title:"a c ",
        price:800
    }, 

];
 

var categories = [... new Set(product.map((item) => { return item }))];
document.getElementById("search").addEventListener("keyup",(event)=>{
    var search=event.target.value.toLowerCase();
    var filter=categories.filter((item)=>{
        return item.title.toLocaleLowerCase().includes(search)
    })
    displayitem(filter);
});
const displayitem=(items)=>{
    document.getElementById("root").innerHTML=items.map((item)=>{
        var {Image,title,price}=item;
        return`<div class='box'>
            <img class='image' width="200px" height="200px" src=${Image}></img>
            <div class="bottom">
            <br>
            <a href=""><button class="viewbt"> add to card</button></a>
            
                <p class="p">${title}</p>
                <h2> $${price}</h2>
                </div>
                </div>`
    })
}
displayitem(categories) 


let nav = document.getElementById("navlinks")

function show() {
        nav.style.left="0px"
}
    show()
function hide() {
        nav.style.left="-350px"
}
hide();