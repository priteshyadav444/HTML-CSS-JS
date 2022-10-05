setInterval(setClock,1000);

    const hourHand=document.getElementById('data-hour');
    const minuteHand=document.getElementById('data-minute');
    const secondHand=document.getElementById('data-second');
function setClock(){
	const currantDate=new Date();
	const secondRatio=currantDate.getSeconds()/60;
	const minuteRatio=(secondRatio+currantDate.getMinutes())/60;
	const hourRation=(minuteRatio+currantDate.getHours())/12;
   
     setRotation(secondRatio,secondHand);
     setRotation(minuteRatio,minuteHand);
     setRotation(hourRation,hourHand);
}
function setRotation(rotationRatio,element){
	element.style.setProperty('--rotation',rotationRatio*360);
}
setClock();