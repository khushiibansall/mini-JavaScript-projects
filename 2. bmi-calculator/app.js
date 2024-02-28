const form= document.querySelector('form')
//this use case will give you empty values
//const height= parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function(e){
    e.preventDefault()

    const height= parseInt(document.querySelector('#height').value)
    const weight= parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('.results')

    if(height ==='' || height<0 || isNaN(height)){
        results.innerHTML='please give a valid height'
    }
    else if(weight ==='' || weight<0 || isNaN(weight)){
        results.innerHTML='please give a valid weight'
    }
    else{
        const bmi= (weight/ ((height*height)/10000)).toFixed(2)
        
        if(bmi<18.6){
            results.innerHTML=`<span>Your BMI is ${bmi}, you are underweight.</span> `
        }
        else if(bmi >= 18.6 && bmi <= 28.9){
            results.innerHTML=`<span>Your BMI is ${bmi}, your weight lies in the normal range!.</span> `
        }
        else{
                results.innerHTML=`<span>Your BMI is ${bmi}, you are OVERWEIGHT.</span> `
        }
    }

})
