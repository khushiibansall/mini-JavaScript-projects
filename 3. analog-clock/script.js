// hour hand -> (30*h +m/2)
// minutes: 6m , seconds: 6s

setInterval(()=>
{date= new Date();
    hTime=date.getHours();
    mTime=date.getMinutes();
    sTime= date.getSeconds();
    hRotation= 30*hTime + mTime/2;
    mRotation= 6*mTime;
    sRotation= 6*sTime;

    hour.style.transform= `rotate(${hRotation}deg)`;
    minute.style.transform= `rotate(${mRotation}deg)`;
    second.style.transform= `rotate(${sRotation}deg)`;
},1000);
