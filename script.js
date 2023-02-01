const menuItems=[{
id:1,
item:"Food Item1",
oneliner:"biryani",
img:"images/biryani.jpg",
hotel:"Dhana restaurent",
desc:"Spicy Chicken with Basmati Rice and chicken gravy"

}
,
{
    id:2,
    item:"Food Item2",
    oneliner:"burger",
    img:"images/burger.jpg",
    hotel:"Sunny restaurent",
    desc:"CHEESY BURGER"
    
    }
,
{
    id:3,
    item:"Food Item3",
    oneliner:"cake",
    img:"images/cake.jpg",
    hotel:"Nandy restaurent",
    desc:"Black Forset Tasty Cake"
    
    }
    ,
    {
        id:4,
        item:"Food Item4",
        oneliner:"chapathis",
        img:"images/chapathis.jpg",
        hotel:"madhu restaurent",
        desc:"chapathis with Ghee Applied on it"
        
        }
    ,{
        id:5,
        item:"Food Item5",
        oneliner:"frankie",
        img:"images/frankie.jpg",
        hotel:"Shiva Restaurent",
        desc:"Chicken/Mutton peices inside a rolled chapathi"
            
            }
            ,{
                id:6,
                item:"Food Item6", 
                oneliner:"noodles",
                img:"images/noodles.jpg",
                hotel:"Pavan restaurent",
                desc:"curly tasty Noodles"
                
                }
                ,{
                    id:7,
                    item:"Food Item7",
                    oneliner:"pasta",
                    img:"images/pasta.jpg",
                    hotel:"Abhi restaurent",
                    desc:"gravy pasta "
                    
                    }
                    ,
                    {
                        id:8,
                        item:"Food Item8",
                        oneliner:"salad",
                        img:"images/salad.jpg",
                        hotel:"Revi restaurent",
                        desc:"salad consits of different types of fruits"
                        
                        }
                        ,
                        {
                            id:9,
                            item:"Food Item9",
                            oneliner:"spaghetti",
                            img:"images/spaghetti.jpg",
                            hotel:"sai restaurent",
                            desc:"Spaghetti"
                            
                            },
                            
]
const item=document.getElementById('item');
const oneliner=document.getElementById('oneliner');
const img=document.getElementById('img');
const hotel=document.getElementById('hotel');
const desc=document.getElementById('desc');
const prev=document.getElementById('prev');
const random=document.getElementById('random');
const next=document.getElementById('next');

let currentMenu=0;
window.addEventListener('DOMContentLoaded',()=>{
allMenu(currentMenu);
})

const allMenu=()=>{
let menu=menuItems[currentMenu]
item.textContent=menu.item;
oneliner.textContent=menu.oneliner;
img.src=menu.img;
hotel.textContent=menu.hotel;
desc.textContent=menu.desc;
}

//random
random.addEventListener('click',()=>{
currentMenu=Math.floor(Math.random()*menuItems.length)
//console.log(currentMenu)
allMenu(currentMenu);
})
//previous button
prev.addEventListener('click',()=>{
currentMenu--;
if(currentMenu<0)
{
currentMenu=menuItems.length-1;
}
allMenu(currentMenu)
})

//next button
next.addEventListener('click',()=>{
currentMenu++;
if(currentMenu>menuItems.length)
{
currentMenu=0;
}
allMenu(currentMenu)
})