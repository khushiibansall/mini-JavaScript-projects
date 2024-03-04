let div = document.querySelector('div')
const button= document.querySelector('button')
// const str= document.querySelector('input')
let str1
button.addEventListener('click', ()=>{
    const value1= document.querySelector('#palindrome').value
    isPalindrome(value1)
})

function isPalindrome(str1){
    let value2= str1
    str1= reverseString(str1)
    if(str1==value2){
        div.innerHTML=`${value2} is a palindrome`
        // str.innerHTML=''
        
    }
    else{
        div.innerHTML=`${value2} is not a palindrome`
        // str.innerHTML=''
    }
}

function reverseString(str1) {
    let reversed = '';
    for (let i = str1.length - 1; i >= 0; i--) {
        reversed += str1[i];
    }
    return reversed;
}
