let globallist = Array.from(document.getElementsByClassName('globallist')) ;
let myproductlist =Array.from(document.getElementsByClassName('myproductlist'));
let mylist =Array.from(document.getElementsByClassName('mylist'));
let heart= Array.from(document.getElementsByClassName('heart'));
let plus = Array.from(document.getElementsByClassName('plus')) ;
let minus = Array.from(document.getElementsByClassName('minus'));
var price = Array.from(document.getElementsByClassName("price")) ;
let counter = Array.from(document.getElementsByClassName('counter'));
let total = Array.from(document.getElementsByClassName('total'));
let pricetotal = document.getElementById('pricetotal');




console.log(mylist.length)



function changeColor(el)
{
if(el.target.style.color !== 'red' ){
    el.target.style.color = 'red'
}else {

    el.target.style.color = 'black'
}

}

function calculateSum(){
    let somme = 0 ;
    for(let i = 0 ; i < mylist.length ; i++){
        total[i].value = Number(price[i].innerText) * Number(counter[i].innerText)
        somme += Number(price[i].innerText) * Number(counter[i].innerText);
        console.log("s="+somme) ;
        pricetotal.value = somme ;
    }

   

// //   pricetotal.value = somme ;


// console.log("kkkkkkk"+pricetotal.innerHTML)
 
}







for (let i= 0 ; i < mylist.length ; i++) 
{
    plus[i].addEventListener ('click', function() {
        counter[i].innerText++
        calculateSum()
    })


    minus[i].addEventListener('click' , function(){
        if(counter[i].innerHTML>0){
            counter[i].innerText-- ;


            calculateSum()

        }
    })


 let buttonremove = remove[i]
 buttonremove.addEventListener('click' , function(event){
     let buttonClick = event.target
     buttonClick.parentElement.remove()
     price[i].innerHTML=0 ;

     calculateSum()
 })



heart[i].addEventListener("click" , changeColor)



console.log('helllloooooooooooooooooo')


}


