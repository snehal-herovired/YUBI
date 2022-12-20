let deliver_div =document.querySelector(".deliver");
let order_div =document.querySelector(".orders");
let subheader =document.querySelector('.subheader');
// console.log(subheader.children);
let child_of_subheader =subheader.children;


deliver_div.addEventListener("mouseover",(e)=>{
    deliver_div.style.border="1px solid white"
})

deliver_div.addEventListener("mouseout",(e)=>{
    deliver_div.style.border="none"
})
order_div.addEventListener("mouseover",(e)=>{
    order_div.style.border="1px solid white"
})

order_div.addEventListener("mouseout",(e)=>{
    order_div.style.border="none"
})

// for(let i=0;i<child_of_subheader.length;i++){
//     child_of_subheader[i].addEventListener("mouseover",(e)=>{
//         child_of_subheader[i].classList.add('hoverEffect')
//     })
//     child_of_subheader[i].addEventListener("mouseout",(e)=>{
//         child_of_subheader[i].classList.add('hoverOut')
//     })
// }
for(let i=0;i<child_of_subheader.length;i++){
    child_of_subheader[i].addEventListener("mouseover",(e)=>{
        child_of_subheader[i].className=''
        child_of_subheader[i].classList.add('hoverEffect')
    })
  
}
for(let i=0;i<child_of_subheader.length;i++){
    child_of_subheader[i].addEventListener("mouseout",(e)=>{
        child_of_subheader[i].className=''
        child_of_subheader[i].classList.add('hoverOut')
    })
  
}


// fetch
// fetch is used for calling APIs ;
// in order to get data from external sources or server;
// fetch is a inbuilt  Ajax method used to handle request to a server;
// fetch is a promisified function;

