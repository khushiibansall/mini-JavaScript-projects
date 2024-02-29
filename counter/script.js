const increment= document.querySelector("#increment")
const decrement= document.querySelector("#decrement")
const setButton= document.querySelector("#set")
const reset= document.querySelector("#reset")
const counter= document.querySelector("div")
let number=0
let newVal
let color1
let isPrime= true
function isPrimeNumber(){
    for(let j=2; j<=number/2; j++){
        if(number%j===0){
            isPrime= false;
            break;
        }
    }
    if(isPrime){
        counter.style.color="red"
    } else{
        counter.style.color = "black";
    }
}
setButton.addEventListener("click",()=>{
    newVal = prompt("give number");
    // color1= prompt("change the colour of the counter")
    // counter.style.color=color1
    if (!isNaN(newVal) && newVal >= 0) {
        number = parseInt(newVal);
        isPrimeNumber()
        counter.innerHTML = `${number}`;
    } else {
        alert("Please enter a valid non-negative number.");
    }
})
increment.addEventListener("click",()=>{
    number=number+1;
    isPrimeNumber()
    counter.innerHTML=`${number}`
})
decrement.addEventListener("click",()=>{
    if(number>0){
        number=number-1;
        isPrimeNumber()
    counter.innerHTML=`${number}`
    }
    else{
        alert("the counter can not go bellow 0!")
    }
})
reset.addEventListener("click",()=>{
    number=0;
    counter.innerHTML=`${number}`
})
