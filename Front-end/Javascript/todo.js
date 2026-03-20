let btn=document.querySelector("button");
let input=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText= input.value;

    let delbtn=document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);

    ul.appendChild(item);
    input.value="";
});

// let delbtns=document.querySelectorAll(".delete");
// for(let btn of delbtns){
//     btn.addEventListener("click",function(e){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }

ul.addEventListener("click",function(e){
    if(e.target.nodeName==="BUTTON"){
        let par=e.target.parentElement;
        par.remove();
        console.log("deleted");
    }
});