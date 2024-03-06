var getLoc= document.getElementById('getLocation')
getLoc.addEventListener('click', event=>{
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(pos=>{
            let latitude= pos.coords.latitude
            let longitude= pos.coords.longitude
            console.log('latitude', latitude)
            console.log('longitude', longitude)
            console.log(latitude, longitude)
        }, error =>{
            console.log('denied by the user', error.code)
        })
    }
    else{
console.log('geolocation not supported')
    }
})
